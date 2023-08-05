import axios from "axios";

const USER_BASE_URL = "https://idtaapi.up.railway.app/user/";
// const USER_BASE_URL = "http://localhost:9000/user/";

class Users {
  async login(userInfo) {
    return await axios
      .post(USER_BASE_URL + "login", userInfo)
      .then((response) => {
        Users.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async signup(userInfo) {
    return await axios
      .post(USER_BASE_URL + "signup", userInfo)
      .then((response) => {
        Users.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async saveUserInfo(userInfo) {
    return await axios
      .put(USER_BASE_URL + "saveInfo", userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        Users.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getUser(currentUserPrimaryKey) {
    return await axios
      .get(USER_BASE_URL + "getUser/" + currentUserPrimaryKey)
      .then((response) => {
        Users.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new Users();
