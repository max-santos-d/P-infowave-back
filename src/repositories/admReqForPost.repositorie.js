import Post from '../models/Post.js';

const indexPost = () => Post.find();
const showPost = (id) => Post.findById({ _id: id });
const deletePost = (id) => Post.findByIdAndDelete({ _id: id });

const indexReport = () => Post.find({ report: { $exists: true, $not: { $size: 0 } } });

export default {
  indexPost,
  showPost,
  deletePost,
  indexReport,
};
