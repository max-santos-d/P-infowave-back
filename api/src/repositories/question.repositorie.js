import Question from '../models/Question.js';

const store = (text, user) => Question.create({ text, user });
const index = () => Question.find().populate('user');
const show = (id) => Question.findById({ _id: id }).populate('user');
const update = (id, body) =>
  Question.findOneAndUpdate({ _id: id }, body, { new: true });
const deleted = (id) => Question.findOneAndDelete({ _id: id });

export default {
  store,
  index,
  show,
  update,
  deleted,
};
