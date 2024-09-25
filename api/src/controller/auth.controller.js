import authService from "../services/auth.service.js";

export const auth = async (req, res) => {
  try {
    const response = await authService.auth(req.body);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err.message });
  }
};
