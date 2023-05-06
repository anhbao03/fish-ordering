import mongoose from "mongoose";

const FishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5
    },
    desc: {
        type: String,
        required: true,
        min: 10
    },
    category: {
        type: String,
        enum: ['silver', 'highback', 'crossback', 'red', 'strange', 'accessory'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default mongoose?.models?.Fish || mongoose.model("Fish", FishSchema)