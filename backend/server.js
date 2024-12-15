import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import bodyParser from "body-parser";

// to access on env file 
dotenv.config((
    {
        origin: 'https://stately-salamander-18db76.netlify.app', // Replace with your actual frontend URL
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    }
));

module.exports = async (req, res) => {
    // Set CORS headers to allow requests from your frontend domain
    res.setHeader('Access-Control-Allow-Origin', 'https://stately-salamander-18db76.netlify.app'); // Replace with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Your API logic here
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Food list data' });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

// app config
const app = express()
const port = process.env.PORT // 4000

//  middleware 
app.use(express.json());
app.use(bodyParser.json());

app.use(cors()) // make front and back conected with different ports 

// db connection
connectDB();
// default
app.get("/", (req, res) => {
    res.json("Welcome To My Backend Server !")
})
// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
// user endpoints
app.use("/api/user", userRouter)
// cart endpoints
app.use("/api/cart", cartRouter)
// paypal config
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))



app.use((err, req, res, next) => {
    console.error(err); // طباعة الخطأ في السجل
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// rung the server
app.listen(port, () => {
    console.log(`server is running  in port :${port}`);
})