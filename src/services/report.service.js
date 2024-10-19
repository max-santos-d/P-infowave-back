import reportRepositorie from '../repositories/report.repositorie.js';

const userReport = async ({ id }, requestUserId) => {
  const response = await reportRepositorie.userReport(id, requestUserId);
  if (!response) return 'you made a report to this user';
  return 'reported';
};

const postReport = async ({ id }, requestUserId) => {
  const response = await reportRepositorie.postReport(id, requestUserId);
  if (!response) return 'you made a report to this user';
  return 'reported';
};

const questionReport = async ({ id }, requestUserId) => {
  const response = await reportRepositorie.questionReport(id, requestUserId);
  if (!response) return 'you made a report to this user';
  return 'reported';
};

export default {
  userReport,
  postReport,
  questionReport,
};
