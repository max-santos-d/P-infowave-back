import admReqForQuestionRepositorie from '../services/admReqForQuestion.service.js';

export const indexQuestion = async (_, res) => {
  try {
    const response = await admReqForQuestionRepositorie.indexQuestion();
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const showQuestion = async (req, res) => {
  try {
    const response = await admReqForQuestionRepositorie.showQuestion(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const response = await admReqForQuestionRepositorie.deleteQuestion(req.params);
    return res.status(200).json({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ responseError: err.message });
  }
};
