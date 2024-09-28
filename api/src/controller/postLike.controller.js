import postLikeService from '../services/postLike.service.js';

export const index = async (req, res) => {
  try {
    const response = await postLikeService.index(req.requestUserId);
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ responseError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await postLikeService.update(
      req.requestUserId,
      req.params.id,
    );
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ reponseError: err.message });
  }
};
