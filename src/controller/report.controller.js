import reportService from '../services/report.service.js';

export const userReport = async (req, res) => {
  try {
    const response = await reportService.userReport(req.params, req.requestUserId);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const postReport = async (req, res) => {
  try {
    const response = await reportService.postReport(req.params, req.requestUserId);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const questionReport = async (req, res) => {
  try {
    const response = await reportService.questionReport(req.questionParams, req.requestUserId, req.query);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
