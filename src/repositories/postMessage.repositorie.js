import Post from '../models/Post.js';

const store = (post, user, text) =>
  Post.findByIdAndUpdate(post, { $push: { comments: { user: user, text: text } } }, { new: true });

const index = (post) => Post.findById({ _id: post }).populate('user');

const show = (post, comment) => Post.find({ _id: post, 'comments._id': { $in: [comment] } });

const update = (comment, commentId, user, post) =>
  Post.findOneAndUpdate(
    { _id: post, 'comments._id': { $in: commentId }, 'comments.user': { $in: user } },
    { $set: { 'comments.$.text': comment } },
    { new: true }
  );

/* const deleted = (post, commentId) =>
  Post.findOneAndUpdate({ _id: post }, { $pull: { comments: { _id: commentId } } }, { new: true }); */

const deleted = (postId, commentId, userId) =>
  Post.findOneAndUpdate(
    { _id: postId, 'comments.user': { $in: userId } },
    { $pull: { comments: { _id: commentId } } },
    { new: true }
  );

export default {
  store,
  index,
  show,
  update,
  deleted,
};
