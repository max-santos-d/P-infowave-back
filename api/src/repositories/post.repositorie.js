import Post from "../models/Post.js";

const store = (body) => Post.create(body);
const index = () => Post.find().populate("user");
const show = (id) => Post.findById({ _id: id }).populate("user");
const update = (id, body) =>
  Post.findOneAndUpdate({ _id: id }, body, { new: true });
const deleted = (id) => Post.findOneAndDelete({ _id: id });

export default {
  store,
  index,
  show,
  update,
  deleted,
};
