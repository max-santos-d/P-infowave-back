import questionMessageRepositorie from '../repositories/questionMessage.repositorie.js';
import userRepositorie from '../repositories/user.repositorie.js';

const store = async (user, question, { comment }) => {
  if (!comment) throw new Error('Required Fields <comment>.');

  const showUser = await userRepositorie.show(user).then((user) => {
    return { id: user.id, name: user.name, username: user.username, avatar: user.avatar };
  });

  const response = await questionMessageRepositorie.store(question, showUser, comment);
  if (!response) throw new Error('Error when creating comment.');
  return response;
};

const index = async (question) => {
  return await questionMessageRepositorie.index(question);
};

const deleted = async (question, { comment }) => {
  if (!comment) throw new Error('Comment id required.');
  const findQuestion = await questionMessageRepositorie.show(question, comment);
  if (!findQuestion.length) return 'Comment not found.';
  const response = await questionMessageRepositorie.deleted(question, comment);
  if (response) return 'Comment deleted.';
};

export default {
  store,
  index,
  deleted,
};
