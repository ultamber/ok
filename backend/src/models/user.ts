import mongoose, { Model } from "mongoose";
import bcrypt from "bcrypt";
const validator = require("validator");

const saltRounds = 10;

import { pattern as emailPattern } from "./validate/userEmail";

interface IUser extends mongoose.Document {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  VAT: number;
  password: string;
  role: string;
  phoneNumber: number;
  rating: number;
  matchPassword: (password: string) => Promise<boolean>;
}

interface IUserModel extends Model<IUser> {}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    unique: true,
    minLength: 5,
    maxLength: 20,
    lowercase: true,
    validate: [
      validator.isAlphanumeric,
      "Usernames may only have letters and numbers.",
    ],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Can't be blank"],
    validate: {
      validator: (v) => {
        return emailPattern.test(v);
      },
      message: (_) => `email is not valid`,
    },
  },
  password: {
    type: String,
    minlength: [8, "Please use minimum of 8 characters"],
    validate: {
      validator: (v) => {
        return v.length >= 8;
      },
    },
  },
  role: {
    type: String,
    default: "visitor",
    enum: ["bidder", "admin","visitor","auctioner"],
  },
  firstName: {
    type: String,
    unique: true,
    required: [true, "Can't be blank"],
    maxLength: 30,
    validate: {
      validator: (v) => {
        return v.length <= 30 && v.length >= 3;
      },
    },
  },
  lastName: {
    type: String,
    unique: true,
    required: [true, "Can't be blank"],
    maxLength: 30,
    validate: {
      validator: (v) => {
        return v.length <= 30 && v.length >= 3;
      },
    },
  },
  address: {
    type: String,
    unique: true,
    required: [true, "Can't be blank"],
    validate: {
      validator: (v) => {
        return v.length <= 30 && v.length >= 3;
      },
    },
  },
  // romania has vat numbers from 2 to 10 digits
  // we will check for vat numbers from 8-12 digits
  VAT: {
    type: Number,
    unique: true,
    required: [true, "Can't be blank"],
    validate: {
      validator: (v) => {
        return v.length <= 12 && v.length >= 12;
      },
    },
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: [true, "Can't be blank"],
    min: 1000000000,
    max: 9999999999,
  },
  rating:{
    type: Number
  }
});

UserSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        next(err);
        return;
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
          return;
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

export const User = mongoose.model<IUser, IUserModel>("User", UserSchema);
