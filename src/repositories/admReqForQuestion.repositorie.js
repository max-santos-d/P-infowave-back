import Question from '../models/Question.js';

const indexQuestion = () => Question.find().populate('user', 'username avatar status');
const showQuestion = (id) => Question.findById({ _id: id }).populate('user', 'username avatar status');
const deleteQuestion = (id) => Question.findByIdAndDelete({ _id: id });

const clearReport = (questionId) =>
  Question.findOneAndUpdate({ _id: questionId }, { $set: { report: [] } }, { new: true }).populate(
    'user',
    'username avatar status'
  );

const indexReport = () =>
  Question.find({ report: { $exists: true, $not: { $size: 0 } } }).populate('user', 'username avatar status');

export default {
  indexQuestion,
  showQuestion,
  deleteQuestion,
  indexReport,
  clearReport,
};
