import User from "../models/User.js";

const store = (name, username, email, password, avatar) =>
  User.create({ name, username, email, password, avatar });

const index = () => User.find();

const show = (id) => User.findById({ _id: id });

const showPassword = (id) => User.findById({ _id: id }).select("+password");

const updated = (id, name, username, email, password, avatar) =>
  User.findByIdAndUpdate(
    { _id: id },
    { name, username, email, password, avatar },
    { new: true }
  );

const deleted = (id) => User.findByIdAndDelete({ _id: id });

// Type User funcitons
const indexType = (top) => User.find({ "userType.type": { $in: [top] } });

const promotionOrg = (id) =>
  User.findOneAndUpdate(
    { _id: id, "userType.type": { $nin: ["organization"] } },
    { $push: { userType: { type: "organization", created_at: new Date() } } }
  );

const promotionAdm = (id) =>
  User.findOneAndUpdate(
    { _id: id, "userType.type": { $nin: ["administration"] } },
    { $push: { userType: { type: "administration", created_at: new Date() } } }
  );

const downgradeOrg = (id) =>
  User.findOneAndUpdate(
    { _id: id },
    { $pull: { userType: { type: "organization" } } }
  );

const downgradeAdm = (id) =>
  User.findOneAndUpdate(
    { _id: id },
    { $pull: { userType: { type: "administration" } } }
  );

export default {
  store,
  index,
  show,
  showPassword,
  updated,
  deleted,

  indexType,
  promotionOrg,
  promotionAdm,
  downgradeOrg,
  downgradeAdm,
};

/* Atualizar um array dentro de outro array

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
