import Post from '../models/Post.js';

const store = (body) => Post.create(body);

const index = () =>
  Post.find()
    .populate('user', 'username avatar status')
    .populate({
      path: 'comments.user',
      select: 'username status avatar',
    })
    .sort({ updated_at: -1 })
    .exec();

const show = (id) =>
  Post.findById({ _id: id })
    .populate({
      path: 'user',
      select: 'username avatar status',
    })
    .populate({
      path: 'comments.user',
      select: 'username avatar status',
    })
    .exec();

const update = (id, body) => Post.findOneAndUpdate({ _id: id }, body, { new: true });
const deleted = (id) => Post.findOneAndDelete({ _id: id });

const search = (searchText) =>
  Post.find({
    $or: [
      { title: { $regex: searchText, $options: 'i' } }, // 'i' para case insensitive
      { text: { $regex: searchText, $options: 'i' } },
    ],
  })
    .populate({
      path: 'user',
      select: 'username status',
    })
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
};
