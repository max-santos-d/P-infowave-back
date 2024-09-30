import userRepositorie from '../repositories/user.repositorie.js';

const index = async (param) => {
  let response;
  if (!param) throw new Error("No 'param' parameter informed.");
  if (typeof param !== 'string') throw new Error('Only one parameter must be sent.');

  switch (param) {
    case 'org':
      response = await userRepositorie.indexType('organization');
      break;
    case 'adm':
      response = await userRepositorie.indexType('administration');
      break;
    default:
      throw new Error('Invalid parameter.');
  }

  return response.map((user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    email: user.email,
  }));
};

const show = async (id, param) => {
  if (!param) throw new Error("No 'param' parameter informed.");
  if (typeof param !== 'string') throw new Error('Only one parameter must be sent.');

  const user = await userRepositorie.show(id);

  if (!user) throw new Error('User not found.');

  return (await userRepositorie.show(id)).userType;
};

const update = async (userToUpdate, param) => {
  let response;

  switch (param) {
    case 'org':
      response = await userRepositorie.promotionOrg(userToUpdate);
      break;
    case 'adm':
      response = await userRepositorie.promotionAdm(userToUpdate);
      break;
    default:
      throw new Error(
        "Invalid type argument! Please make a request using a query parameter with the value 'adm' or 'org'."
      );
  }
  if (!response) return 'The user is already presented with the requested parameter.';

  return 'User updated.';
};

const deleted = async (userToUpdate, param) => {
  let response;

  switch (param) {
    case 'org':
      response = await userRepositorie.downgradeOrg(userToUpdate);
      break;
    case 'adm':
      response = await userRepositorie.downgradeAdm(userToUpdate);
      break;
    default:
      throw new Error(
        "Invalid type argument! Please make a request using a query parameter with the value 'adm' or 'org'."
      );
  }

  if (!response.userType.filter((i) => i.type === 'organization').length)
    return 'The user is already presented with the requested parameter.';
  return 'Updated user type.';
};

export default {
  index,
  show,
  update,
  deleted,
};
