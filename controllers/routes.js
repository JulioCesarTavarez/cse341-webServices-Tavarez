import express from 'express';
import Contact from './contact.js';

const router = express.Router();

// GET /contacts -> Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /contacts/:id -> Get a single contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET / -> Get name
export const getName = (req, res) => {
    const name = 'Chalese Tavarez';
    res.send(name);
};

export default router;
