const express = require('express');
const User = require('../models/User');

const routes = express.Router();

routes.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password});

        if(user) {
            return res.status(200).json(user);
        } else {
            return res.status(401).json({ message: 'Invalid credentials'});
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error'});
    }
});

module.exports = routes;