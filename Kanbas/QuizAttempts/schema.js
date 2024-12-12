import mongoose from "mongoose";

const schema = new mongoose.Schema(
 {
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"   },

   answers: [{
    question: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel" },
    answerText: [String], // an array
    correct: Boolean
  }],
   score: Number,
   attemptDate: { type: Date, default: Date.now },
   isCompleted: { type: Boolean, default: false }, // To ensure answers are not changed post submission
   attemptNumber: { type: Number, default: 1 }, // Track the attempt number

 },
 { collection: "quizAttempts" }
);

export default schema;

