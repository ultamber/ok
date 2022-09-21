import { User } from '../models/user';
const {getTokenFromReq, isTokenValid} = require('../auth');
import  authCookie from  "../config/db" ;

function addUserToRequest(req, res, next) {
  const {login: isLogin, userId} = getTokenFromReq(req);
  if (isLogin) {
    Promise.all([User.findById(userId), isTokenValid(req.cookies[authCookie])])
      .then(([user, tokenBlacklisted]) => {
        if (tokenBlacklisted || !user) {
          return next();
        }
        req.user = user;
        return next();
      })
      .catch(next);
    return;
  }
  next();
}

module.exports = addUserToRequest;