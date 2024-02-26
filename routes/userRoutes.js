const express = require('express')
const router = express.Router()

router.route('/auth/login').post((req, res) => {
    res.send('User found on database, login in underway!')
})

router.route('/auth/signin').get((req,res) => {
    res.send('got username and password, now saving it to database!')
})



module.exports = router