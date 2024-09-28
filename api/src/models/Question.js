import mongoose from 'mongoose';

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
		comments: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
);

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
