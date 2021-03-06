import mongoose from "mongoose";

let UserShema = mongoose.Schema({
    creationDate: Date,
    email: String,
    userName: String,
    firstName: String,
    lastName: String,
    password: String,
    isActive: Boolean,
    role: String
});

module.exports = mongoose.model("User", UserShema);
