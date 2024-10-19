import bcrypt from 'bcrypt';

import userRepositorie from '../repositories/user.repositorie.js';

const store = async (body) => {
  const { name, username, login, password, avatar } = body;

  if (!name || !username || !login || !password) throw new Error('required Fields.');

  const response = await userRepositorie.store(name, username, login, password, avatar);

  if (!response) throw new Error('error creating user.');
  return response.login;
};

const index = async () => {
  const response = await userRepositorie.index();
  return response.map((user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    login: user.login,
  }));
};

const update = async (id, body) => {
  const { name, username, password, avatar } = body;

  if (!name && !username && !avatar && !password) throw new Error('at least one field is requeired.');
  if (password) {
    const user = await userRepositorie.showPassword(id);
    let passwordChanged = false;

    if (password) {
      const passwordValdation = bcrypt.compareSync(password, user.password);
      if (!passwordValdation) passwordChanged = true;
    }

    if (!passwordChanged) throw new Error('change cannot be made to the same value.');

    const tokenVersion = user.tokenVersion + 1;
    const response = await userRepositorie.updated({ id, password, tokenVersion });
    if (!response) throw new Error('error when updating.');
    return response;
  }

  const response = await userRepositorie.updated({ id, name, username, avatar });
  if (!response) throw new Error('error when updating.');
  return response;
};

const deleted = async (id, { password }) => {
  if (!password) throw new Error('password required.');

  const user = await userRepositorie.showPassword(id);
  const passwordValdation = bcrypt.compareSync(password, user.password);
  if (!passwordValdation) throw new Error('Invalid password');

  const response = await userRepositorie.deleted(id);
  return response;
};

export default {
  store,
  index,
  update,
  deleted,
};
