import admRepositorie from '../repositories/admReqForUsers.js';

const indexUser = async () => {
  const response = await admRepositorie.indexUser();
  return response;
};

const showUser = async ({ id }) => {
  const response = await admRepositorie.showUser(id);
  return response;
};

const updateUser = async ({ id }, { login, password }) => {
  if (!login && !password) throw new Error('no parameters reported');

  try {
    const response = await admRepositorie.updateUser(id, login, password);
    return response;
  } catch (err) {
    if (err.code === 11000) throw new Error('information already registered');
    throw new Error(err.message);
  }
};

const deleteUser = async ({ id }) => {
  await admRepositorie.deleteUser(id);
  return 'user deleted';
};

export default {
  indexUser,
  showUser,
  updateUser,
  deleteUser,
};
