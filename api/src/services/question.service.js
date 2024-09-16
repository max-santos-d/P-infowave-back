import { idValidation } from "../middlewares/global.middleware.js";
import questionRepositorie from "../repositories/question.repositorie.js";
import userRepositorie from "../repositories/user.repositorie.js";

const store = async ({ user = "" }, { text = "" }) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  if (!text) throw new Error("Required Fields.");
  const response = await questionRepositorie.store(text, user);
  if (!response) throw new Error("Error creating question.");
  return "Successfully created.";
};

const index = () => {
  return questionRepositorie.index();
};

const update = async (question, { text = "" }) => {
  if (!text) throw new Error("Required Fields.");
  const response = await questionRepositorie.update(question, { text });
  if (!response) throw new Error("Error when updating.");
  return response;
};

const deleted = async (question) => {
  const response = await questionRepositorie.deleted(question);
  if (!response) throw new Error("Error when updating.");
  return "Question deleted";
};

export default {
  store,
  index,
  update,
  deleted,
};
