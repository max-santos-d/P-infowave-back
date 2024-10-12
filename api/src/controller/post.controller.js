import postServices from '../services/post.service.js';

export const store = async (req, res) => {
  try {
    const response = await postServices.store(req.requestUserId, req.body);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const index = async (req, res) => {
  try {
    const response = await postServices.index(req.body);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ responseError: err.message });
  }
};

export const show = async (req, res) => {
  try {
    return res.status(200).json({ response: req.postParams });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await postServices.update(req.postParams._id, req.body);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await postServices.deleted(req.postParams._id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
