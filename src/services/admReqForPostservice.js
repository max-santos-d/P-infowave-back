import admReqForPostRepositorie from '../repositories/admReqForPost.repositorie.js';

const indexPost = async () => {
  const response = await admReqForPostRepositorie.indexPost();
  return response;
};

const showPost = async ({ id }) => {
  const response = await admReqForPostRepositorie.showPost(id);
  return response;
};

const deletePost = async ({ id }) => {
  await admReqForPostRepositorie.deletePost(id);
  return 'post deleted';
};

export default {
  indexPost,
  showPost,
  deletePost,
};
