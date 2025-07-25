const { signupValidation, loginValidation } = require('../Middleware/authValidation');
const authController = require('../Controllers/authController');

const router = require('express').Router();



router.post('/register', signupValidation, authController.signup);
router.post('/login', loginValidation, authController.login);


module.exports = router;

