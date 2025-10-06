const express = require("express");
const connectDB = require("./db");

require('dotenv').config();
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");

const app = express();
app.use(express.json());

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
