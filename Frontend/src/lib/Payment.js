import axios from "axios";

const PAYMENT_BASE_URL = "https://idtaapi.up.railway.app/payment/";
// const PAYMENT_BASE_URL = "http://localhost:9000/payment/";

class Payment {
  async generateOrder(userPrimaryKey, amount) {
    return await axios
      .post(PAYMENT_BASE_URL + "generateOrder/" + userPrimaryKey + "/" + amount)
      .then((response) => {
        Payment.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async savePayment(paymentInfo) {
    return await axios
      .post(PAYMENT_BASE_URL + "savePayment", paymentInfo)
      .then((response) => {
        Payment.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getPaymentByOrderId(orderId) {
    return await axios
      .get(PAYMENT_BASE_URL + "getPaymentByOrderId/" + orderId)
      .then((response) => {
        Payment.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new Payment();
