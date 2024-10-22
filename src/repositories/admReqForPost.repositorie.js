import Post from '../models/Post.js';

const indexPost = () => Post.find().populate('user', 'username avatar status');
const showPost = (id) => Post.findById({ _id: id }).populate('user', 'username avatar status');
const deletePost = (id) => Post.findByIdAndDelete({ _id: id });

const clearReport = (postId) =>
  Post.findOneAndUpdate({ _id: postId }, { $set: { report: [] } }, { new: true }).populate(
    'user',
    'username avatar status'
  );

const indexReport = () =>
  Post.find({ report: { $exists: true, $not: { $size: 0 } } }).populate('user', 'username avatar status');

export default {
  indexPost,
  showPost,
  deletePost,
  indexReport,
  clearReport,
};
