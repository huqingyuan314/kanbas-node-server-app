import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    points: { type: Number, default: 5 },
    description: String,
    questionType: {
      type: String,
      enum: ["MULTIPLE-CHOICE", "TRUE-FALSE", "FILL-BLANK"],
      default: "MULTIPLE-CHOICE",
    },

    choices: [{
      identifier: { type: String, required: true },
      text: { type: String, required: true }, // Text of the choice
    }],
    correctAnswers: [{ // Store identifiers of correct answers
      type: String,
      required: true
    }],

    trueFalse: { type: Boolean, default: true},

    blank: { type: String, default: "" },

    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);

export default schema;

