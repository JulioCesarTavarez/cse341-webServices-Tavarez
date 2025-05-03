import express from 'express';
import dotenv from 'dotenv';
import contactsRoute from './controllers/routes.js';
import{getName} from './controllers/routes.js'

dotenv.config();


// Create an instance of an Express application
const app = express();
app.use('/contacts', contactsRoute); 
// Define a route handler for the root URL ('/')
app.get('/', getName);
// app.use('/', './controllers/routes.js'); 
// Define the port number the server will listen on
const PORT = 3000;
 
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});


