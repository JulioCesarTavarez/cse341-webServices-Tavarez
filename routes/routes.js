const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contact")
// home page
// router.get("/", contactsController.homePage);

// GET contacts
router.get("/contacts", contactsController.getContacts);
router.post("/contacts", contactsController.createContact);

module.exports = router;
