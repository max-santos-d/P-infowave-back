import questionLikeRepositorie from '../repositories/questionLike.repositorie.js';

const index = async (user) => {
	return await questionLikeRepositorie.index(user);
};

const update = async (question, user) => {
	const response = await questionLikeRepositorie.show(question, user);
	if (response.length) {
		await questionLikeRepositorie.remove(question, user);
		return 'Like removed.';
	}
	await questionLikeRepositorie.add(question, user);
	return 'Like added.';
};

export default {
	index,
	update,
};
