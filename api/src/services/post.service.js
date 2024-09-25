import postRepositorie from "../repositories/post.repositorie.js";

const store = async (user, body) => {
  const { title = "", text = "", banner = "" } = body;

  if (!title || !text || !banner) throw new Error("Required Fields.");

  const response = await postRepositorie.store({
    title,
    text,
    banner,
    user,
  });

  if (!response) throw new Error("Error creating user.");
  return "Successfully created.";
};

const index = async () => {
  return await postRepositorie.index();
};

const update = async (id, body) => {
  const { title, text, banner } = body;

  if (!title && !text && !banner)
    throw new Error("At least one field is requeired.");

  const response = await postRepositorie.update(id, { title, text, banner });

  if (!response) throw new Error("Error when updating.");
  return response;
};

const deleted = async (id) => {
  const response = await postRepositorie.deleted(id);
  return response;
};

export default {
  store,
  index,
  update,
  deleted,
};
