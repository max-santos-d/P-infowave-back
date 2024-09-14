import service from "../services/postLike.service.js";

export const index = async (req, res) => {
  try {
    const response = await service.index(req.query);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const response = await service.update(req.query, req.params.id);
    res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messageError: err.message });
  }
};
