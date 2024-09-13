import services from "../services/user.service.js";

export const store = async (req, res) => {
  try {
    await services.store(req.body);
    return res.status(200).json({ message: "User created." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const index = async (req, res) => {
  try {
    const response = await services.index();
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
    const response = await services.show(req.params.id);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await services.update(req.params.id, req.body);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    await services.deleted(req.params.id);
    return res.status(200).json({ message: "User deleted." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};
