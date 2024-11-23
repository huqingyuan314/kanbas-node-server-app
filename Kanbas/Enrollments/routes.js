import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {

    app.post("/api/enrollments", (req, res) => {
      const { userId, courseId } = req.body;
      const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
      res.send(enrollment);
    });
  
    app.delete("/api/enrollments", (req, res) => {
      const { userId, courseId } = req.body;
      const status = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
      res.send(status);
    });

}

// test
