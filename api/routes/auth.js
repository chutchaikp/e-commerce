const router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		isAdmin: req.body.isAdmin,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),

	})
	try {
		const saveUser = await newUser.save();
		res.status(201).json(saveUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/login', async (req, res) => {
	try {
		debugger;
		const { username, password } = req.body;
		const user = await User.findOne({
			username,
			// password: CryptoJS.AES.decrypt(password, process.env.PASSWORD_SECRET),
		});

		if (!user) {
			res.status(401).json('Wrong credential!');
			return;
		}

		const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8);
		if (password !== hashPassword) {
			res.status(401).json('Wrong credential!');
			return
		}

		const accessToken = jwt.sign({
			id: user._id,
			isAdmin: user.isAdmin,
		},
			process.env.JWT_SEC,
			{ expiresIn: '3d' }
		)

		res.status(200).json({ user, accessToken });
	} catch (error) {
		res.status(500).json(error);
	}

})

module.exports = router;