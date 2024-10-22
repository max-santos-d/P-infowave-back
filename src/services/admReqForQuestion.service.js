import admReqForQuestionRepositorie from '../repositories/admReqForQuestion.repositorie.js';

const indexQuestion = async ({ report }) => {
  if (report === 'true') {
    const response = await admReqForQuestionRepositorie.indexReport();
    return response;
  }

  const response = await admReqForQuestionRepositorie.indexQuestion();
  return response;
};

const showQuestion = async ({ id }) => {
  const response = await admReqForQuestionRepositorie.showQuestion(id);
  return response;
};

const deleteQuestion = async ({ id }) => {
  await admReqForQuestionRepositorie.deleteQuestion(id);
  return 'question deleted';
};

const clearReport = async ({ id }) => {
  await admReqForQuestionRepositorie.clearReport(id);
  return 'reports reset';
};

export default {
  indexQuestion,
  showQuestion,
  deleteQuestion,
  clearReport,
};
