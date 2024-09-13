import User from "../models/User.js";

const store = (name, username, email, password, avatar) =>
  User.create({ name, username, email, password, avatar });

const index = () => User.find();

const show = (id) => User.findById({ _id: id });

const updated = (id, name, username, email, password, avatar) =>
  User.findByIdAndUpdate(
    { _id: id },
    { name, username, email, password, avatar },
    { new: true }
  );

const deleted = (id) => User.findByIdAndDelete({ _id: id });

export default {
  store,
  index,
  show,
  updated,
  deleted,
};

/* Atualizando um array dentro de outro array

SeuModel:
{
  _id: "573c5ed236c156cc2351d1ea",
  titulo: 'avengers',
  pessoa:
  [
    {
      _id:"573c5ed236c156cc2351d1ee",
      endereco[
          {
            cidade: "sao paulo",
            bairro: "bairro1",
            _id: "573c5ed236c156cc2351d1f0"
          }
      ]
  },
  {
      endereco[
        {
          cidade: "rio de janeiro",
          bairro: "bairro2",
          id: "573c5ed236c156cc2351d1ef"
        }
      ]
    }
  ]
}

atualizando um array dentro de outro array:

SeuModel.findOneAndUpdate(
  {'pessoa.endereco.id': '573c5ed236c156cc2351d1ef'},
  {'$set': {
    'pessoa.$.endereco.$.cidade': 'Nova cidade',
    'pessoa.$.endereco.$.bairro': 'Novo bairro'
  }},
  {new: true}, // <-(opcional) esta opção é para retornar o documento atualizado
  function(err, documentoAtualizado) { ... }
);
*/
