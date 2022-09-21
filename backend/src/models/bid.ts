import mongoose from 'mongoose';

const BidSchema = new mongoose.Schema({
    priceValue: {
        type: Number,
        required: true
    },
    bidder: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Auction',
        required: true
    }
});

export const Bid = mongoose.model('Bid', BidSchema);