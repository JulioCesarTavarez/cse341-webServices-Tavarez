const Contacts = require("../models/contact.js")

// GET /contacts -> Get all contacts

const getContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getContacts: getContacts,
}

