const ContactModel = require("../models/Contact");

exports.listAllContactMessages = (req, res) => {
  ContactModel.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

exports.saveContactMessage = (req, res) => {
  let contactData = new ContactModel(req.body);
  contactData.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(task);
  });
};

exports.getContactMessageById = (req, body) => {
  ContactModel.findById(req.params.contactId, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

exports.updateContactMessageById = (req, res) => {
  ContactModel.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};

exports.deleteContactMessageById = (req, res) => {
  ContactModel.remove({ _id: req.params.contactId }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};
