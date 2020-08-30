const mongoose = require("mongoose");

// const dbURI =
//   "mongodb://newuser:myNewPassword@cluster0-shard-00-00-gibou.mongodb.net:27017,cluster0-shard-00-01-gibou.mongodb.net:27017,cluster0-shard-00-02-gibou.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
const dbURI =
  "mongodb+srv://drjAdmin:drjAdmin@cluster0.av94i.gcp.mongodb.net/drj_profile?retryWrites=true&w=majority";

const options = {
  //   reconnectTries: Number.MAX_VALUE,
  //   poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Contact");
