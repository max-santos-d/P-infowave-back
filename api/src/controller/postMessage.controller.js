import postMessage from "../services/postMessage.service.js";

export const store = async (req, res) => {
  try {
    const response = await postMessage.store(req.query, req.params.id);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const index = async (req, res) => {
  try {
    const response = await postMessage.index(req.params.id);
    return res.status(200).json(response.comments);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const response = await postMessage.deleted(req.params.id, req.query);
    if (!response)
      return res
        .status(500)
        .json({ messageError: "Unexpected error when deleting comment." });
    return res.status(200).json({ message: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ messageError: err.message });
  }
};
