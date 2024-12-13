import model from "./model.js";


export const findAttemptsForUser = async (userId, quizId) => {
    return model.find({ user: userId, quiz: quizId });
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
