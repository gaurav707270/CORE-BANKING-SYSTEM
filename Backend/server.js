////server start here
//require("dotenv").config()
//
//import app from "./app.js";
//import connectToDB from './config/db.js'
////import mongosse from 'mongosse'
//
////function call ===> config => db.js => one function create (ConnectToDB)  => that is caling  
//connectToDB()
//app.listen(3000, () => {
//    console.log("Server running on port 3000");
//});



//Ye project ka starting point hai.
import dotenv from "dotenv";
dotenv.config();//.env file ko read karta hai.

import app from "./app.js";
import connectToDB from "./config/db.js";

const PORT = process.env.PORT || 3000;

///function call ===> config => db.js => one function create (ConnectToDB)  => that is caling 
//Ye function call hua.
//Iske andar MongoDB connect hota hai.
connectToDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});