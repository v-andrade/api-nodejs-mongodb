const express = require('express');
const router = express.Router();
const User = require('../../models/sales/User');

// Home
router.get('/', async (req, res) => {
    res.json({ status: 200, data: 'sales' })
});


// router.get('/:userId', (req, res) => {
//     const { userId } = req.params;
//     res.send(`we are on userID ${userId}`)
// })

// Users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ status: 200, data: users })
    } catch (error) {
        res.status(400).send(res.json({ status: 400, data: { ...error } }))
    }
});



// insert an users
router.post('/users', async (req, res) => {

    const user = new User({
        ...req.body
    });
    try {
        await user.save();
        res.json({ status: 200, data: { ...req.body } })
    } catch (error) {
        res.statusCode = 400;
        res.json({ status: 400, data: { ...error } });
    }
})

module.exports = router;