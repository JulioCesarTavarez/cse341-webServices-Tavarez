require('dotenv').config();
const express = require('express');
const { getContacts, } = require('./controllers/contact.js')
const mongoose = require("mongoose");

// import { getName } from './routes/routes.js';


// Create an instance of an Express application
const app = express();
app.use(express.json());

// connection db
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// Define a route handler for the root URL ('/')
// app.get('/', getName);

// contacts
app.get('/contacts', getContacts);

// handle not found
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// app.use('/', './controllers/routes.js'); 
// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});


