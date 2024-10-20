import Post from '../models/Post.js';

const store = (post, user, text) =>
  Post.findByIdAndUpdate(post, { $push: { comments: { user: user, text: text } } }, { new: true }).exec();

const index = (post) =>
  Post.findById({ _id: post })
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .sort({ updated_at: -1 })
    .exec();

const show = (post, comment) =>
  Post.find({ _id: post, 'comments._id': { $in: [comment] } })
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .sort({ updated_at: -1 })
    .exec();

const update = (comment, commentId, user, post) =>
  Post.findOneAndUpdate(
    { _id: post, 'comments._id': { $in: commentId }, 'comments.user': { $in: user } },
    { $set: { 'comments.$.text': comment } },
    { new: true }
  ).exec();

const deleted = (postId, commentId, userId) =>
  Post.findOneAndUpdate(
    { _id: postId, 'comments.user': { $in: userId } },
    { $pull: { comments: { _id: commentId } } },
    { new: true }
  ).exec();

export default {
  store,
  index,
  show,
  update,
  deleted,
};
