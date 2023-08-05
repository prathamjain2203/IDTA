import axios from "axios";

const MEMBERSHIP_PACKAGE_BASE_URL = "https://idtaapi.up.railway.app/membership/";
const MEMBERSHIP_PACKAGE_PURCHASE_BASE_URL =
  "https://idtaapi.up.railway.app/membershipPackagePurchase/";
// const MEMBERSHIP_PACKAGE_BASE_URL = "http://localhost:9000/membership/";
// const MEMBERSHIP_PACKAGE_PURCHASE_BASE_URL =
//   "http://localhost:9000/membershipPackagePurchase/";

class MembershipPackage {
  async getAllMembershipPackages() {
    return await axios
      .get(MEMBERSHIP_PACKAGE_BASE_URL + "membershipPackages")
      .then((response) => {
        MembershipPackage.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getMembershipPackageById(membershipPackagePrimaryKey) {
    return await axios
      .get(
        MEMBERSHIP_PACKAGE_BASE_URL +
          "membershipPackage/" +
          membershipPackagePrimaryKey
      )
      .then((response) => {
        MembershipPackage.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async savePurchasePackage(packageInfo) {
    return await axios
      .post(MEMBERSHIP_PACKAGE_PURCHASE_BASE_URL + "purchase", packageInfo)
      .then((response) => {
        MembershipPackage.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getMembershipPackageByUser(currentUserPrimaryKey) {
    return await axios
      .get(
        MEMBERSHIP_PACKAGE_PURCHASE_BASE_URL +
          "purchase/" +
          currentUserPrimaryKey
      )
      .then((response) => {
        MembershipPackage.current = response.data;
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default new MembershipPackage();
