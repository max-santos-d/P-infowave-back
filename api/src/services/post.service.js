import postRepositorie from '../repositories/post.repositorie.js';

const store = async (user, body) => {
  const { title = '', text = '', banner = '' } = body;

  if (!title || !text || !banner) throw new Error('Required Fields.');

  const response = await postRepositorie.store({
    title,
    text,
    banner,
    user,
  });

  if (!response) throw new Error('Error creating user.');

  return response;
};

const index = async () => {
  const response = await postRepositorie.index();
  return response.map((post) => ({
    _id: post.id,
    banner: post.banner,
    title: post.title,
    text: post.text,
    user: {
      _id: post.user?._id,
      name: post.user?.name,
      username: post.user?.username,
      avatar: post.user?.avatar,
    },
    likes: post.likes.length,
    comments: post.comments.length,
    created_at: post.created_at,
    updated_at: post.updated_at,
  }));
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner)
    throw new Error('At least one field is requeired.');

  const response = await postRepositorie.update(id, { title, text, banner });

  if (!response) throw new Error('Error when updating.');
  return response;
};

const deleted = async (id) => {
  await postRepositorie.deleted(id);
  return 'Post deleted.';
};

export default {
  store,
  index,
  update,
  deleted,
};
