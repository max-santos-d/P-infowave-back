import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is a required field.'],
    },
    username: {
      type: String,
      required: [true, 'username is a required field.'],
      unique: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: false,
      validate: {
        validator: function (v) {
          return validator.isURL(v); // Valida se a string é uma URL válida
        },
        message: (props) => `${props.value} is not a valid URL.`,
      },
    },
    login: {
      type: String,
      required: [true, 'login is a required field.'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props) => `${props.value} is not a valid field.`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'The password must be at least 6 characters long'],
      maxlength: [50, 'The password must have a maximum of 50 characters'],
      select: false,
    },
    userType: {
      type: Array,
      required: true,
      default: [
        {
          type: 'user',
          created_at: new Date(),
        },
      ],
    },
    status: {
      type: Boolean,
      default: true,
    },
    tokenVersion: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();

  if (update.password) {
    update.password = bcrypt.hashSync(update.password, 8);
  }

  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
