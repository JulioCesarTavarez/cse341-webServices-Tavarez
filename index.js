require('dotenv').config();
const express = require('express');
const contactRoutes = require('./routes/routes.js');
const { getContacts, createContact, updateContact, deleteContact} = require('./controllers/contact.js')
const mongoose = require("mongoose");

// import { getName } from './routes/routes.js';


// Create an instance of an Express application
const app = express();
app.use(express.json());


// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for managing contacts',
    },
    servers: [
      {
        url: process.env.RENDER_URL || 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // adjust if your docs are in other files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// connection db
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// Define a route handler for the root URL ('/')
// app.get('/', getName);

// contacts
app.get('/contacts', getContacts);
app.use('/', contactRoutes);
app.put('/contacts/:id', updateContact);     // PUT route
app.delete('/contacts/:id', deleteContact);  // DELETE route
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


