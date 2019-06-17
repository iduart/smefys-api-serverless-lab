const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports.connect = async () => {
  return mongoose.connect(process.env.MONGO);
};
