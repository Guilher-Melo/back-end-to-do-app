require('dotenv').config();

const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Conectado ao banco!")
  } catch (error) {
    console.log(error)
  }
}
module.exports = main 