import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import useRazorpay from "react-razorpay";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import MembershipPackage from "../lib/MembershipPackage";
import Payment from "../lib/Payment";
import Users from "../lib/Users";

const MemberForm = () => {
  const { membershipPackagePrimaryKey } = useParams({});
  // const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const [membershipPlan, setMembershipPlan] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const [telNumber, setTelNumber] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [labEmail, setLabEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [registered, setRegistered] = useState("true");
  const [labEstablishedDate, setLabEstablishedDate] = useState("");
  const [ownerFullName, setOwnerFullName] = useState("");
  const [workType, setWorkType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [staffProfile, setStaffProfile] = useState("");
  const [staffProfileTotal, setStaffProfileTotal] = useState("");
  const [registeredTechnician, setRegisteredTechnician] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");

  const updatePaymentStatus = async (paymentInfo) => {
    Payment.savePayment(paymentInfo)
      .then((response) => {
        if (paymentInfo.paymentStatus === "paid") {
          // membership purchase
          var todayDate = new Date();
          var dd = String(todayDate.getDate()).padStart(2, "0");
          var mm = String(todayDate.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = todayDate.getFullYear();

          todayDate = mm + "-" + dd + "-" + yyyy;

          const membershipPurchaseInfo = {
            userPrimaryKey: localStorage.getItem("currentUser"),
            membershipPackagePrimaryKey:
              membershipPlan.membershipPackagePrimaryKey,
            date: todayDate,
            availableTill: membershipPlan.availableTill,
          };
          saveMembershipPurchaseInfo(membershipPurchaseInfo);
        } else {
          console.log("Payment Failed");
          alert("Payment Failed");
        }
      })
      .catch((error) => {
        console.log("Error:" + error);
        alert("Error:" + error);
      });
  };

  const saveMembershipPurchaseInfo = async (membershipPurchaseInfo) => {
    MembershipPackage.savePurchasePackage(membershipPurchaseInfo)
      .then((response) => {
        const userInfo = {
          id: currentUser.id,
          userPrimaryKey: currentUser.userPrimaryKey,
          name: currentUser.name,
          email: currentUser.email,
          password: currentUser.password,
          telNumber: telNumber,
          faxNumber: faxNumber,
          labEmail: labEmail,
          website: website,
          registered: registered,
          labEstablishedDate: labEstablishedDate,
          ownerFullName: ownerFullName,
          workType: workType,
          serviceType: serviceType,
          staffProfile: staffProfile,
          staffProfileTotal: staffProfileTotal,
          registeredTechnician: registeredTechnician,
          registrationNumber: registrationNumber,
          registrationDate: registrationDate,
        };
        saveuserInfo(userInfo);
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
      });
  };

  const saveuserInfo = async (userInfo) => {
    console.log(userInfo);
    userInfo = JSON.stringify(userInfo);
    Users.saveUserInfo(userInfo)
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
      });
  };

  const generateOrder = async () => {
    Payment.generateOrder(
      localStorage.getItem("currentUser"),
      membershipPlan.membershipPrice
    )
      .then((response) => {
        const paymentResponse = response.data;
        if (response.data.paymentStatus === "created") {
          // var options = {
          //   key: "rzp_test_MhgWsGqXzdSuX0",
          //   amount: response.data.amount * 100, // amount in paisa
          //   currency: "INR",
          //   name: "IDTA Registration: " + membershipPlan.membershipTitle,
          //   description:
          //     "Registration Purchase: " + membershipPlan.membershipDescription,
          //   image:
          //     "https://idta.netlify.app/static/media/idta-logo.6a40b0502a7e0ad8f73c.png",
          //   order_id: response.data.orderId,

          //   handler: function (response) {
          //     console.log(response.razorpay_payment_id);
          //     console.log(response.razorpay_order_id);
          //     console.log(response.razorpay_signature);
          const paymentInfo = {
            id: paymentResponse.id,
            amount: paymentResponse.amount,
            currency: paymentResponse.currency,
            receipt: paymentResponse.receipt,
            orderId: paymentResponse.orderId,
            userPrimaryKey: paymentResponse.userPrimaryKey,
            paymentStatus: "paid",
          };
          updatePaymentStatus(paymentInfo);
          //     alert("Congrats Payment Successful");
          //   },

          //   prefill: {
          //     name: "",
          //     email: "",
          //     contact: "",
          //   },
          //   notes: {
          //     address: "IDTA Corporate Office",
          //   },
          //   theme: {
          //     color: "#3399cc",
          //   },
          // };

          // var rzp1 = new Razorpay(options);

          // rzp1.on("payment.failed", function (response) {
          //   console.log(response.error.code);
          //   console.log(response.error.description);
          //   console.log(response.error.source);
          //   console.log(response.error.step);
          //   console.log(response.error.reason);
          //   console.log(response.error.metadata.order_id);
          //   console.log(response.error.metadata.payment_id);
          //   const paymentInfo = {
          //     id: paymentResponse.id,
          //     amount: paymentResponse.amount,
          //     currency: paymentResponse.currency,
          //     receipt: paymentResponse.receipt,
          //     orderId: paymentResponse.orderId,
          //     userPrimaryKey: paymentResponse.userPrimaryKey,
          //     paymentStatus: "failed",
          //   };
          //   updatePaymentStatus(paymentInfo);
          //   alert("Payment Failure");
          // });

          // rzp1.open();
        } else {
          console.log("Order is Not Created");
          const paymentInfo = {
            id: response.data.id,
            amount: response.data.amount,
            currency: response.data.currency,
            receipt: response.data.receipt,
            orderId: response.data.orderId,
            userPrimaryKey: response.data.userPrimaryKey,
            paymentStatus: "failed",
          };
          updatePaymentStatus(paymentInfo);
          alert("Order is Not Created");
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
      });
  };

  const payment = () => {
    if (
      telNumber === "" ||
      telNumber === null ||
      faxNumber === "" ||
      faxNumber === null ||
      labEmail === "" ||
      labEmail === null ||
      website === "" ||
      website === null ||
      registered === "" ||
      registered === null ||
      labEstablishedDate === "" ||
      labEstablishedDate === null ||
      ownerFullName === "" ||
      ownerFullName === null ||
      workType === "" ||
      workType === null ||
      serviceType === "" ||
      serviceType === null ||
      staffProfile === "" ||
      staffProfile === null ||
      staffProfileTotal === "" ||
      staffProfileTotal === null ||
      registeredTechnician === "" ||
      registeredTechnician === null ||
      registrationNumber === "" ||
      registrationNumber === null ||
      registrationDate === "" ||
      registrationDate === null
    ) {
      console.log(telNumber);
      console.log(faxNumber);
      console.log(labEmail);
      console.log(website);
      console.log(registered);
      console.log(labEstablishedDate);
      console.log(ownerFullName);
      console.log(workType);
      console.log(serviceType);
      console.log(staffProfile);
      console.log(staffProfileTotal);
      console.log(registeredTechnician);
      console.log(registrationNumber);
      console.log(registrationDate);
      alert("Please fill the input fields");
    } else {
      generateOrder();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(membershipPackagePrimaryKey);
    const getMembershipPackages = async () => {
      MembershipPackage.getMembershipPackageById(membershipPackagePrimaryKey)
        .then((response) => {
          setMembershipPlan(response.data);
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Error:" + error);
        });
    };

    const getCurrentUser = async () => {
      Users.getUser(localStorage.getItem("currentUser"))
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Error:" + error);
        });
    };

    getMembershipPackages();
    getCurrentUser();
  }, [membershipPackagePrimaryKey]);

  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
            <h1 className="fw-bold">Purchase Registration</h1>
            <hr />
            <div className="card card-body bg-dark mb-3">
              <h5>Plan: {membershipPlan.membershipTitle}/-</h5>
              <h5>Description: {membershipPlan.membershipDescription}</h5>
              <h5>Price: {membershipPlan.membershipPrice}/-</h5>
            </div>
            <hr />
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h6>Personal Details:</h6>
                  <div className="row mb-3">
                    <div className="col-3">
                      <select className="form-select bg-transparent text-light">
                        <option
                          defaultValue
                          disabled
                          style={{ background: "#000000" }}
                        >
                          Title
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Implants"
                        >
                          Mr
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Mouthguards Crown"
                        >
                          Mrs
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Mouthguards Crown"
                        >
                          Miss
                        </option>
                      </select>
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control bg-transparent text-light shadow-none p-2"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Lab./Organization Name"
                    />
                  </div>
                  <h6>Contact Details:</h6>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Telephone Number"
                      onChange={(e) => setTelNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Fax Number"
                      onChange={(e) => setFaxNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Email"
                      onChange={(e) => setLabEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Website"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">
                      Are you registered with the IDTA?
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="yes-registered"
                      name="registered"
                      value={"true"}
                      onChange={(e) => setRegistered("true")}
                      checked={registered === "true"}
                    />
                    <label htmlFor="yes-registered">YES</label> &nbsp;&nbsp;
                    <input
                      type="radio"
                      id="not-registered"
                      name="registered"
                      value={"false"}
                      onChange={(e) => setRegistered("false")}
                      checked={registered === "false"}
                    />
                    <label htmlFor="not-registered">NO</label>
                  </div>
                  <h6>Lookup Address:</h6>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Address 1"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Address 2"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Town/city"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Pin code"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h6>About you:</h6>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Full Name of Laboratory Owner(s)"
                      onChange={(e) => setOwnerFullName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Dental Technician"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Master Dental Technician"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Dental Laboratory Assistant"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Student Dental Technician"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Trade Professional"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">
                      What services do you offer in your lab ?
                    </label>
                    <div className="mb-3">
                      <select
                        className="form-select bg-transparent text-light"
                        onChange={(e) => setWorkType(e.target.value)}
                      >
                        <option style={{ background: "#000000" }}>
                          Type of Work Carried Out On Premises
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Chromes & Bridge"
                        >
                          Chromes & Bridge
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Implants"
                        >
                          Implants
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Orthodontics"
                        >
                          Orthodontics
                        </option>
                        <option
                          style={{ background: "#000000" }}
                          value="Acrylic"
                        >
                          Acrylic
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2">Date Lab Established:</label>
                    <input
                      type="date"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      onChange={(e) => setLabEstablishedDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select bg-transparent text-light"
                      onChange={(e) => setServiceType(e.target.value)}
                    >
                      <option style={{ background: "#000000" }}>
                        Types of Services
                      </option>
                      <option
                        style={{ background: "#000000" }}
                        value="ECHS Only"
                      >
                        ECHS Only
                      </option>
                      <option
                        style={{ background: "#000000" }}
                        value="Private Only"
                      >
                        Private Only
                      </option>
                      <option style={{ background: "#000000" }} value="Mix">
                        Mix
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select bg-transparent text-light"
                      onChange={(e) => setStaffProfile(e.target.value)}
                    >
                      <option style={{ background: "#000000" }}>
                        Staff Profile Please Specify the Number of
                      </option>
                      <option
                        style={{ background: "#000000" }}
                        value="Lab Assistant(s)"
                      >
                        Lab Assistant
                      </option>
                      <option style={{ background: "#000000" }} value="Trainee">
                        Trainee
                      </option>
                      <option
                        style={{ background: "#000000" }}
                        value="Others (Drivers, Admin Staff etc.)"
                      >
                        Others {"("}Drivers, Admin Staff etc.{")"}
                      </option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Total"
                      onChange={(e) => setStaffProfileTotal(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Name of Registered Technician(s)"
                      onChange={(e) => setRegisteredTechnician(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Registration Number"
                      onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Registration Date:</label>
                    <input
                      type="date"
                      className="form-control bg-transparent text-light shadow-none p-2"
                      placeholder="Registration Date"
                      onChange={(e) => setRegistrationDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input id="terms" type={"checkbox"} />
                    <label for="terms" className="mb-2">
                      Are you registered with the IDTA?
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary text-decoration-none"
              onClick={() => payment()}
            >
              Register
            </button>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default MemberForm;
