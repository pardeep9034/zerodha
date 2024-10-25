const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(url);
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));
