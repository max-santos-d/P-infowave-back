import userService from '../services/user.service.js';

export const store = async (req, res) => {
	try {
		await userService.store(req.body);
		return res.status(200).json({ response: 'User created.' });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const index = async (_, res) => {
	try {
		const response = await userService.index();
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const show = async (req, res) => {
	try {
		return res.status(200).json({ response: req.userParams });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const update = async (req, res) => {
	try {
		const response = await userService.update(req.requestUserId, req.body);
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const deleted = async (req, res) => {
	try {
		const response = await userService.deleted(req.requestUserId, req.query);
		return res.status(200).json({ response: 'User deleted.', user: response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};
