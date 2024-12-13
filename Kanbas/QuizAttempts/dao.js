import model from "./model.js";


export const findAttemptsForUser = async (userId, quizId) => {
    return model.find({ user: userId, quiz: quizId });
};


export const getLatestAttemptNumber = async (userId, quizId) => {
    const latestAttempt = await model.findOne({ user: userId, quiz: quizId })
                                     .sort({ attemptNumber: -1 }) // Sort by attemptNumber descending
                                     .select('attemptNumber') // Select only the attemptNumber field
                                     .exec(); // Execute the query
    return latestAttempt ? latestAttempt.attemptNumber : 0; // Return the attempt number, or 0 if no attempts are found
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
