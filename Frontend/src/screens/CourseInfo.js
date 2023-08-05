import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useRazorpay from "react-razorpay";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import CoursesAvailable from "../lib/CoursesAvailable";
import Payment from "../lib/Payment";

const CourseInfo = () => {
  const { courseID } = useParams({});
  const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const [courseSrc, setCourseSrc] = useState([]);
  const [purchased, setPurchased] = useState(false);

  const updatePaymentStatus = async (paymentInfo) => {
    Payment.savePayment(paymentInfo)
      .then((response) => {
        console.log(response.data);
        if (paymentInfo.paymentStatus === "paid") {
          const coursePurchaseInfo = {
            userPrimaryKey: localStorage.getItem("currentUser"),
            coursePrimaryKey: courseSrc.coursePrimaryKey,
          };
          console.log(coursePurchaseInfo);
          saveCoursePurchase(coursePurchaseInfo);
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

  const saveCoursePurchase = async (coursePurchaseInfo) => {
    CoursesAvailable.saveCoursePurchase(coursePurchaseInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
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
        alert("Error: " + error);
      });
  };

  const generateOrder = async () => {
    Payment.generateOrder(
      localStorage.getItem("currentUser"),
      courseSrc.coursePrice
    )
      .then((response) => {
        const paymentResponse = response.data;
        console.log(paymentResponse);
        if (response.data.paymentStatus === "created") {
          var options = {
            key: "rzp_test_MhgWsGqXzdSuX0",
            amount: response.data.amount * 100, // amount in paisa
            currency: "INR",
            name: "IDTA Course: " + courseSrc.courseTitle,
            description: "Course Purchase: " + courseSrc.courseShortDescription,
            image:
              "https://idta.netlify.app/static/media/idta-logo.6a40b0502a7e0ad8f73c.png",
            order_id: response.data.orderId,

            handler: function (response) {
              console.log(response.razorpay_payment_id);
              console.log(response.razorpay_order_id);
              console.log(response.razorpay_signature);
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
              alert("Congrats Payment Successful");
            },

            prefill: {
              name: "",
              email: "",
              contact: "",
            },
            notes: {
              address: "IDTA Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };

          var rzp1 = new Razorpay(options);

          rzp1.on("payment.failed", function (response) {
            console.log(response.error.code);
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.metadata.payment_id);
            const paymentInfo = {
              id: paymentResponse.id,
              amount: paymentResponse.amount,
              currency: paymentResponse.currency,
              receipt: paymentResponse.receipt,
              orderId: paymentResponse.orderId,
              userPrimaryKey: paymentResponse.userPrimaryKey,
              paymentStatus: "failed",
            };
            updatePaymentStatus(paymentInfo);
            alert("Payment Failure");
          });

          rzp1.open();
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

  const purchaseCourse = () => {
    if (
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === null ||
      localStorage.getItem("currentUser") === undefined
    ) {
      alert("Please Login to Continue");
      navigate("/login");
    } else {
      generateOrder();
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
          alert("Error: " + error);
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
