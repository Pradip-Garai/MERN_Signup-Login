const { signup, login } = require('../Controllers/authController');
const { signupValidation, loginValidation } = require('../Middleware/Validation');
const router = require('express').Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;
