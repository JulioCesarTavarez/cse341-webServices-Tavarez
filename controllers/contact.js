import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Connection error:', err));

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date
});

const Contact = mongoose.model('Contact', contactSchema);

// const user = new User({   firstName: 'Richard', lastName: 'Grayson', email: 'Nightwing@batman.com', favoriteColor: 'Blue', birthday: '1989-01-01' });
// await user.save(); // Adds user to MongoDB

export default Contact;