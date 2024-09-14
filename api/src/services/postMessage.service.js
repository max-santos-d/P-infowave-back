import { idValidation } from "../middlewares/global.middleware.js";
import userRepositories from "../repositories/user.repositories.js";
import postMessageRepositorie from "../repositories/postMessage.repositorie.js";

const store = async ({ user, text }, post) => {
  if (!user && !text) throw new Error("Required Fields.");

  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositories.show(user);
  if (!userShow) throw new Error("User not found.");

  const response = await postMessageRepositorie.store(post, user, text);
  return response;
};

const index = async (post) => {
  return await postMessageRepositorie.index(post);
};

const deleted = async (post, { comment }) => {
  if (!comment) throw new Error("Comment id required.");

  const findComment = await postMessageRepositorie.show(post, comment);
  console.log(findComment);
  if (!findComment.length) return { message: "Comment not found." };
  return await postMessageRepositorie.deleted(post, comment);;
};

export default {
  store,
  index,
  deleted,
};
