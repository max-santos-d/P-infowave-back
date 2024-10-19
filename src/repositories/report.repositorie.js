import User from '../models/User.js';
import Post from '../models/Post.js';
import Question from '../models/Question.js';

const userReport = (id, reportedUserId) =>
  User.findOneAndUpdate(
    { _id: id, 'report.user': { $nin: reportedUserId } },
    { report: { user: reportedUserId } },
    { new: true }
  );

const postReport = (id, reportedUserId) =>
  Post.findOneAndUpdate(
    { _id: id, 'report.user': { $nin: reportedUserId } },
    { report: { user: reportedUserId } },
    { new: true }
  );

const questionReport = (id, reportedUserId) =>
  Question.findOneAndUpdate(
    { _id: id, 'report.user': { $nin: reportedUserId } },
    { report: { user: reportedUserId } },
    { new: true }
  );

export default {
  userReport,
  postReport,
  questionReport,
};
