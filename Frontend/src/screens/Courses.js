import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import { Link } from "react-router-dom";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import CoursesAvailable from "../lib/CoursesAvailable";

const Courses = () => {
  const [courseData, setCourseData] = useState([]);

  const getCoursesDetails = async () => {
    CoursesAvailable.getAllCourses()
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
      });
  };

  useEffect(() => {
    getCoursesDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
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
                      // to={"/course/" + courseItem.coursePrimaryKey}
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
                          <p className="text-decoration-none text-dark text-center">
                            Comming Soon
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
      </Container>
      <Footer />
    </div>
  );
};

export default Courses;
