const express = require("express");
const contactRoutes = express.Router();
const contactController = require("../controllers/ContactController");

contactRoutes
  .route("/contact")
  .get(contactController.listAllContactMessages)
  .post(contactController.saveContactMessage);

contactRoutes
  .route("/contact/:contactId")
  .get(contactController.getContactMessageById)
  .put(contactController.updateContactMessageById)
  .delete(contactController.deleteContactMessageById);

module.exports = contactRoutes;
