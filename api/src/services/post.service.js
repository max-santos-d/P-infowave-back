import mongoose from "mongoose";
import repositories from "../repositories/post.repositories.js";

const store = async (id, body) => {
  const { title, text, banner } = body;

  if (!id) throw new Error("Required ID.");
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");
  if (!title || !text || !banner) throw new Error("Required Fields.");

  const response = await repositories.store({ title, text, banner, user: id });
  if (!response) throw new Error("Error creating user.");
  return response;
};

const index = async () => {
  return await repositories.index();
};

const show = async (id) => {
  if (!id) throw new Error("Required ID.");
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");
  return await repositories.show(id);
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner)
    throw new Error("At least one field is requeired.");
  if (!id) throw new Error("ID Required.");
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");

  const response = await repositories.update(id, { title, text, banner });

  if (!response) throw new Error("Error when updating.");
  return response;
};

const deleted = async (id) => {
  if (!id) throw new Error("Required ID.");
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");

  const response = await repositories.deleted(id);
  if (!response) throw new Error("Error when deleting.");
  return response;
};

export default {
  store,
  index,
  show,
  update,
  deleted,
};
