import aboutRepositorie from '../repositories/about.repositorie.js';
import dataValidation from '../validators/dataValidation.js';

const store = async (body) => {
  const { title = '', description = '', location = '', banner = '' } = body;

  if (!title || !description || !location) throw new Error('required Fields');
  if (banner) {
    if (!dataValidation.urlValidate(banner)) throw new Error('invalid URL');
  }

  const response = await aboutRepositorie.store({ title, description, location, banner });
  return response;
};

const index = async ({ searchText = '' }) => {
  if (searchText) {
    return await aboutRepositorie.search(searchText);
  }

  return await aboutRepositorie.index();
};

const update = async ({ _id: id }, body) => {
  const { title, description, location, banner } = body;

  if (!title && !description && !location && !banner) throw new Error('at least one field is requeired');
  if (banner) {
    if (!dataValidation.urlValidate(banner)) throw new Error('invalid URL');
  }

  const reponse = await aboutRepositorie.update(id, { title, description, location, banner });
  if (!reponse) throw new Error('error when updating');
  return reponse;
};

const deleted = async ({ _id: id }) => {
  await aboutRepositorie.deleted(id);
  return 'deleted';
};

export default {
  store,
  index,
  update,
  deleted,
};
