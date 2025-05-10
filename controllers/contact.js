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

const createContact = async (req, res) => {
  const contact = new Contacts({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoritColor: req.body.favoritColor,
    birthday: req.body.birthday,
  });
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /contacts/:id -> Update a contact
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contacts.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(204).send(); // No content
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /contacts/:id -> Delete a contact
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contacts.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




module.exports = {
  getContacts: getContacts, createContact: createContact, updateContact: updateContact, deleteContact: deleteContact
}

