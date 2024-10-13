import postMessageRepositorie from '../repositories/postMessage.repositorie.js';
import userRepositorie from '../repositories/user.repositorie.js';

const store = async ({ comment }, user, post) => {
  if (!comment) throw new Error('Required text field.');

  const showUser = await userRepositorie.show(user).then((user) => {
    return { id: user.id, name: user.name, username: user.username, avatar: user.avatar };
  });

  const response = await postMessageRepositorie.store(post, showUser, comment);
  if (!response) throw new Error('Error when creating comment.');
  return response;
};

const index = async (post) => {
  const response = await postMessageRepositorie.index(post);
  if (!response) throw new Error('error when making request');
  return response.comments;
};

const deleted = async (post, { comment }) => {
  if (!comment) throw new Error('Comment id required.');
  const findComment = await postMessageRepositorie.show(post, comment);
  if (!findComment.length) return 'Comment not found.';
  const response = postMessageRepositorie.deleted(post, comment);
  if (!response) throw new Error('Error when deleting');
  return 'Comment deleted.';
};

export default {
  store,
  index,
  deleted,
};
