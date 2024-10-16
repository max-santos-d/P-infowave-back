import User from '../models/User.js';

const showUser = (email) => User.findOne({ email }).select('+password');

export default {
  showUser,
};
