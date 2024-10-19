import mongoose from 'mongoose';

import reportSchema from '../utils/repostSchema.js';
import CommentsSchema from '../utils/commentsSchema.js';

const QuestionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    likes: {
      type: Array,
      required: true,
    },
    comments: [CommentsSchema],
    report: [reportSchema],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
