const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//protect routes (authentication)
exports.protect = async (req, res, next) => {
    let token;

    //check if header contains the token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1];

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //get user from the token payload and attach ro request
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }
    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

//role based acces control (authorization)
exports.authorize = (...roles) => {
    return (req, res, next) => {
        //check if logged in user is in array of allowed roles
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: `User role ${req.user.role} is not authorized to access this route` });
        }
        next();
    };
};