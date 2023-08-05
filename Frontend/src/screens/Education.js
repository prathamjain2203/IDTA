import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import Img5 from "../assets/img/img (5).jpg";

const Education = () => {
  return (
    <div>
      <Navbar />
      <section
        className="hero pt-4 section pb-0 mb-0"
        id="hero"
        // style={{ minHeight: "80vh" }}
      >
        <div className="row mt-5 m-0 pb-0 mb-0">
          <div
            className="col-md-6 col-lg-6 col-xl-6 mb-0 mb-md-0 mb-lg-0 mb-xl-0 d-flex align-items-center p-0"
            style={{
              background: "#090909",
            }}
          >
            <div className="h-100 w-100 p-2 p-md-5 p-lg-5 p-xl-5 d-flex align-items-center">
              <div className="container py-5">
                <h1 className="fw-bold">Education Benefits</h1>
                <ol
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  <li>
                    IDTA is your resources to education and training from our
                    annual In depth convention and hands on workshops to
                    lectures and convenient online learning sessions.
                  </li>
                  <li>
                    IDTA gives you access to the brightest minds in the
                    profession. You can advertise jobs or your own skills via
                    the IDTA job advertising facility.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                  <div
                    className="card card-body bg-light text-dark text-center service-card"
                    style={{
                      minHeight: "400px",
                    }}
                  >
                    <img
                      className="img-fluid mx-auto w-100 mb-3"
                      src="https://www.asmirt.org/asmirt_core/wp-content/uploads/2020/07/96-original.png"
                      alt="logo"
                    />
                    <p className="my-0 text-start">
                      CPD can involve eighter formal and structured or informal
                      and self-directed learning.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                  <div
                    className="card card-body bg-light text-dark text-center service-card"
                    style={{
                      minHeight: "400px",
                    }}
                  >
                    <img
                      className="img-fluid mx-auto w-100 mb-3"
                      src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                      alt="logo"
                    />
                    <p className="my-0 text-start">
                      Verinable CPD is a learning and development program that's
                      been approved by the IDTA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src={Img5}
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
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#ffffff",
            }}
          >
            <div className="container py-5 text-dark">
              <h1 className="fw-bold">Continuing Professional Development</h1>
              <ol className="mt-3">
                <li>
                  CPD can involve either formal and structured or informal and
                  self-directed learning.
                </li>
                <li>
                  Verifiable CPD is a learning and development programme thats
                  been approved by the IDTA.
                </li>
                <li>
                  The Organisers of the learning programme or course will
                  generally seek this approval, and provide you with a
                  verification number and a Certificate of Attendance.
                </li>
                <li>
                  Learning and development programme providers Eg. Dental firms,
                  dental supply companies, advertise their courses as being CPD
                  verified, however the number of hours should be allocated and
                  confirmed prior to undertaking the course.
                </li>
                <li>
                  Following the learning programme or course, You will receive a
                  Certificate of Attendance which contains the CPD number.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Education;
