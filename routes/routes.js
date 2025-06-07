const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contact");

router.get("/contacts", contactsController.getContacts);
router.post("/contacts", contactsController.createContact);

module.exports = router;
