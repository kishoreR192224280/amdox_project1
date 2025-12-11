import mongoose from "mongoose"

export const connectDB = async () => {
    console.log("Inside connectDB:", process.env.MONGO_URI);

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
