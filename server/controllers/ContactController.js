const ContactModel = require("../models/Contact");

exports.listAllContactMessages = (req, res) => {
  ContactModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};

exports.saveContactMessage = (req, res) => {
  let contactData = new ContactModel(req.body);
  contactData.save((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(data);
  });
};

exports.getContactMessageById = (req, body) => {
  ContactModel.findById(req.params.contactId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};

exports.updateContactMessageById = (req, res) => {
  ContactModel.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(data);
    }
  );
};

exports.deleteContactMessageById = (req, res) => {
  ContactModel.remove({ _id: req.params.contactId }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Contact Message deleted successfully" });
  });
};
