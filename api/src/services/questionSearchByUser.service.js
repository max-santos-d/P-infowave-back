import questionRepositorie from '../repositories/question.repositorie.js';

const index = async (userId) => {
  const response = await questionRepositorie.searchByUser(userId);
  return response;
};

export default {
  index,
};
