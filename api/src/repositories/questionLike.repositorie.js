import Question from "../models/Question.js";

const index = (user) => Question.find({ "likes.user": { $in: [user] } });

const show = (question, user) =>
  Question.find({ _id: question, "likes.user": { $in: [user] } });

const add = (post, user) =>
  Question.findOneAndUpdate(
    { _id: post },
    { $push: { likes: { user, createdat: new Date() } } },
    { new: true }
  );

const remove = (post, user) =>
  Question.findOneAndUpdate(
    { _id: post },
    { $pull: { likes: { user } } },
    { new: true }
  );

export default {
  index,
  show,
  add,
  remove,
};
