import axios from "axios";

const BASE_URL = "https://idtaapi.up.railway.app/contact/";
// const BASE_URL = "http://localhost:9000/contact/";

class ContactForm {
  async getAllContacts() {
    return axios
      .get(BASE_URL + "getAllContacts")
      .then((response) => {
        ContactForm.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async saveContact(contaactInfo) {
    return axios
      .post(BASE_URL + "saveContact", contaactInfo)
      .then((response) => {
        ContactForm.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new ContactForm();
