const express = require('express');
const { check } = require('express-validator');
const { 
    createAdmin, 
    loginAdmin, 
    TokenValidate 
} = require('../controllers/AdminAuth');
const { JWTvalidate } = require('../middlewares/jwt-validate');
const middlewareValidator = require('../middlewares/middlewareValidator');

const router = express.Router();


router.post('/new',
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email','The email is wrong').isEmail(),
        check('password','The passworda is wrong').isLength({min: 6}),
        middlewareValidator,
    ],
    createAdmin);

router.post('/login',
    [
        check('email','The email is wrong').isEmail(),
        check('password','The passworda is wrong').isLength({min: 6}),
        middlewareValidator,
    ],
    loginAdmin);

router.get('/renew', JWTvalidate ,TokenValidate);

module.exports = router;