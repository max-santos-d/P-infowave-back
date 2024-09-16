import { idValidation } from "../middlewares/global.middleware.js";
import questionLikeRepositorie from "../repositories/questionLike.repositorie.js";
import userRepositorie from "../repositories/user.repositorie.js";

const index = async ({ user }) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  return await questionLikeRepositorie.index(user);
};

const update = async (question, { user }) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  const findQuestion = await questionLikeRepositorie.show(question, user);
  if (findQuestion.length) {
    await questionLikeRepositorie.remove(question, user);
    return "Like removed.";
  }
  await questionLikeRepositorie.add(question, user);
  return "Like added.";
};

export default {
  index,
  update,
};
