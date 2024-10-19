import admServices from '../services/admReqForUsers.service.js';

export const indexUser = async (_, res) => {
  try {
    const response = await admServices.indexUser();
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const showUser = async (req, res) => {
  try {
    const response = await admServices.showUser(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const response = await admServices.updateUser(req.params, req.body);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const response = await admServices.deleteUser(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
