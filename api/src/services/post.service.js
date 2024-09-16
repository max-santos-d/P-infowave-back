import { idValidation } from "../middlewares/global.middleware.js";
import postRepositorie from "../repositories/post.repositorie.js";

import userRepositorie from "../repositories/user.repositorie.js";

const store = async ({ user }, body) => {
  const { title = "", text = "", banner = "" } = body;

  if (!title || !text || !banner) throw new Error("Required Fields.");

  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  const response = await postRepositorie.store({
    title,
    text,
    banner,
    user: userShow._id,
  });

  if (!response) throw new Error("Error creating user.");
  return "Successfully created.";
};

const index = async () => {
  return await postRepositorie.index();
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner)
    throw new Error("At least one field is requeired.");

  const response = await postRepositorie.update(id, { title, text, banner });

  if (!response) throw new Error("Error when updating.");
  return response;
};

const deleted = async (id) => {
  const response = await postRepositorie.deleted(id);
  return response;
};

export default {
  store,
  index,
  update,
  deleted,
};
