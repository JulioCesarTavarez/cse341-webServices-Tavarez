// Import express using ESM syntax
import express from 'express';
import{getName} from './controllers/routes.js'
 
// Create an instance of an Express application
const app = express();
 
// Define a route handler for the root URL ('/')
app.get('/', getName);
 
// Define the port number the server will listen on
const PORT = 3000;
 
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});