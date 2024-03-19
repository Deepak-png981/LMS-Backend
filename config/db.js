const mongoose = require('mongoose');
require('dotenv').config();
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error connecting DB in ConnectDB : ", error);
    }
}
module.exports = ConnectDB;