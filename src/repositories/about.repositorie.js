import About from '../models/About.js';

const store = (body) => About.create(body);
const index = () => About.find().exec();
const show = (id) => About.findById({ _id: id });
const update = (id, body) => About.findOneAndUpdate({ _id: id }, body, { new: true }).exec();
const deleted = (id) => About.findByIdAndDelete({ _id: id }).exec();
const search = (searchText) =>
  About.find({
    $or: [
      { title: { $regex: searchText, $options: 'i' } }, // 'i' para case insensitive
      { text: { $regex: searchText, $options: 'i' } },
    ],
  }).exec();

export default {
  store,
  index,
  show,
  update,
  deleted,
  search,
};
