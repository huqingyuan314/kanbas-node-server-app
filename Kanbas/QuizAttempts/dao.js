import model from "./model.js";

export async function findQuizzesForUser(userId) {
 const quizAttempts = await model.find({ user: userId }).populate("quiz");
 return quizAttempts.map((quizAttempt) => quizAttempt.quiz);
}

export async function findUsersForQuiz(quizId) {
 const quizAttempts = await model.find({ quiz: quizId }).populate("user");
 return quizAttempts.map((quizAttempt) => quizAttempt.user);
}


export function attemptUserInQuiz(user, quiz) {
 return model.create({ user, quiz });
}
