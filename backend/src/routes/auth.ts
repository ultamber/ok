// signin 
// signup
// edit profile 
// read profile 
// search
// create auction
// edit auction
// bid se ena auction

import { Router } from "express";
import mongoose from "mongoose";
import { User } from "../models/user";
import db from "../config/db";
import { generateAuthToken, getUserId } from "../auth";

export const router = Router();

// signin
router.post("/signin", (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => Promise.all([user, user && user.matchPassword(password)]))
      .then(([user, match]) => {
        if (!match || !user) {
          return Promise.reject("invalid Username or password");
        }
        res.cookie("auth-cookie", generateAuthToken(user._id));
        res.json({ _id: user._id, email: user.email });
      })
      .catch(next);
  });
  
  // signup
  router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;
    // mongoose.connection.db.addUser
    if (!username || !email || !password ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all details',
      });
    }
    const user = await User.findOne({ email: req.body.email });
    if(user) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }
    var userDetails = new User({
      username,
      password,
      email,
    });
    await userDetails.save();
    res.json({});
  });