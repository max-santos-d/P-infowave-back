import questionSearchByUserService from '../services/questionSearchByUser.service.js';

export const index = async (req, res) => {
  try {
    const response = await questionSearchByUserService.index(req.requestUserId);
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
