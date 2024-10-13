import Question from '../models/Question.js';

const store = (text, user) => Question.create({ text, user });
const index = () => Question.find().sort({ _id: -1 }).populate('user');
const show = (id) => Question.findById({ _id: id }).populate('user');
const update = (id, body) => Question.findOneAndUpdate({ _id: id }, body, { new: true });
const deleted = (id) => Question.findOneAndDelete({ _id: id });

const search = (searchText) =>
  Question.find({
    $or: [
      { title: { $regex: searchText, $options: 'i' } }, // 'i' para case insensitive
      { text: { $regex: searchText, $options: 'i' } },
    ],
  });

export default {
  store,
  index,
  show,
  update,
  deleted,
  search,
};
