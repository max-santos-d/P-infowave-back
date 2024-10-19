import admReqForPostRepositorie from '../services/admReqForPostservice.js';

export const indexPost = async (_, res) => {
  try {
    const response = await admReqForPostRepositorie.indexPost();
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const showPost = async (req, res) => {
  try {
    const response = await admReqForPostRepositorie.showPost(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const response = await admReqForPostRepositorie.deletePost(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
