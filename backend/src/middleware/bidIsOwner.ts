function isOwner(req, res, next) {
    if(req.auction.creator._id.toString() === req.user._id.toString()){
      return next();
    }
    next('User is not the owner of this auction');
  }
  
  module.exports = isOwner;