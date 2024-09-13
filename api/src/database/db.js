import mongoose from "mongoose";

export default () => {
  return new Promise((resolve, regect) => {
    console.log("Conecting to database...");
    mongoose.connect(process.env.MONGO_URL)
      .then(() => resolve(console.log("MongoDB Atlas Conect!")))
      .catch((err) => regect(console.log(err)));
  });
};
