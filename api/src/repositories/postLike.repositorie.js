import Post from '../models/Post.js';

const index = (user) => Post.find({ 'likes.user': { $in: [user] } });

const show = (post, user) =>
	Post.find({ _id: post, 'likes.user': { $in: [user] } });

const add = (post, user) =>
	Post.findOneAndUpdate(
		{ _id: post },
		{ $push: { likes: { user, createdat: new Date() } } },
		{ new: true },
	);

const remove = (post, user) =>
	Post.findOneAndUpdate(
		{ _id: post },
		{ $pull: { likes: { user } } },
		{ new: true },
	);

export default {
	index,
	show,
	add,
	remove,
};
