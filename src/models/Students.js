import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    mobileNo: {
        type: String,
        required: true,
        trim: true
    },
    collegeName: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    enrollment: {
        type: String,
        required: true,
        trim: true
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentDetails: {
    razorpay_payment_id: String,
    razorpay_order_id: String,
    razorpay_signature: String
  }
}, {
    timestamps: true
});

module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);