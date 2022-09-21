import TokenBlacklist from "./models/tokenBlacklist";
import db from "./config/db";
import jwt from "jsonwebtoken";

const secret = 'b7d4503acc8d249049e66d4f8936ac5e';
const options = {expiresIn: '2d'};

export function generateAuthToken(userId) {
    return jwt.sign({login: true, userId}, secret, options);
}

export function getTokenFromReq(req) {
    if (!req.cookies[db.authCookie]) {
        return false;
    }

    try {
        return jwt.verify(req.cookies[db.authCookie], secret) as jwt.JwtPayload;
    } catch (e) {
        return false;
    }
}

export function getUserId(req) {
    return (getTokenFromReq(req) || {}).userId;
}

export function isLogin(req){
    return (getTokenFromReq(req) || {}).login;
}

export function isTokenValid(token) {
    return new Promise(((resolve, reject) => {
        TokenBlacklist.findOne({token})
            .then(tokenData => {
                resolve(!!tokenData);
            })
            .catch(reject);
    }));
}
