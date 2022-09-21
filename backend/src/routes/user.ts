import { Router } from "express";
import mongoose from "mongoose";
import { User } from "../models/user";
import db from "../config/db";
import { generateAuthToken, getUserId } from "../auth";
import paginate from "express-paginate";

export const router = Router();

router.get("/profile", async (req, res) => {
  console.log(req.cookies);
  const id = req.query.id || getUserId(req);
  try {
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    username: user.username,
    email: user.email,
    id: user._id,
  });
  }catch (err) {
    let message ='something went wrong';
    return res.status(400).json({
      success: false,
      message: message,
    })
  }
});

router.put("/profile", async (req, res) => {
  var changes = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    VAT: req.body.VAT,
    phoneNumber: req.body.phoneNumber,
  };
  const query = {
    _id: getUserId(req),
  };
  try{
    await User.findOneAndUpdate(query, changes);
    res.status(200).json({
      success: true
    });
    }catch (err) {
      let message ='Couldnt update user';
      return res.status(400).json({
        success: false,
        message: message,
      })
    }
  console.log("ok");
});

router.use(paginate.middleware(10,1000));


// const [ results, itemCount ] = await Promise.all([
//   User.find({}).limit(limit).skip(req.skip).lean().exec(),
//   User.count({})
// ]);
// const pageCount = Math.ceil(itemCount / limit);
// res.json({
//   object: 'list',
//   has_more: paginate.hasNextPages(req)(pageCount),
//   data: results

