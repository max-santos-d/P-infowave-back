import admReqForPostRepositorie from '../services/admReqForPost.service.js';

export const indexPost = async (req, res) => {
  try {
    const response = await admReqForPostRepositorie.indexPost(req.query);
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
