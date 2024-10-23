import postRepositorie from '../repositories/post.repositorie.js';

const store = async (user, body) => {
  const { title = '', text = '', banner = '' } = body;

  if (!title || !text) throw new Error('required Fields');

  const response = await postRepositorie.store({
    title,
    text,
    banner,
    user,
  });

  if (!response) throw new Error('error creating user.');

  return response;
};

const index = async ({ searchText }) => {
  if (searchText) {
    const response = await postRepositorie.search(searchText);

    return response.map((post) => ({
      _id: post.id,
      banner: post.banner,
      title: post.title,
      text: post.text,
      user: post.user,
      likes: post.likes,
      comments: post.comments,
      created_at: post.created_at,
      updated_at: post.updated_at,
    }));
  }

  const response = await postRepositorie.index();
  return response.map((post) => ({
    _id: post.id,
    banner: post.banner,
    title: post.title,
    text: post.text,
    user: post.user,
    likes: post.likes,
    comments: post.comments,
    created_at: post.created_at,
    updated_at: post.updated_at,
  }));
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner) throw new Error('at least one field is requeired');

  const response = await postRepositorie.update(id, { title, text, banner });

  if (!response) throw new Error('error when updating');
  return response;
};

const deleted = async (id) => {
  await postRepositorie.deleted(id);
  return 'post deleted';
};

export default {
  store,
  index,
  update,
  deleted,
};
