import { idValidation } from "../middlewares/global.middleware.js";
import userRepositories from "../repositories/user.repositories.js";
import repositories from "../repositories/postLike.repositories.js";

const index = async ({ user }) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositories.show(user);
  if (!userShow) throw new Error("User not found.");

  return await repositories.index(user);
};

const update = async ({ user }, post) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositories.show(user);
  if (!userShow) throw new Error("User not found.");

  const response = await repositories.show(post, user);
  if (response.length) return await repositories.remove(post, user);
  return await repositories.add(post, user);
};

export default {
  update,
  index,
};
