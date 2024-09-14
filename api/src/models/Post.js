import mongoose from "mongoose";

const EventPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    banner: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Array,
    },
    comments: {
      type: Array,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const EventPost = mongoose.model("EventPost", EventPostSchema);

export default EventPost;
