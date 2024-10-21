import postMessageRepositorie from '../repositories/postMessage.repositorie.js';
import mongoDbIdValidate from '../validators/mongoDbIdValidate.js';

const store = async ({ comment }, user, post) => {
  if (!comment) throw new Error('required text field');
  const response = await postMessageRepositorie.store(post, user, comment);
  if (!response) throw new Error('error when creating comment');
  return response;
};

const index = async (post) => {
  const response = await postMessageRepositorie.index(post);
  if (!response) throw new Error('error when making request');
  return response.comments;
};

const update = async ({ comment }, { commentId }, userId, postId) => {
  if (!comment) throw new Error('required text field');
  if (!commentId) throw new Error('comment id required');
  const response = await postMessageRepositorie.update(comment, commentId, userId, postId);
  return response;
};

const deleted = async (postId, { commentId }, userId) => {
  if (!commentId) throw new Error('comment id required');
  if (!mongoDbIdValidate(commentId)) throw new Error('invalid id comment');
  const findComment = await postMessageRepositorie.show(postId, commentId);
  if (!findComment) throw new Error('comment not fount');
  await postMessageRepositorie.deleted(postId, commentId, userId);
  if (!findComment) throw new Error('comment not fount');
  const findCommentDeleted = await postMessageRepositorie.show(postId, commentId);
  if (findCommentDeleted) throw new Error('error wen deleting comment');
  return 'comment deleted';
};

export default {
  store,
  index,
  update,
  deleted,
};
