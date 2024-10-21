import postMessageService from '../services/postMessage.service.js';

export const store = async (req, res) => {
  try {
    const response = await postMessageService.store(req.body, req.requestUserId, req.postParams._id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const index = async (req, res) => {
  try {
    const response = await postMessageService.index(req.postParams._id);
    return res.status(200).json({ reponse: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await postMessageService.update(req.body, req.query, req.requestUserId, req.postParams._id);
    return res.status(200).json({ reponse: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await postMessageService.deleted(req.postParams._id, req.query, req.requestUserId);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    if (err.message === 'comment not fount') return res.status(404).json({ responseError: err.message });
    if (err.message === 'error wen deleting comment') return res.status(500).json({ responseError: err.message });
    if (err.message === 'invalid id comment') return res.status(400).json({ responseError: err.message });
    return res.status(500).json({ responseError: err.message });
  }
};
