import mongoose from "mongoose";

import userRepositories from "../repositories/user.repositories.js";
import postRepositories from "../repositories/post.repositories.js";

export const idValidation = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID.");
};

export const userIdValidation = async (req, res, next) => {
  try {
    idValidation(req.params.id);
    const user = await userRepositories.show(req.params.id);
    if (!user) return res.status(200).json({ message: "User not found." });
    req.userParams = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ messageError: err.message });
  }
};

export const postIdValidation = async (req, res, next) => {
  try {
    idValidation(req.params.id);
    const post = await postRepositories.show(req.params.id);
    if (!post) return res.status(200).json({ message: "Post not found." });
    req.postParams = post;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ messageError: err.message });
  }
};
