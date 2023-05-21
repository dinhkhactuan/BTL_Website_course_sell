const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/WebCoures_Sell");
    console.log("yes");
  } catch (error) {
    console.log("no");
  }
}
module.exports = { connect };
