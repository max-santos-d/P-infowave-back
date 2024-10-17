import userTypeService from '../services/userType.service.js';

export const index = async (req, res) => {
  try {
    const response = await userTypeService.index(req.query.param);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const show = async (req, res) => {
  try {
    const response = await userTypeService.show(req.userParams._id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await userTypeService.update(req.userParams._id, req.query.param);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await userTypeService.deleted(req.userParams._id, req.query.param);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
