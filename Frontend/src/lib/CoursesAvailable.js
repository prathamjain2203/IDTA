import axios from "axios";

const COURSES_BASE_URL = "https://idtaapi.up.railway.app/courses/";
// const COURSES_BASE_URL = "http://localhost:9000/courses/";

class CoursesAvailable {
  async getAllCourses() {
    return await axios
      .get(COURSES_BASE_URL + "courses")
      .then((response) => {
        CoursesAvailable.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getCourseById(coursePrimaryKey) {
    return await axios
      .get(COURSES_BASE_URL + "course/" + coursePrimaryKey)
      .then((response) => {
        CoursesAvailable.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getCourseByUserId(userPrimaryKey) {
    return await axios
      .get(COURSES_BASE_URL + "purchasesByUser/" + userPrimaryKey)
      .then((response) => {
        CoursesAvailable.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async saveCoursePurchase(courseInfo) {
    return await axios
      .post(COURSES_BASE_URL + "purchase", courseInfo)
      .then((response) => {
        CoursesAvailable.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getPurchasedCoursesByUserPrimaryKey(userPrimaryKey) {
    return axios
      .get(COURSES_BASE_URL + "getCoursePurchases/" + userPrimaryKey)
      .then((response) => {
        CoursesAvailable.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new CoursesAvailable();
