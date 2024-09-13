import { idValidation } from "../middlewares/global.middleware.js";
import repositories from "../repositories/post.repositories.js";

import userRepositories from "../repositories/user.repositories.js";

const store = async ({ user }, body) => {
  const { title, text, banner } = body;

  if (!title || !text || !banner) throw new Error("Required Fields.");
  if (!user) throw new Error("<user> parameter with user id not provided.");

  idValidation(user);

  const userShow = await userRepositories.show(user);
  if (!userShow) throw new Error("User not found.");

  const response = await repositories.store({ title, text, banner, user: userShow._id });
  if (!response) throw new Error("Error creating user.");
  return response;
};

const index = async () =>{
  return await repositories.index();
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner)
    throw new Error("At least one field is requeired.");

  const response = await repositories.update(id, { title, text, banner });

  if (!response) throw new Error("Error when updating.");
  return response;
};

const deleted = async (id) => {
  const response = await repositories.deleted(id);
  return response;
};

export default {
  store,
  index,
  update,
  deleted,
};
