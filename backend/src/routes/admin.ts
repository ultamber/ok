import { Router } from "express";
import mongoose from "mongoose";
import { User } from "../models/user";
import db from "../config/db";
import { generateAuthToken, getUserId } from "../auth";
import paginate from "express-paginate";
import {errorHandler} from "../middleware/error";
export const router = Router();
import { MongoError } from 'mongodb';

router.post("/getusers", async (req, res,next) => {
    const id = getUserId(req);
    const user = await User.findById(id);
    var limit: number = +req.query.limit;
    if (user.role == "admin") {
      const page: number = parseInt(req.query.page as any) || 1;
      const take = 9;
      const total = await User.count();
      const data = await User.find({
        ...Option,
        take,
        skip: (page - 1) * take
    });
    res.json({
      data,
      total,
      page,
      last_page: Math.ceil(total / take)
    })
  }
  else{
    var err = {
        statusCode : 403,
        message : "Unauthorized"
    };
    errorHandler(err,req,res,next);
  };
  })
  