import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://snehalvanve04:SNE_hal$05@cluster0.lg32i.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DataBase Connected"));
}
