import Post from '../models/Post.js';

const indexPost = () => Post.find();
const showPost = (id) => Post.findById({ _id: id });
const deletePost = (id) => Post.findByIdAndDelete({ _id: id });

export default {
  indexPost,
  showPost,
  deletePost,
};
