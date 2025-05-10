const mongoose = require("mongoose");
//create schema
let Contacts;

if (mongoose.modelNames().includes("Contacts")) {
    // if the model exists, use the existing model
    Contacts = mongoose.model("Contacts");
    console.log("Contacts model already exists, using the existing definition.");
} else {
    const contactsSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        favoritColor: {
            type: String,
            required: true,
        },
        birthday: {
            type: Date,
            required: true,
        },
    });
    Contacts = mongoose.model("Contacts", contactsSchema);
    console.log("Contacts model defined.");
}
module.exports = Contacts;
