import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import authRepositorie from '../repositories/auth.repositorie.js';

const auth = async ({ login, password }) => {
  if (!login || !password) throw new Error('Email and Password required!');

  const user = await authRepositorie.showUser(login);

  if (!user) throw new Error('User not found, check if the login and password were entered correctly.');

  const passwordValdation = bcrypt.compareSync(password, user.password);

  if (!passwordValdation) throw new Error('User not found, check if the login and password were entered correctly.');

  const token = jwt.sign({ id: user._id, tokenVersion: user.tokenVersion }, process.env.SECRET_JWT, {
    expiresIn: 60 * 60 * 24,
  });

  return {
    token,
    user: {
      _id: user._id,
      name: user.name,
      username: user.name,
      login: user.login,
      userType: user.userType,
    },
  };
};

export default {
  auth,
};
