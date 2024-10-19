import User from '../models/User.js';

const indexUser = () => User.find();
const showUser = (id) => User.findById({ _id: id });
const updateUser = (id, login, password) => User.findByIdAndUpdate({ _id: id }, { login, password }, { new: true });
const deleteUser = (id) => User.findByIdAndDelete({ _id: id });

const indexReport = () => User.find({ report: { $exists: true, $not: { $size: 0 } } });

export default {
  indexUser,
  showUser,
  updateUser,
  deleteUser,
  indexReport,
};
