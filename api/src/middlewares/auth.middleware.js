import jwt from "jsonwebtoken";

import userRepositorie from "../repositories/user.repositorie.js";

export const authChekerMiddleware = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization)
      return res
        .status(400)
        .send({ response: "Authorization token not provided!" });

    const [schema, token] = authorization.split(" ");

    if (!schema || !token)
      return res.status(401).send({ response: "Token verification error!" });
    if (schema !== "Bearer")
      return res.status(401).send({ response: "Token verification error!" });

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err)
        return res.status(401).json({ response: "Token verification error!" });

      const user = await userRepositorie.show(decoded.id);

      if (!user)
        return res.status(401).json({ response: "Request user not found!" });

      req.requestUserId = user._id;
      return next();
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ response: err.message });
  }
};
