import mongoose from 'mongoose';

const AuctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createTime: {
        type: String,
        default: Date.now
    },
    endTime: {
        type: String,
        required: true
    },
    startPrice: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
});

export const Auction = mongoose.model('Auction', AuctionSchema);
