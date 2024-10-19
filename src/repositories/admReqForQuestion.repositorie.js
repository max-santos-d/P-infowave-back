import Question from '../models/Question.js';

const indexQuestion = () => Question.find();
const showQuestion = (id) => Question.findById({ _id: id });
const deleteQuestion = (id) => Question.findByIdAndDelete({ _id: id });

const indexReport = () => Question.find({ report: { $exists: true, $not: { $size: 0 } } });

export default {
  indexQuestion,
  showQuestion,
  deleteQuestion,
  indexReport,
};
