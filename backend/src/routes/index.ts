import { Router } from "express";
import mongoose from "mongoose";
import { User } from "../models/user";
import db from "../config/db";
import { generateAuthToken, getUserId } from "../auth";

// router.route('/forgotpassword').post(forgotPassword);
// router.route('/resetpassword/:resetToken').post(resetPassword);
