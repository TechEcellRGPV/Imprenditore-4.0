import mongoose from 'mongoose';

const mongoUrl = process.env.MONGODB_URI;

if (!mongoUrl) {
    throw new Error('MONGO_URL environment variable not set');
}

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};