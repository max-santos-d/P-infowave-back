import Question from '../models/Question.js';

const store = (questionId, userId, text) =>
  Question.findByIdAndUpdate(questionId, { $push: { comments: { user: userId, text: text } } }, { new: true });

const index = (question) =>
  Question.findById({ _id: question })
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .sort({ updated_at: -1 })
    .exec();

const show = (question, comment) =>
  Question.find({ _id: question, 'comments._id': { $in: [comment] } })
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .sort({ updated_at: -1 })
    .exec();

const update = (comment, commentId, userId, question) =>
  Question.findOneAndUpdate(
    { _id: question, 'comments._id': { $in: commentId }, 'comments.user': { $in: userId } },
    { $set: { 'comments.$.text': comment } },
    { new: true }
  )
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .exec();

const deleted = (questionId, commentId, userId) =>
  Question.findOneAndUpdate(
    { _id: questionId, 'comments.user': { $in: userId } },
    { $pull: { comments: { _id: commentId } } },
    { new: true }
  )
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .exec();

export default {
  store,
  index,
  show,
  update,
  deleted,
};
