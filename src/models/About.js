import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'is a required field.'],
    },
    description: {
      type: String,
      required: [true, 'is a required field.'],
    },
    location: {
      type: String,
      required: [true, 'is a required field.'],
    },
    banner: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const About = mongoose.model('About', AboutSchema);

export default About;
