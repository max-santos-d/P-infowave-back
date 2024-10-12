import Post from '../models/Post.js';

const store = (body) => Post.create(body);
const index = () => Post.find().populate('user').sort({ updated_at: -1 });
const show = (id) => Post.findById({ _id: id }).populate('user');
const update = (id, body) => Post.findOneAndUpdate({ _id: id }, body, { new: true });
const deleted = (id) => Post.findOneAndDelete({ _id: id });

const search = (searchText) =>
  Post.find({
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
