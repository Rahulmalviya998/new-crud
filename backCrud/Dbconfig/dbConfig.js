import mongoose from "mongoose";
import express from "express";

const Dbconnection= mongoose.connect("mongodb://localhost:27017/student", {


}).then(()=>{
    console.log("database connect");
}).catch((err)=>{
    console.log(err);
    
});
export default Dbconnection;
