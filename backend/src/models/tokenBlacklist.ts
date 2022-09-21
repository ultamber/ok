const mongoose = require('mongoose');

export const TokenBlacklistSchema = mongoose.Schema({
    token: String
});

export default mongoose.model('TokenBlacklist', TokenBlacklistSchema);