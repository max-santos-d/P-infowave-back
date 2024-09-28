import questionMessageService from '../services/questionMessage.service.js';

export const store = async (req, res) => {
	try {
		const response = await questionMessageService.store(
			req.requestUserId,
			req.questionParams._id,
			req.body,
		);
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const index = async (req, res) => {
	try {
		const response = await questionMessageService.index(req.questionParams._id);
		return res.status(200).json({ response: response.comments });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};

export const deleted = async (req, res) => {
	try {
		const response = await questionMessageService.deleted(
			req.questionParams._id,
			req.query,
		);
		return res.status(200).json({ response });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ responseError: err.message });
	}
};
