import postLikeRepositorie from '../repositories/postLike.repositorie.js';

const index = async (user) => {
	return await postLikeRepositorie.index(user);
};

const update = async (user, post) => {
	const response = await postLikeRepositorie.show(post, user);
	if (response.length) return await postLikeRepositorie.remove(post, user);
	return await postLikeRepositorie.add(post, user);
};

export default {
	update,
	index,
};
