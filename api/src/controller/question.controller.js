import questionService from '../services/question.service.js';

export const store = async (req, res) => {
	try {
		const response = await questionService.store(req.requestUserId, req.body);
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const index = async (_, res) => {
	try {
		const response = await questionService.index();
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const show = (req, res) => {
	try {
		return res.status(200).json({ response: req.questionParams });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const update = async (req, res) => {
	try {
		const response = await questionService.update(
			req.requestUserId,
			req.questionParams._id,
			req.body.text,
		);
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const deleted = async (req, res) => {
	try {
		const response = await questionService.deleted(
			req.requestUserId,
			req.questionParams._id,
		);
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};
