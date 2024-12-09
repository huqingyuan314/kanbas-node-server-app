import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,

    quizType: {
      type: String,
      enum: ["GRADED-QUIZ", "PRACTICE-QUIZ", "GRADED-SURVEY", "UNGRADED-SURVEY"],
      default: "GRADED-QUIZ",
    },
    points: { type: Number, default: 100 },
    assignmentGroup: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
      default: "QUIZZES",
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    howManyAttempts: { type: Number, default: 1 },
    showCorrectAnswers : {
      type: String,
      enum: ["IMMEDIATELY", "LATER", "..."],
      default: "IMMEDIATELY",
    },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime : { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering : { type: Boolean, default: false },

    dueDate: {
      type: Date,
      default: new Date('2024-12-31')
    },
    availableDate: {
      type: Date,
      default: new Date('2024-12-01')
    },
    availableUntilDate: {
      type: Date,
      default: new Date('2025-01-14')
    },

    numOfQuestions: { type: Number, default: 10 },

    published: { type: Boolean, default: false},

    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);

export default schema;

