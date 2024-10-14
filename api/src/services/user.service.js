import bcrypt from 'bcrypt';

import userRepositorie from '../repositories/user.repositorie.js';

const store = async (body) => {
  const { name, username, email, password, avatar } = body;

  if (!name || !username || !avatar || !email || !password) throw new Error('Required Fields.');

  const response = await userRepositorie.store(name, username, email, password, avatar);

  if (!response) throw new Error('Error creating user.');
  return response;
};

const index = async () => {
  const response = await userRepositorie.index();
  return response.map((user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    email: user.email,
  }));
};

const update = async (id, body) => {
  const { name, username, email, password, avatar } = body;

  if (!name && !username && !avatar && !email && !password) throw new Error('At least one field is requeired.');

  if (email || password) {
    const user = await userRepositorie.showPassword(id);
    let emailOrPasswordChanged = false;

    console.log(user);

    if (email && user.email !== email) emailOrPasswordChanged = true;
    if (password) {
      const passwordValdation = bcrypt.compareSync(password, user.password);
      if (!passwordValdation) emailOrPasswordChanged = true;
    }

    if (!emailOrPasswordChanged) throw new Error('Change cannot be made to the same value.');

    const tokenVersion = user.tokenVersion + 1;
    const response = await userRepositorie.updated({ id, email, password, tokenVersion });
    if (!response) throw new Error('Error when updating.');
    return response;
  }

  const response = await userRepositorie.updated({ id, name, username, avatar });
  if (!response) throw new Error('Error when updating.');
  return response;
};

const deleted = async (id, { password }) => {
  if (!password) throw new Error('Password required.');

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
