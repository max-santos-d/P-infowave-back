import service from "../services/userType.service.js";

export const index = async (req, res) => {
  try {
    const response = await service.index(req.query);
    return res.status(200).json(
      response.map((user) => ({
        id: user._id,
        name: user.name,
        username: user.username,
        avatar: user.avatar,
        email: user.email,
      }))
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const show = async (req, res) => {
  try {
    const [response] = await service.show(req.userParams._id, req.query);
    if (!response?.created_at) return res.status(200).json({});
    return res.status(200).json({ created_at: response?.created_at });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await service.update(req.userParams._id, req.query);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await service.deleted(req.userParams._id, req.query);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMessage: err.message });
  }
};
