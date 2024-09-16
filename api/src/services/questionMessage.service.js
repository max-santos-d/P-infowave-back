import { idValidation } from "../middlewares/global.middleware.js";
import userRepositorie from "../repositories/user.repositorie.js";
import questionMessageRepositorie from "../repositories/questionMessage.repositorie.js";

const store = async ({ user, text }, question) => {
  if (!user && !text) throw new Error("Required Fields.");

  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  const response = await questionMessageRepositorie.store(question, user, text);
  if (!response) throw new Error("Error when creating comment.");
  return response;
};

const index = async (question) => {
  return await questionMessageRepositorie.index(question);
};

const deleted = async (question, { comment }) => {
  if (!comment) throw new Error("Comment id required.");
  const findQuestion = await questionMessageRepositorie.show(question, comment);
  if (!findQuestion.length) return "Comment not found.";
  const response = await questionMessageRepositorie.deleted(question, comment);
  if (response) return "Comment deleted.";
};

export default {
  store,
  index,
  deleted,
};
