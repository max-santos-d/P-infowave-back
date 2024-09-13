import mongoose from "mongoose";
import repositories from "../repositories/user.repositories.js";

const store = async (body) => {
  const { name, username, email, password, avatar } = body;

  if (!name || !username || !avatar || !email || !password)
    throw new Error("Required Fields.");

  const response = await repositories.store(
    name,
    username,
    email,
    password,
    avatar
  );

  if (!response) throw new Error("Error creating user.");
  return response;
};

const index = async () => {
  const response = await repositories.index();
  return response;
};

const update = async (id, body) => {
  const { name, username, email, password, avatar } = body;

  if (!name && !username && !avatar && !email && !password)
    throw new Error("At least one field is requeired.");

  const response = await repositories.updated(
    id,
    name,
    username,
    email,
    password,
    avatar
  );

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
