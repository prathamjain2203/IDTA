import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import useRazorpay from "react-razorpay";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import { toast } from "react-toastify";
import CoursesAvailable from "../lib/CoursesAvailable";
// import Payment from "../lib/Payment";
const PAYMENT_BASE_URL =
  "https://springboot-java-production-daec.up.railway.app/payment";
// const PAYMENT_BASE_URL = "http://localhost:9000/payment";

const CourseInfo = ({ stripePromise }) => {
  const { courseID } = useParams({});
  // const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const [courseSrc, setCourseSrc] = useState([]);
  const [purchased, setPurchased] = useState(false);

  const [searchParams] = useSearchParams();
  const paymentSuccess = searchParams.get("success");
  const paymentId = searchParams.get("pid");
  useEffect(() => {
    if (paymentSuccess && paymentId) {
      fetch(`${PAYMENT_BASE_URL}/${paymentId}/status`, {
        method: "PUT",
      })
        .then((response) => {
          const data = response.json();
          return data;
        })
        .then((data) => {
          console.log(data);
          toast.success(data?.paymentStatus);
          const coursePurchaseInfo = {
            userPrimaryKey: localStorage.getItem("currentUser"),
            coursePrimaryKey: courseSrc.coursePrimaryKey,
          };
          if (
            localStorage.getItem("currentUser") &&
            courseSrc?.coursePrimaryKey
          ) {
            saveCoursePurchase(coursePurchaseInfo);
            navigate(`/course/${courseSrc?.coursePrimaryKey}`);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [courseSrc?.coursePrimaryKey]);

  const saveCoursePurchase = async (coursePurchaseInfo) => {
    CoursesAvailable.saveCoursePurchase(coursePurchaseInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
        toast.error("Error: " + error);
      });
  };

  const getCourseByUserId = async (userPrimaryKey) => {
    CoursesAvailable.getCourseByUserId(userPrimaryKey)
      .then((response) => {
        // eslint-disable-next-line
        response.data?.map((coursesPurchased) => {
          if (coursesPurchased.coursePrimaryKey === courseID) {
            setPurchased(true);
          }
        });
      })
      .catch((error) => {
        console.log("Error: " + error);
        toast.error("Error: " + error);
      });
  };

  const purchaseCourse = () => {
    if (
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === null ||
      localStorage.getItem("currentUser") === undefined
    ) {
      toast.error("Please Login to Continue");
      navigate("/login");
    } else {
      window.open(
        `${PAYMENT_BASE_URL}/course/create-session/${localStorage.getItem(
          "currentUser"
        )}/${courseSrc?.coursePrimaryKey}`,
        "_self"
      );
    }
  };

  useEffect(() => {
    const getCourseDetail = async () => {
      CoursesAvailable.getCourseById(courseID)
        .then((response) => {
          setCourseSrc(response.data);
        })
        .catch((error) => {
          console.log("Error: " + error);
          toast.error("Error: " + error);
        });
    };

    getCourseDetail();
    getCourseByUserId(localStorage.getItem("currentUser"));
    // eslint-disable-next-line
  }, [courseID]);

  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
            <h1 className="fw-bold">{courseSrc.courseTitle}</h1>
            <h4>{courseSrc.courseStartDate}</h4>
            <h4>Price: {courseSrc.coursePrice}/-</h4>
            <p>{courseSrc.courseShortDescription}</p>
            <hr />
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6">
                <img
                  className="img-fluid w-100"
                  src={courseSrc.courseImageUrl}
                  alt="logo"
                  style={{
                    maxWidth: "700px",
                  }}
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h4 className="fw-bold">Description,</h4>
                <p>{courseSrc.courseDescription}</p>
                {purchased ? (
                  <button className="btn btn-success mb-3">
                    Wow!! You already have Purchased this Course
                  </button>
                ) : (
                  <button
                    className="btn btn-success mb-3"
                    onClick={() => purchaseCourse()}
                  >
                    Purchase Now!
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default CourseInfo;
