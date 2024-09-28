import questionRepositorie from '../repositories/question.repositorie.js';

const store = async (user, { text }) => {
	if (!text) throw new Error('Required Fields.');
	console.log(text);
	const response = await questionRepositorie.store(text, user);
	if (!response) throw new Error('Error creating question.');
	return 'Successfully created.';
};

const index = async () => {
	const response = await questionRepositorie.index();

	return response.map((question) => ({
		_id: question._id,
		text: question.text,
		user: {
			_id: question.user?._id,
			name: question?.user?.name,
			username: question.user?.username,
			avatar: question.user?.avatar,
		},
		likes: question.likes.length,
		comments: question.comments.length,
		created_at: question.created_at,
		updated_at: question.updated_at,
	}));
};

const update = async (userRequest, question, text) => {
	if (!text) throw new Error('Required Fields <text>.');

	const findQuestion = await questionRepositorie.show(question);

	if (String(findQuestion.user._id) !== String(userRequest))
		throw new Error('You are not authorized to make this request.');

	const response = await questionRepositorie.update(question, { text });
	if (!response) throw new Error('Error when updating.');
	return response;
};

const deleted = async (userRequest, question) => {
	const findQuestion = await questionRepositorie.show(question);

	if (String(findQuestion.user._id) !== String(userRequest))
		throw new Error('You are not authorized to make this request.');

	const response = await questionRepositorie.deleted(question);
	if (!response) throw new Error('Error when updating.');
	return 'Question deleted';
};

export default {
	store,
	index,
	update,
	deleted,
};
