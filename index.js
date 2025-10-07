const express = require("express");
const connectDB = require("./db");
const cors = require('cors')

require('dotenv').config();
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");

const app = express();
app.use(express.json());

//middleware to handle CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.get('/', (req, res)=> {
   res.send ('Welcome to my posts api')
})

//routes
app.use('/user', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log('Server is running on port ${PORT}')
})

connectDB();
