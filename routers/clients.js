const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`we are on clients`);
});


router.get('/:clientId', (req, res) => {
    const { clientId } = req.params;
    res.send(`we are on clientId ${clientId}`)
})

module.exports = router;