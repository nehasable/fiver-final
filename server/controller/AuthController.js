//contains all the functions that will be implemented through routes
import { PrismaClient } from "@prisma/client"
import { genSalt, hash } from "bcrypt"
import jwt from "jsonwebtoken"
import JWT_KEY from"jsonwebtoken"

const generatePassword=async(password)=>{
    const salt=await genSalt()
    return await hash(password,salt) //hash password w salt
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (email, userId) => {
  // @ts-ignore
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

export const signup = async (req, res, next) => {
    try {
      const prisma = new PrismaClient();
      const { email, password } = req.body;
      if (email && password) {
        const user = await prisma.user.create({
          data: {
            email,
            password: await generatePassword(password),
          },
        });
        return res.status(201).json({
          user: { id: user?.id, email: user?.email },
          jwt: createToken(email, user.id),
        });
      } else {
        return res.status(400).send("Email and Password Required");
      }
    } catch (err) {
      console.log(err);
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return res.status(400).send("Email Already Registered");
        }
      } else {
        return res.status(500).send("Internal Server Error");
      }
      throw err;
    }
  };
  


