import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import dataValidation from '../validators/dataValidation.js';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'is a required field.'],
      minlength: [6, 'must be at least 6 characters long'],
      maxlength: [50, 'must have a maximum of 50 characters'],
    },
    username: {
      type: String,
      unique: [true, 'information already registered'],
      trim: true,
      required: [true, 'username is a required field.'],
      minlength: [3, 'must be at least 3 characters long'],
      maxlength: [15, 'must have a maximum of 15 characters'],
    },
    avatar: {
      type: String,
      required: false,
      validate: {
        validator: dataValidation.urlValidate,
        message: 'invalid field',
      },
    },
    login: {
      type: String,
      unique: [true, 'information already registered'],
      lowercase: true,
      trim: true,
      //immutable: [true, 'it is not possible to edit this field'],
      required: [true, 'is a required field.'],
      validate: {
        validator: dataValidation.cpfValidate,
        message: 'invalid field',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: [6, 'must be at least 6 characters long'],
      maxlength: [50, 'must have a maximum of 50 characters'],
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

  if (update.login) {
    const verifyLogin = dataValidation.cpfValidate(update.login);

    if (!verifyLogin) throw new Error('invalid field');
  }

  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
