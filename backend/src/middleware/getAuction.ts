const Auction = require('../models/auction');

const ObjectId = require('mongoose').Types.ObjectId;

function getProductFromRequest(req, res, next) {
  const {id} = req.params;

  if (!ObjectId.isValid(id)) {
    return next('not that product');
  }

  Auction.findById(id)
    .populate('creator', ['-password', '-__v'],)
    .then(product => {
      if (!product) {
        return next('not that product');
      }
      req.product = product;
      

      req.productId = id;
      return next();
    })
    .catch(next);
}


module.exports = getProductFromRequest;