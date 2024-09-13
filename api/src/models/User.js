import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      select: false,
    },
    userType: {
      type: Array,
      require: true,
      default: [
        {
          type: "user",
          created_at: new Date(),
        },
      ],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;
