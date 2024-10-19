import Question from '../models/Question.js';

const indexQuestion = () => Question.find();
const showQuestion = (id) => Question.findById({ _id: id });
const deleteQuestion = (id) => Question.findByIdAndDelete({ _id: id });

export default {
  indexQuestion,
  showQuestion,
  deleteQuestion,
};
