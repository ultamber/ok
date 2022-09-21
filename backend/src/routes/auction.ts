import { Router } from "express";
import mongoose from "mongoose";
import { User } from "../models/user";
import db from "../config/db";
import { generateAuthToken, getUserId } from "../auth";
import { Auction } from "../models/auction";
import { Bid } from "../models/bid";
import latestProductCount from "../config/db";
import { compare } from "bcrypt";
import { title } from "process";

export const router = Router();

router.post("/createauction", async (req, res) => {
  const { title, description, endTime, startPrice, category, currency } =
    req.body;
  var auctionDetails = new Auction({
    title,
    description,
    creator: getUserId(req),
    endTime,
    startPrice,
    category,
    currency,
  });
  await auctionDetails.save();
  res.json({ auctionDetails });
});

router.post("/bid", async (req, res) => {
  const auctionId = req.body.auctionId;
  const auction = await Auction.findById(auctionId);
  Bid.findOne({ auction: auctionId.toString() })
    .sort({ priceValue: -1 })
    .then(async (bid) => {
      const latestPriceValue = bid ? bid.priceValue : auction.startPrice;
      if (req.body.priceValue <= latestPriceValue) {
        throw Error("The price value of the bid must be larger than the latest price value of the auction");
      }
      var bid = new Bid({
        priceValue: Number(req.body.priceValue),
        creator: getUserId(req),
        product: auctionId,
      });
      await bid.save();
      res.json(bid);
    });
});

//gets all auctions created
router.get("/auctions", async (req, res, next) => {
  const { skip, take, sort = 0 } = req.query;
  Auction.find({})
    .sort({ startPrice: -1 })
    .skip(Number(skip))
    .limit(Number(take))
    .then(res.json.bind(res))
    .catch(next);
});

router.delete("/auction", async (req, res) => {
  const auctionId = req.body.auctionId;
  const userId = getUserId(req);
  const auction = await Auction.findById(auctionId);
  if (userId == auction.creator) {
    Auction.findByIdAndDelete(auctionId).then(res.json.bind(res));
    console.log("ok");
  }else{
    throw Error("User is not the owner of the auction");
  }
});

router.put("/auction", async (req, res) => {
  const auctionId = req.body.auctionId;
  const userId = getUserId(req);
  var changes = {
    title: req.body.title,
    description: req.body.description,
    endTime: req.body.endTime,
    category: req.body.category,
    startPrice: req.body.startPrice,
  };
  const query = {
    creator: userId,
    _id: auctionId,
  };
  Auction.findOneAndUpdate(query, changes);
  console.log("ok");
});

router.post("/getlatestauction", async (req, res) => {
  Auction.find().sort({ createTime: -1 }).limit(1).then(res.json.bind(res));
});

function getAuctionsCount(req, res) {
  Auction.count({}).then((count) => {
    res.json({ count });
  });
}

