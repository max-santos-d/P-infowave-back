import Post from '../models/Post.js';

const store = (post, user, text) =>
  Post.findOneAndUpdate(
    { _id: post },
    {
      $push: {
        comments: {
          _id: crypto.randomUUID(),
          user,
          text,
          createdAt: new Date(),
        },
      },
    },
    { new: true },
  );

const index = (post) => Post.findById({ _id: post });

const show = (post, comment) =>
  Post.find({ _id: post, 'comments._id': { $in: [comment] } });

const deleted = (post, comment) =>
  Post.findOneAndUpdate(
    { _id: post },
    { $pull: { comments: { _id: comment } } },
    { new: true },
  );

export default {
  store,
  index,
  show,
  deleted,
};
