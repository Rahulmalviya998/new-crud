import mongoose from "mongoose";
const stu = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, uniqe: true
    },
    password: {
        type: String, required: true
    },
     image:{
        type:String, required:true
     }
},
    { timestamps: true }
);

const stumodel = mongoose.model("user", stu);
export default stumodel;