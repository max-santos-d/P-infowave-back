import mongoose from "mongoose";

import userRepositorie from "../repositories/user.repositorie.js";

const index = async ({ type }) => {
  let response;
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  switch (type) {
    case "org":
      response = await userRepositorie.indexType("organization");
      break;
    case "adm":
      response = await userRepositorie.indexType("administration");
      break;
    default:
      throw new Error("Invalid parameter.");
  }

  return response.map((user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    email: user.email,
  }));
};

const show = async (id, { type }) => {
  let response;

  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  const user = await userRepositorie.show(id);
  if (!user) throw new Error("User not found.");

  switch (type) {
    case "adm":
      [response] = user.userType.filter((i) => i.type === "administration");
      break;
    case "org":
      [response] = user.userType.filter((i) => i.type === "organization");
      break;
    default:
      throw new Error(
        "Invalid type argument! Please make a request using a query parameter with the value 'adm' or 'org'."
      );
  }
  return response;
};

const update = async (id, { type }) => {
  let response;
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  switch (type) {
    case "org":
      response = await userRepositorie.promotionOrg(id);
      if (!response) throw new Error("User already has the required role.");
      break;
    case "adm":
      response = await userRepositorie.promotionAdm(id);
      if (!response) throw new Error("User already has the required role.");
      break;
    default:
      throw new Error(
        "Invalid type argument! Please make a request using a query parameter with the value 'adm' or 'org'."
      );
  }

  return "User updated.";
};

const deleted = async (id, { type }) => {
  let response;
  if (!type) throw new Error("No 'type' parameter informed.");
  if (typeof type !== "string")
    throw new Error("Only one parameter must be sent.");

  switch (type) {
    case "org":
      response = await userRepositorie.downgradeOrg(id);
      break;
    case "adm":
      response = await userRepositorie.downgradeAdm(id);
      break;
    default:
      throw new Error(
        "Invalid type argument! Please make a request using a query parameter with the value 'adm' or 'org'."
      );
  }

  if (!response.userType.filter((i) => i.type === "organization").length)
    return "The user already presents the requested parameter.";
  return "Updated user type.";
};

export default {
  index,
  show,
  update,
  deleted,
};
