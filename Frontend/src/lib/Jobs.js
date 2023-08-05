import axios from "axios";

const BASE_URL = "https://idtaapi.up.railway.app/jobs/";
// const BASE_URL = "http://localhost:9000/jobs/";

class Jobs {
  async getAllJobs() {
    return axios
      .get(BASE_URL + "applications")
      .then((response) => {
        Jobs.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async saveJobs(jobsInfo) {
    return axios
      .post(BASE_URL + "saveJobApplication", jobsInfo)
      .then((response) => {
        Jobs.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new Jobs();
