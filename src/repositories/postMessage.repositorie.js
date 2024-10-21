import Post from '../models/Post.js';

const store = (post, user, text) =>
  Post.findByIdAndUpdate(post, { $push: { comments: { user: user, text: text } } }, { new: true })
    .populate('user', 'username avatar status')
    .populate({
      path: 'comments.user',
      select: 'username avatar status',
    })
    .exec();

const index = (post) =>
  Post.findById({ _id: post })
    .populate('user', 'username avatar status')
    .populate({
      path: 'comments.user',
      select: 'username avatar status',
    })
    .sort({ updated_at: -1 })
    .exec();

const show = (postId, commentId) =>
  Post.findOne(
    { _id: postId, 'comments._id': commentId }, // Busca pelo post e pelo comentário
    { 'comments.$': 1 } // Retorna apenas o comentário correspondente
  )
    .populate('comments.user', 'username status') // Popula o usuário do comentário, se necessário
    .exec();

const update = (comment, commentId, user, post) =>
  Post.findOneAndUpdate(
    { _id: post },
    { $set: { 'comments.$[comment].text': comment } },
    {
      new: true,
      arrayFilters: [{ 'comment._id': commentId, 'comment.user': user }], // Adiciona o filtro para o array
    }
  )
    .populate('user', 'username avatar status')
    .populate({
      path: 'comments.user',
      select: 'username avatar status',
    })
    .exec();

const deleted = (postId, commentId, userId) =>
  Post.findOneAndUpdate(
    { _id: postId, 'comments.user': userId },
    { $pull: { comments: { _id: commentId, user: userId } } },
    { new: true }
  ).exec();

export default {
  store,
  index,
  show,
  update,
  deleted,
};
