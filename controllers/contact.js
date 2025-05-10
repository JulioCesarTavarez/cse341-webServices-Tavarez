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

// GET /contacts/:id -> Get a single contact by ID
// router.get('/:id', async (req, res) => {
//   try {
//       const contact = await Contact.findById(req.params.id);
//       if (!contact) {
//           return res.status(404).json({ message: "Contact not found" });
//       }
//       res.status(200).json(contact);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

// GET / -> Get name
// export const getName = (req, res) => {
//   const name = 'Chalese Tavarez';
//   res.send(name);
// };

// export default router;

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();


// const contactSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   favoriteColor: String,
//   birthday: Date
// });

// const Contact = mongoose.model('Contact', contactSchema);


// async function dbconection(){
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('Connected to MongoDB');
//   } catch(err){
//     console.log(err);
//   }
// }

// await dbconection();



// export default Contact;