import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import Users from "../lib/Users";
import MembershipPackage from "../lib/MembershipPackage";
import CoursesAvailable from "../lib/CoursesAvailable";
import { Link } from "react-router-dom";
import QrCode from "../assets/img/phonepay-qr-code.png";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [membershipData, setMembershipData] = useState([]);

  const getUser = async (currentUserPrimaryKey) => {
    Users.getUser(currentUserPrimaryKey)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log("Error logging in:", error);
        alert("Error logging in:" + error);
      });
  };

  const redirectToLogin = () => {
    window.location.replace("login");
  };

  const countMembershipExpire = (date, availableTill) => {
    let dateResult = new Date(date);
    dateResult.setDate(dateResult.getDate() + availableTill);
    let finalExpire = "";

    if (dateResult.getMonth() === 1) {
      finalExpire = finalExpire + "Jan " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 2) {
      finalExpire = finalExpire + "Feb " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 3) {
      finalExpire = finalExpire + "Mar " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 4) {
      finalExpire = finalExpire + "Apr " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 5) {
      finalExpire = finalExpire + "May " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 6) {
      finalExpire = finalExpire + "Jun " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 7) {
      finalExpire = finalExpire + "Jul " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 8) {
      finalExpire = finalExpire + "Aug " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 9) {
      finalExpire = finalExpire + "Sep " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 10) {
      finalExpire = finalExpire + "Oct " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 11) {
      finalExpire = finalExpire + "Nov " + (dateResult.getDate() + 1);
    } else if (dateResult.getMonth() === 12) {
      finalExpire = finalExpire + "Dec " + (dateResult.getDate() + 1);
    } else {
      finalExpire = finalExpire + "None " + (dateResult.getDate() + 1);
    }

    finalExpire = finalExpire + ", " + dateResult.getFullYear();

    return finalExpire;
  };

  const getMembershipPackageInfo = async (userPrimaryKey) => {
    MembershipPackage.getMembershipPackageByUser(userPrimaryKey)
      .then((response) => {
        setMembershipData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
      });
  };

  useEffect(() => {
    setCurrentUser(localStorage.getItem("currentUser"));
    if (
      currentUser === null ||
      currentUser === "" ||
      currentUser === undefined
    ) {
      console.log("please login");
    } else {
      getUser(currentUser);

      const getPurchasedCoursesDetails = async (currentUser) => {
        CoursesAvailable.getPurchasedCoursesByUserPrimaryKey(currentUser)
          .then((response) => {
            setCourseData(response.data);
          })
          .catch((error) => {
            console.log("Error: " + error);
            alert("Error: " + error);
          });
      };

      getPurchasedCoursesDetails(currentUser);
      getMembershipPackageInfo(currentUser);
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <div>
      <Navbar />
      <Container>
        {localStorage.getItem("currentUser") === null ||
        localStorage.getItem("currentUser") === "" ||
        localStorage.getItem("currentUser") === undefined ? (
          redirectToLogin()
        ) : (
          <>
            <section
              className="about pt-5 mt-5 section"
              id="about"
              style={{
                minHeight: "90vh",
              }}
            >
              <div className="row mt-5">
                <h1 className="fw-bold">Welcome, {userInfo.name}</h1>
                {membershipData.date === undefined ||
                membershipData.date === null ||
                membershipData.date === "" ? (
                  <h6>
                    Click <a href="/membership">here</a> to register
                  </h6>
                ) : (
                  <h6>
                    Registration Expires On: &nbsp;
                    {countMembershipExpire(
                      membershipData.date,
                      membershipData.availableTill
                    )}
                  </h6>
                )}
                <button
                  className="btn btn-primary mx-auto mx-md-0 mx-lg-0 mx-xl-0 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ maxWidth: "300px" }}
                >
                  Payment
                </button>
                <hr />
                <h4 className="mt-4 fw-bold">Current Available Courses</h4>
                <div className="row">
                  {courseData.length === 0 ? (
                    <>
                      <h4 className="text-center">
                        You haven't Purchased any Courses
                      </h4>
                      <a
                        className="text-center text-decoration-none"
                        href="/courses"
                      >
                        Click here to Purchase the Courses
                      </a>
                    </>
                  ) : (
                    courseData?.map((courseItem, index) => (
                      <div
                        className="col-md-4 col-lg-4 col-xl-4 my-3"
                        key={index}
                      >
                        <Link
                          to={"/course/" + courseItem.coursePrimaryKey}
                          className="text-decoration-none text-dark"
                        >
                          <div className="card bg-dark">
                            <img
                              src={courseItem.courseImageUrl}
                              className="card-img-top"
                              alt="logo"
                            />
                            <div className="card-body bg-light text-dark">
                              <h4 className="card-title text-danger">
                                Now Available
                              </h4>
                              <h6 className="card-title text-danger">
                                {courseItem.courseStartDate}
                              </h6>
                              <p className="card-text">
                                {courseItem.courseShortDescription}
                              </p>
                              <p className="text-decoration-none text-dark text-center">
                                Book Your Place Now!
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          </>
        )}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Payment
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <img
                  className="img-fluid w-100 mx-auto"
                  src={QrCode}
                  style={{ maxWidth: "300px" }}
                  alt="logo"
                />
                <h6 className="my-3">
                  Please contact the admin adter payment is done!
                </h6>
                <a
                  href="https://api.whatsapp.com/send?phone=8626053944"
                  className="btn btn-success"
                >
                  Contact Admin
                </a>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
