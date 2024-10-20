import questionMessageService from '../services/questionMessage.service.js';

export const store = async (req, res) => {
  try {
    const response = await questionMessageService.store(req.body, req.requestUserId, req.questionParams._id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const index = async (req, res) => {
  try {
    const response = await questionMessageService.index(req.questionParams._id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await questionMessageService.update(
      req.body,
      req.query,
      req.requestUserId,
      req.questionParams._id
    );
    return res.status(200).json({ reponse: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await questionMessageService.deleted(req.questionParams._id, req.query, req.requestUserId);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
