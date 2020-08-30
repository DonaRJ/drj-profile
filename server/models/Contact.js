const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: Number,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
  },
  {
    collection: "contact-info",
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
