import mongoose from 'mongoose';
import reportSchema from '../utils/repostSchema.js';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'is a required field.'],
    },
    text: {
      type: String,
      required: [true, 'is a required field.'],
    },
    banner: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'is a required field.'],
    },
    likes: {
      type: Array,
      required: [true, 'is a required field.'],
    },
    comments: {
      type: Array,
      required: [true, 'is a required field.'],
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

const Post = mongoose.model('Post', PostSchema);

export default Post;
