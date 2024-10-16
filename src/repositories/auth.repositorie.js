import User from '../models/User.js';

const showUser = (login) => User.findOne({ login }).select('+password');

export default {
  showUser,
};
