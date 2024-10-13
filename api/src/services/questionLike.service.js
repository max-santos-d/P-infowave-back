import questionLikeRepositorie from '../repositories/questionLike.repositorie.js';

const index = async (user) => {
  return await questionLikeRepositorie.index(user);
};

const update = async (question, user) => {
  const response = await questionLikeRepositorie.show(question, user);
  if (response.length) return await questionLikeRepositorie.remove(question, user);
  return await questionLikeRepositorie.add(question, user);
};

export default {
  index,
  update,
};
