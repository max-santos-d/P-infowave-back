import mongoose from "mongoose";

import userRepositorie from "../repositories/user.repositorie.js";

const index = async ({ type }) => {
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  switch (type) {
    case "org":
      return await userRepositorie.indexType("organization");
    case "adm":
      return await userRepositorie.indexType("administration");
    default:
      return { message: "Invalid parameter." };
  }
};

const show = async (id, { type }) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  const response = await userRepositorie.show(id);
  if (!response) throw new Error("User not found.");
  if (type === "adm")
    return response.userType.filter((i) => i.type === "administration");
  if (type === "org")
    return response.userType.filter((i) => i.type === "organization");
};

const update = async (id, { type }) => {
  let response;
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");
  if (!(await userRepositorie.show(id))) throw new Error("User not found.");
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  switch (type) {
    case "org":
      response = await userRepositorie.promotionOrg(id);
      if (!response) throw new Error("User already has the required role.");
      return { message: "User updated." };
    case "adm":
      response = await userRepositorie.promotionAdm(id);
      if (!response) throw new Error("User already has the required role.");
      return { message: "User updated." };
    default:
      return { message: "Invalid parameter." };
  }
};

const deleted = async (id, { type }) => {
  let response;
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");
  if (!(await userRepositorie.show(id))) throw new Error("User not found.");
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  switch (type) {
    case "org":
      response = await userRepositorie.downgradeOrg(id);
      if (response)
        response = response.userType.filter((i) => i.type === "organization");
      if (!response.length)
        throw new Error("User already has the required role.");
      return { message: "User updated." };
    case "adm":
      response = await userRepositorie.downgradeAdm(id);
      if (response)
        response = response.userType.filter((i) => i.type === "administration");
      if (!response.length)
        throw new Error("User already has the required role.");
      return { message: "User updated." };
    default:
      return { message: "Invalid parameter." };
  }
};

export default {
  index,
  show,
  update,
  deleted,
};
