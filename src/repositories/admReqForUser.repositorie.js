import User from '../models/User.js';

const indexUser = () => User.find().populate('user', 'username avatar status');
const showUser = (id) => User.findById({ _id: id }).populate('user', 'username avatar status');
const updateUser = (id, login, password) => User.findByIdAndUpdate({ _id: id }, { login, password }, { new: true });
const deleteUser = (id) => User.findByIdAndDelete({ _id: id });

const indexReport = () =>
  User.find({ report: { $exists: true, $not: { $size: 0 } } }).populate('user', 'username avatar status');

export default {
  indexUser,
  showUser,
  updateUser,
  deleteUser,
  indexReport,
};
