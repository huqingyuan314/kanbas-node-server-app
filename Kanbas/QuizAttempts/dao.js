import model from "./model.js";

// export async function findLatestQuizForUser(userId) {
//  const quizAttempts = await model.find({ user: userId }).populate("quiz");
//  return quizAttempts.map((quizAttempt) => quizAttempt.quiz);
// }

export const findLatestAttemptForUser = async (userId, quizId) => {
    return model.findOne({ user: userId, quiz: quizId })
                            .sort({ attemptDate: -1 })
                            .exec();
};


export async function findUsersForQuiz(quizId) {
 const quizAttempts = await model.find({ quiz: quizId }).populate("user");
 return quizAttempts.map((quizAttempt) => quizAttempt.user);
}


export function attemptUserInQuiz(user, quiz, answers, score, isCompleted, attemptNumber) {
    return model.create({
      user,
      quiz,
      answers,
      score,
      isCompleted,
      attemptNumber,
    });
  }
