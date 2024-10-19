import User from '../models/User.js';

const store = (name, username, login, password, avatar) => User.create({ name, username, login, password, avatar });

const index = () => User.find();

const show = (id) => User.findById({ _id: id });

const showPassword = (id) => User.findById({ _id: id }).select('+password');

const updated = (props) =>
  User.findByIdAndUpdate(
    { _id: props.id },
    {
      name: props.name,
      username: props.username,
      password: props.password,
      avatar: props.avatar,
      tokenVersion: props.tokenVersion,
    },
    { new: true }
  );

const deleted = (id) => User.findByIdAndDelete({ _id: id });

// Type User funcitons
const indexType = (top) => User.find({ 'userType.type': { $in: [top] } });

const promotionOrg = (id) =>
  User.findOneAndUpdate(
    { _id: id, 'userType.type': { $nin: ['organization'] } },
    { $push: { userType: { type: 'organization', created_at: new Date() } } }
  );

const promotionAdm = (id) =>
  User.findOneAndUpdate(
    { _id: id, 'userType.type': { $nin: ['administration'] } },
    { $push: { userType: { type: 'administration', created_at: new Date() } } }
  );

const downgradeOrg = (id) => User.findOneAndUpdate({ _id: id }, { $pull: { userType: { type: 'organization' } } });

const downgradeAdm = (id) => User.findOneAndUpdate({ _id: id }, { $pull: { userType: { type: 'administration' } } });

export default {
  store,
  index,
  show,
  showPassword,
  updated,
  deleted,

  indexType,
  promotionOrg,
  promotionAdm,
  downgradeOrg,
  downgradeAdm,
};
