import express from "express";
import userRegisterController from "../controllers/authControllers.js";
//import userModel from "../models/user_model";

const router = express.Router();
//POST /api / auth/ register 
router.post("/register",userRegisterController)// iss api per usser apna account ccreate kar sakta hai



export default router;
