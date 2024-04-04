import { Router } from "express";


const AuthRoutes=Router()

AuthRoutes.post("/signup",signup)

export default AuthRoutes