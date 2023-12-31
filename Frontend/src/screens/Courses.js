import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import CoursesAvailable from "../lib/CoursesAvailable";
import { toast } from "react-toastify";
import course1 from "../assets/course1.jpeg";
import course2 from "../assets/course2.jpeg";
import course3 from "../assets/course3.jpeg";

const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getCoursesDetails = async () => {
    CoursesAvailable.getAllCourses()
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
        toast.error("Error: " + error);
      });
  };

  useEffect(() => {
    getCoursesDetails();
  }, []);

  return (
    <div>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          {/* <h3 style={{ textAlign: "center" }}>Coming Soon</h3> */}
          <div style={{ width: "80%", margin: "auto" }}>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                <div
                  className="card card-body bg-light text-dark text-center service-card"
                  style={{
                    maxHeight: "450px",
                  }}
                >
                  <img
                    className="img-fluid mx-auto w-100 mb-3"
                    style={{ maxWidth: "400px", maxHeight: "300px" }}
                    src={course1}
                    alt="logo"
                  />
                  <p className="my-0 text-start" style={{ fontWeight: "bold" }}>
                    Morphology. Anterior and Posterior Waxing Course
                  </p>
                  <p className="my-0 text-start">By August Bruguera</p>
                  <Button
                    onClick={() =>
                      window.location.replace(
                        "https://forms.gle/BZr5cH7ib9dHuvcQ7"
                      )
                    }
                  >
                    Enquiry
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                <div
                  className="card card-body bg-light text-dark text-center service-card"
                  style={{
                    maxHeight: "450px",
                  }}
                >
                  <img
                    className="img-fluid mx-auto w-100 mb-3"
                    src={course2}
                    alt="logo"
                    style={{ maxWidth: "400px", maxHeight: "300px" }}
                  />
                  <p className="my-0 text-start" style={{ fontWeight: "bold" }}>
                    Removable prosthetics Course
                  </p>
                  <p className="my-0 text-start">By August Bruguera</p>
                  <Button
                    onClick={() =>
                      window.location.replace(
                        "https://forms.gle/BZr5cH7ib9dHuvcQ7"
                      )
                    }
                  >
                    Enquiry
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                <div
                  className="card card-body bg-light text-dark text-center service-card"
                  style={{
                    maxHeight: "450px",
                  }}
                >
                  <img
                    className="img-fluid mx-auto w-100 mb-3"
                    src={course3}
                    alt="logo"
                    style={{ maxWidth: "400px", maxHeight: "300px" }}
                  />
                  <p className="my-0 text-start" style={{ fontWeight: "bold" }}>
                    Introduction to Ceramic Course{" "}
                  </p>
                  <p className="my-0 text-start">By August Bruguera</p>
                  <Button
                    onClick={() =>
                      window.location.replace(
                        "https://forms.gle/BZr5cH7ib9dHuvcQ7"
                      )
                    }
                  >
                    Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row mt-5">
            <h1 className="fw-bold">Currently Available Courses</h1>
            <a
            className="text-light text-decoration-none mb-3"
            href="/dashboard"
            >
              Show My Purchased Courses &nbsp;
              <BoxArrowUpRight />
            </a>
            <hr />
            <div className="row">
              {courseData.length === 0 ? (
                <h4>No Course Available</h4>
              ) : (
                courseData.map((courseItem, index) => (
                  <div className="col-md-4 col-lg-4 col-xl-4 my-3" key={index}>
                    <Link
                      // to={"/course/" + index}
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
                          {/* <p className="text-decoration-none text-dark text-center">
                            Book Your Place Now!
                          </p> */}
          {/* <p className="text-decoration-none text-dark text-center">
                            Comming Soon
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div> */}
          {/* </div>  */}
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Courses;
