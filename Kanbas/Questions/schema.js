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
      type: String,
    }],
    choicesAnswer: {
      type: String,
    },

    trueFalse: { type: Boolean },

    blanks: [{ type: String }],

    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);

export default schema;

