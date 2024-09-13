import services from "../services/post.service.js";

export const store = async (req, res) => {
  try {
    await services.store(req.params.id, req.body);
    res.status(200).json({ message: "Post created." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};

export const index = async (_, res) => {
  try {
    const response = await services.index();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};

export const show = async (req, res) => {
  try {
    const response = await services.show(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await services.update(req.params.id, req.body);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    await services.deleted(req.params.id);
    return res.status(200).json({ message: "User deleted." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};
