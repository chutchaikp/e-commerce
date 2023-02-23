const jwt = require('jsonwebtoken');
// const SECRET_KEY = process.env.JWT_SEC;

const VerifyToken = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (!authorization) {
		return res.status(401).json({
			message: 'No Authorization Header'
		})
	}
	try {
		const token = authorization.split('Bearer ')[1];
		if (!token) {
			return res.status(401).json({
				message: 'Invalid Token Format'
			})
		}

		const SECRET_KEY = process.env.JWT_SEC;
		const decode = jwt.verify(token, SECRET_KEY);
		req.user = decode
		next()
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(401).json({
				message: 'Session Expired',
				error: error.message,
			})
		}
		if (error instanceof jwt.JsonWebTokenError || error instanceof TokenError) {
			return res.status(401).json({
				message: 'Invalid Token',
				error: error.message,
			})
		}
		res.status(500).json({
			message: 'Internal server Error',
			error: error.message,
			stack: error.stack
		});
	}

	res.status(500).json({ message: 'Internal server Error', });
}

// function verifyTokenAndAdmin(req, res, next) {
// 	VerifyToken((req, res, () => {
// 		if (req.user.isAdmin) {
// 			next();
// 		} else {
// 			res.status(403).json('You are not allowed to do that!')
// 		}

// 	}))
// }

module.exports = VerifyToken