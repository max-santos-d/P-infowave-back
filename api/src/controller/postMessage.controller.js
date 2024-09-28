import postMessageService from '../services/postMessage.service.js';

export const store = async (req, res) => {
  try {
    const response = await postMessageService.store(req.query, req.params.id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const index = async (req, res) => {
  try {
    const response = await postMessageService.index(req.params.id);
    return res.status(200).json({ reponse: response.comments });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await postMessageService.deleted(req.params.id, req.query);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
