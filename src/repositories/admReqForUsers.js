import User from '../models/User.js';

//user
const indexUser = () => User.find();
const showUser = (id) => User.findById({ _id: id });
const updateUser = (id, login, password) => User.findByIdAndUpdate({ _id: id }, { login, password }, { new: true });
const deleteUser = (id) => User.findByIdAndDelete({ _id: id });

//post

//question

export default {
  //user
  indexUser,
  showUser,
  updateUser,
  deleteUser,

  //post

  //question
};
