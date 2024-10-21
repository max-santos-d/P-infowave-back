import questionMessageRepositorie from '../repositories/questionMessage.repositorie.js';
import mongoDbIdValidate from '../validators/mongoDbIdValidate.js';

const store = async ({ comment }, user, post) => {
  if (!comment) throw new Error('Required text field.');
  const response = await questionMessageRepositorie.store(post, user, comment);
  if (!response) throw new Error('Error when creating comment.');
  return response;
};

const index = async (question) => {
  const response = await questionMessageRepositorie.index(question);
  console.log(response.comments);
  if (!response) throw new Error('error when making request');
  return response.comments;
};

const update = async ({ comment }, { commentId }, userId, questionId) => {
  if (!comment) throw new Error('Required text field.');
  if (!commentId) throw new Error('Comment id required.');
  const response = await questionMessageRepositorie.update(comment, commentId, userId, questionId);
  return response;
};

const deleted = async (questionId, { commentId }, userId) => {
  if (!commentId) throw new Error('comment id required');
  if (!mongoDbIdValidate(commentId)) throw new Error('invalid id comment');
  const findComment = await questionMessageRepositorie.show(questionId, commentId);
  if (!findComment) throw new Error('comment not fount');
  await questionMessageRepositorie.deleted(questionId, commentId, userId);
  if (!findComment) throw new Error('comment not fount');
  const findCommentDeleted = await questionMessageRepositorie.show(questionId, commentId);
  if (findCommentDeleted) throw new Error('error wen deleting comment');
  return 'comment deleted';
};

export default {
  store,
  index,
  update,
  deleted,
};
