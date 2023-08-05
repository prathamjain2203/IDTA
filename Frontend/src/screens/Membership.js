import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MembershipLogo from "../assets/img/membership.png";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import MembershipPackage from "../lib/MembershipPackage";

const Membership = () => {
  const [membershipData, setMembershipData] = useState();
  const [membershipPurchased, setMembershipPurchased] = useState(false);
  const navigate = useNavigate();

  const navigateMembership = (membershipPackagePrimaryKey) => {
    if (
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === null ||
      localStorage.getItem("currentUser") === undefined
    ) {
      alert("Please Login to Continue");
      navigate("/login");
    } else {
      if (membershipPurchased) {
        alert("You already have purchased the registration");
      } else {
        navigate("/membershipform/" + membershipPackagePrimaryKey);
      }
    }
  };

  const getMembershipPackages = async () => {
    MembershipPackage.getAllMembershipPackages()
      .then((response) => {
        setMembershipData(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Error:" + error);
      });
  };

  const checkMembershipPackages = async (userPrimaryKey) => {
    MembershipPackage.getMembershipPackageByUser(userPrimaryKey)
      .then((response) => {
        console.log(response.data);
        if (response.data === "" || response.data === null) {
          setMembershipPurchased(false);
        } else {
          setMembershipPurchased(true);
        }
      })
      .catch((error) => {
        setMembershipPurchased(false);
        console.log("Error: " + error);
        alert("Error: " + error);
      });
  };

  useEffect(() => {
    getMembershipPackages();
    checkMembershipPackages(localStorage.getItem("currentUser"));
  }, []);

  return (
    <div>
      <Navbar />
      <section className="pt-4 section pb-0" id="about">
        <div className="row mt-5 m-0">
          <div
            className="col-md-4 col-lg-4 col-xl-4 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto"
              src={MembershipLogo}
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "330px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className="col-md-8 col-lg-8 col-xl-8 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold text-success">Registration</h1>
              <p className="">
                The IDTA represent the best Interest of all Indian Dental
                technicians with one voice whether qualified or in training and
                providing life long learning opportunities, advice, guidance and
                Support to our members. We keep members up to date on all the
                important Information.our management team regularly meet and
                continually influence and raise the profile of dental technology
                with decision makers including regulators, educational provider
                and various group and we continue to be actively Involved In
                various National initiatives, consultations, Campaigns and
                activities.
              </p>
            </div>
          </div>
          <div
            className="col-12 my-0 p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#ffffff",
            }}
          >
            <h1 className="fw-bold text-dark my-3">Registration Packages</h1>
            <div className="row">
              {membershipData?.map((membershipItem, index) => (
                <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0" key={index}>
                  <button
                    className="btn text-decoration-none text-light p-0 w-100"
                    onClick={() => {
                      navigateMembership(
                        membershipItem.membershipPackagePrimaryKey
                      );
                    }}
                  >
                    <div
                      className="card card-body"
                      style={{
                        background:
                          membershipItem.id === 1
                            ? "#102847"
                            : membershipItem.id === 2
                            ? "#69A29D"
                            : membershipItem.id === 3
                            ? "#52555E"
                            : membershipItem.id === 4
                            ? "#C5955C"
                            : "#090909",
                        minHeight: "170px",
                        borderRadius: "0",
                      }}
                    >
                      <div className="my-0 d-flex align-items-center">
                        <div className="text-start">
                          <h4 className="text-light">
                            {membershipItem.membershipTitle}
                          </h4>
                          <h6 className="text-light">
                            Rs {membershipItem.membershipPrice} + Inclusive GST
                          </h6>
                          <p className="my-0">
                            {membershipItem.membershipDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0 d-block d-md-none d-lg-none d-xl-none"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src="https://media.npr.org/assets/img/2020/03/04/accept_terms_wide-d65e4c6e4c775f09d49a6bf8b299cebe037f4459-s800-c85.jpg"
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container mb-0 pb-0 mt-3">
              <div className="text-light mb-0 pb-0">
                <h1>Registration Benefits</h1>
                <ol>
                  <li>Members gets discounts on Dental Laboratory Products.</li>
                  <li>
                    Members gets discounts on CPD Courses, Hands on, and Online
                    Classes.
                  </li>
                  <li>Members get discounts on health insurances.</li>
                </ol>
                <h1>Terms and Conditions</h1>
                <ol className="mb-0 pb-0">
                  <li>
                    All members of the I.D.T.A agree to the I.D.T.A Registration
                    Terms and Conditions.
                  </li>
                  <li>
                  Registration is only open to individuals based in india only.
                  </li>
                  <li>
                  Registration payments are non-refundable. The subscription is
                    valid for 12 months from the date of registration. Members
                    can manage their registration subscription including annual
                    fee payments in their registration account by logging in.
                  </li>
                  <li>
                    Professional indemnity insurance, exclusive to I.D.T.A.
                    members only, is an optional opportunity to apply for
                    professional indemnity at a special discounted premium rate
                    through a third-party partner. The indemnity is not included
                    in the price of the I.D.T.A registration. If your I.D.T.A.
                    registration expires your professional indemnity insurance
                    will no longer be valid and a claim cannot be made.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0 d-none d-md-block d-lg-block d-xl-block"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src="https://media.npr.org/assets/img/2020/03/04/accept_terms_wide-d65e4c6e4c775f09d49a6bf8b299cebe037f4459-s800-c85.jpg"
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Membership;
