import mongoose from "mongoose";

const schema = new mongoose.Schema(
 {
   attemptId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizAttemptModel" },
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"   },

   answers: [{
    question: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel" },
    answerText: [String], // an array
    correct: Boolean
  }],
   score: { type: Number, default: 0 },
   attemptDate: { type: Date, default: Date.now },
   isCompleted: { type: Boolean, default: false }, // To ensure answers are not changed post submission
   attemptNumber: { type: Number, default: 1 }, // Track the attempt number

 },
 { collection: "quizAttempts" }
);

export default schema;

