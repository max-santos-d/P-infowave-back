import services from "../services/post.service.js";

export const store = async (req, res) => {
  try {
    const response = await services.store(req.query, req.body);
    if (!response) res.status(500).json({ messageError: "Error creating." });
    return res.status(200).json({ message: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const index = async (_, res) => {
  try {
    const response = await services.index();
    return res.status(200).json(
      response.map((post) => ({
        _id: post.id,
        banner: post.banner,
        title: post.title,
        text: post.text,
        user: {
          _id: post.user._id,
          name: post.user.name,
          username: post.user.username,
          avatar: post.user.avatar,
        },
        likes: post.likes.length,
        comments: post.comments.length,
        created_at: post.created_at,
        updated_at: post.updated_at,
      }))
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};

export const show = async (req, res) => {
  try {
    return res.status(200).json(req.postParams);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await services.update(req.postParams._id, req.body);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    await services.deleted(req.postParams._id);
    return res.status(200).json({ message: "User deleted." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};
