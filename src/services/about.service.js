import aboutRepositorie from '../repositories/about.repositorie.js';
import dataValidation from '../validators/dataValidation.js';

const store = async (body) => {
  const { title = '', text = '', banner = '' } = body;

  if (!title || !text) throw new Error('required Fields');
  if (banner) {
    if (!dataValidation.urlValidate(banner)) throw new Error('invalid URL');
  }

  const response = await aboutRepositorie.store({ title, text, banner });
  return response;
};

const index = async ({ searchText = '' }) => {
  if (searchText) {
    return await aboutRepositorie.search(searchText);
  }

  return await aboutRepositorie.index();
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner) throw new Error('at least one field is requeired');
  if (banner) {
    if (!dataValidation.urlValidate(banner)) throw new Error('invalid URL');
  }

  const reponse = await aboutRepositorie.update(id, { title, text, banner });
  if (!reponse) throw new Error('error when updating');
  return reponse;
};

const deleted = async (id) => {
  await aboutRepositorie.deleted(id);
  return 'deleted';
};

export default {
  store,
  index,
  update,
  deleted,
};
