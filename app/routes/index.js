// Require necessary NPM packages
const express = require('express');

// Instantiate a Ruoter (mini app that only handles routes)
const router = express.Router();

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Get the Root Router
 */

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Blogy' })
})

//Export the Router so we can use it in the server.js file
module.exports = router;