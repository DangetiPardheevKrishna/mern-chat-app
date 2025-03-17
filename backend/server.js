import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import path from "path";
import { app, io, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/api/auth/signup",(req,res)=>{
// console.log("signup route")
// })

// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route")
//     })

// app.get("/api/auth/logout",(req,res)=>{
//     console.log("login route")
//     })

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port : ${PORT}`);
});
