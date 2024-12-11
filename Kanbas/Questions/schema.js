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
      identifier: { type: String },
      text: { type: String }, // Text of the choice
    }],
    choicesAnswer: {
      type: String,
    },

    trueFalse: { type: Boolean },
    // trueFalseAnswer: { type: Boolean },

    blanks: [{ type: String }],
    // blanksAnswer: { type: String, default: "" },

    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);

export default schema;

