import { Schema } from 'mongoose';

import reportSchema from './repostSchema.js';

const CommentsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      require: true,
    },
    report: [reportSchema],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export default CommentsSchema;
