const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    let token = req.header('x-access-token') || req.header('Authorization') || req.header('auth-token');
    //let token = req.headers['x-access-token'] || req.headers['authorization'] || req.headers('auth-token');
    if (!token) return res.status(401).send({ status: false, message: 'Access Denied' });
    try {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, process.env.TOKEN_SECRET, (err, verified) => {
            if (err) {
                res.status(401).send({ status: false, message: 'Access Denied' })
            }
            else {
                req.verified = verified;
                next();
            }
        });
    }
    catch (err) {
        res.status(400).send({ status: false, message: 'Invalid Token' })
    }


}