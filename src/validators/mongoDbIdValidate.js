import mongoose from 'mongoose';

export default function mongoDbIdValidate(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
