if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: "../.env" });
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");



 const dbUrl = process.env.ATLASDB_URL;

// Connect DB
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connection successful");
  await initDB();
}


const initDB = async ()=>{
await Listing.deleteMany({});
initData.data =  initData.data.map((obj)=> ({...obj, owner: "6974d851a54af6eacfc5fe5e",}));
await Listing.insertMany(initData.data);
console.log("data was initialized");
};
 
 main().catch(err => console.log(err));
