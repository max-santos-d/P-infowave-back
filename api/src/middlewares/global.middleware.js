import mongoose from 'mongoose';

import userRepositorie from '../repositories/user.repositorie.js';
import postRepositorie from '../repositories/post.repositorie.js';
import questionRepositorie from '../repositories/question.repositorie.js';

const idValidation = (id) => {
	if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid ID.');
};

export const userIdValidation = async (req, res, next) => {
	try {
		idValidation(req.params.id);
		const user = await userRepositorie.show(req.params.id);
		if (!user) return res.status(200).json({ response: 'User not found.' });
		req.userParams = user;
		next();
	} catch (err) {
		console.log(err);
		return res.status(500).send({ responseError: err.message });
	}
};

export const postIdValidation = async (req, res, next) => {
	try {
		idValidation(req.params.id);
		const post = await postRepositorie.show(req.params.id);
		if (!post) return res.status(200).json({ response: 'Post not found.' });
		req.postParams = {
			_id: post._id,
			title: post.title,
			text: post.text,
			banner: post.banner,
			user: {
				_id: post.user?._id,
				name: post.user?.name,
				username: post.user?.username,
				avatar: post.user?.avatar,
			},
			likes: post.likes,
			comments: post.comments,
			created_at: post.created_at,
			updated_at: post.updated_at,
		};
		next();
	} catch (err) {
		console.log(err);
		return res.status(500).send({ responseError: err.message });
	}
};

export const questionIdValidation = async (req, res, next) => {
	try {
		idValidation(req.params.id);
		const question = await questionRepositorie.show(req.params.id);
		if (!question)
			return res.status(200).json({ response: 'Question not found.' });
		req.questionParams = {
			_id: question._id,
			title: question.title,
			text: question.text,
			banner: question.banner,
			user: {
				_id: question.user?._id,
				name: question.user?.name,
				username: question.user?.username,
				avatar: question.user?.avatar,
			},
			likes: question.likes,
			comments: question.comments,
			created_at: question.created_at,
			updated_at: question.updated_at,
		};
		next();
	} catch (err) {
		console.log(err);
		return res.status(500).send({ responseError: err.message });
	}
};

export const organizerUserValidation = async (req, res, next) => {
	try {
		const { userType } = await userRepositorie.show(req.requestUserId);
		const filterUserType = userType.filter((i) => i.type === 'organization');

		if (!filterUserType.length)
			return res.status(401).json({ response: 'Invalid user type' });

		next();
	} catch (err) {
		console.log(err);
		return res.status(500).send({ responseError: err.message });
	}
};

export const administratorUserValidation = async (req, res, next) => {
	try {
		const userRequestId = req.requestUserId;
		const userToUpdateId = req.userParams._id;
		const { param } = req.query;

		if (!param) throw new Error('<param> parameter not provided by query.');
		if (typeof param !== 'string')
			throw new Error('Only one parameter must be sent.');

		const userTypeRequest = await userRepositorie
			.show(userRequestId)
			.then((i) => i.userType);

		if (!userTypeRequest.filter((el) => el.type === 'administration').length)
			return res.status(401).json({
				messageError:
					'You do not have the necessary authentication to make the request',
			});

		const userToUpdate = (await userRepositorie.show(userToUpdateId)).userType;

		if (!userToUpdate.filter((el) => el.type === 'administration').length)
			return next();
		else {
			const [dateUserRequest] = userTypeRequest.filter(
				(i) => i.type === 'administration',
			);
			const [dateUsertoUpdate] = userToUpdate.filter(
				(i) => i.type === 'administration',
			);

			if (dateUserRequest.created_at <= dateUsertoUpdate.created_at)
				return next();
		}
		return res.status(500).json({
			responseError:
				'You do not have the necessary authentication to make the request.',
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};
