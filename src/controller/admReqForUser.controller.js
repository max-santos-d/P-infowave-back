import admReqForUsersService from '../services/admReqForUser.service.js';

export const indexUser = async (req, res) => {
  try {
    const response = await admReqForUsersService.indexUser(req.query);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const showUser = async (req, res) => {
  try {
    const response = await admReqForUsersService.showUser(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const response = await admReqForUsersService.updateUser(req.params, req.body);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const response = await admReqForUsersService.deleteUser(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
