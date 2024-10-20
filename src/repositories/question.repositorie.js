import Question from '../models/Question.js';

const store = (text, user) => Question.create({ text, user });

const index = () =>
  Question.find()
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .sort({ updated_at: -1 })
    .exec();

const show = (id) =>
  Question.findById({ _id: id })
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .sort({ updated_at: -1 })
    .exec();

const update = (id, body) => Question.findOneAndUpdate({ _id: id }, body, { new: true }).exec();

const deleted = (id) => Question.findOneAndDelete({ _id: id }).exec();

const search = (searchText) =>
  Question.find({
    $or: [{ title: { $regex: searchText, $options: 'i' } }, { text: { $regex: searchText, $options: 'i' } }],
  })
    .populate('user', 'username status')
    .populate({
      path: 'comments.user',
      select: 'username status',
    })
    .exec();

const searchByUser = (userId) =>
  Question.find({ user: userId })
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
  search,
  searchByUser,
};
