import admReqForUsersRepositorie from '../repositories/admReqForUser.repositorie.js';

const indexUser = async () => {
  const response = await admReqForUsersRepositorie.indexUser();
  return response;
};

const showUser = async ({ id }) => {
  const response = await admReqForUsersRepositorie.showUser(id);
  return response;
};

const updateUser = async ({ id }, { login, password }) => {
  if (!login && !password) throw new Error('no parameters reported');

  try {
    const response = await admReqForUsersRepositorie.updateUser(id, login, password);
    return response;
  } catch (err) {
    if (err.code === 11000) throw new Error('information already registered');
    throw new Error(err.message);
  }
};

const deleteUser = async ({ id }) => {
  await admReqForUsersRepositorie.deleteUser(id);
  return 'user deleted';
};

export default {
  indexUser,
  showUser,
  updateUser,
  deleteUser,
};
