import questionService from "../services/question.service.js";

export const store = async (req, res) => {
  try {
    const response = await questionService.store(req.query, req.body);
    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err.message });
  }
};

export const index = async (_, res) => {
  try {
    const response = await questionService.index();
    return res.status(200).json({
      response: response.map((question) => ({
        _id: question._id,
        text: question.text,
        user: {
          _id: question.user._id,
          name: question.user.name,
          username: question.user.username,
          avatar: question.user.avatar,
        },
        likes: question.likes.length,
        comments: question.comments.length,
        created_at: question.created_at,
        updated_at: question.updated_at,
      })),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err.message });
  }
};

export const show = (req, res) => {
  try {
    return res.status(200).json({ response: req.questionParams });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await questionService.update(
      req.questionParams._id,
      req.body
    );
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await questionService.deleted(req.questionParams._id);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err.message });
  }
};
