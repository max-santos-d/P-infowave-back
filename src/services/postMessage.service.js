import postMessageRepositorie from '../repositories/postMessage.repositorie.js';

const store = async ({ comment }, user, post) => {
  if (!comment) throw new Error('Required text field.');
  const response = await postMessageRepositorie.store(post, user, comment);
  if (!response) throw new Error('Error when creating comment.');
  return response;
};

const index = async (post) => {
  const response = await postMessageRepositorie.index(post);
  if (!response) throw new Error('error when making request');
  return response.comments;
};

const update = async ({ comment }, { commentId }, userId, postId) => {
  if (!comment) throw new Error('Required text field.');
  if (!commentId) throw new Error('Comment id required.');
  const response = await postMessageRepositorie.update(comment, commentId, userId, postId);
  return response;
};

const deleted = async (postId, { commentId }, userId) => {
  if (!commentId) throw new Error('Comment id required.');
  const response = postMessageRepositorie.deleted(postId, commentId, userId);
  return response;
};

export default {
  store,
  index,
  update,
  deleted,
};
