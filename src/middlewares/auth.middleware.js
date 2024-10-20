import jwt from 'jsonwebtoken';

import userRepositorie from '../repositories/user.repositorie.js';

export const authChekerMiddleware = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) return res.status(401).json({ responseError: 'missing authentication token' });

    const [schema, token] = authorization.split(' ');

    if (!schema || !token) return res.status(401).json({ responseError: 'invalid token' });
    if (schema !== 'Bearer') return res.status(401).json({ responseError: 'invalid token' });

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err) return res.status(401).json({ response: 'invalid or expired token' });

      const user = await userRepositorie.show(decoded.id);

      if (!user) return res.status(404).json({ responseError: 'request user not found' });
      if (user.tokenVersion !== decoded.tokenVersion)
        return res.status(401).json({ responseError: 'invalid or expired token' });

      req.requestUserId = user._id;
      return next();
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
