import React, { useEffect, useState } from "react";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";
import ContactForm from "../lib/ContactForm";
import Img1 from "../assets/img/img (1).jpg";
import homelast from "../assets/img/homelast.webp";
import Img2 from "../assets/img/img (2).jpg";
import { toast } from "react-toastify";
import StaticExample from "../components/commons/Modal/Modal";
import { ScrollRestoration } from "react-router-dom";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.png";
import aboutIdta from "../assets/aboutidta.png";

const Homepage = () => {
  const [labName, setLabName] = useState("");
  const [number, setNumber] = useState("");
  const [labEmail, setLabEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [ownerFullName, setOwnerFullName] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const saveContactInfo = async (contactInfo) => {
    ContactForm.saveContact(contactInfo)
      .then((response) => {
        console.log(response.data);
        toast.error("Contact Info Saved");
      })
      .catch((error) => {
        console.log("Error: " + error);
        toast.error("Error: " + error);
      });
  };

  const saveContactForm = () => {
    if (
      labName === "" ||
      labName === null ||
      number === "" ||
      number === null ||
      labEmail === "" ||
      labEmail === null ||
      website === "" ||
      website === null ||
      ownerFullName === "" ||
      ownerFullName === null
    ) {
      toast.error("Please fill the input fields");
    } else {
      const contactInfo = {
        labName: labName,
        number: number,
        email: labEmail,
        website: website,
        ownerFullName: ownerFullName,
      };
      saveContactInfo(contactInfo);
    }
  };

  return (
    <div>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
      <Navbar />
      <StaticExample />
      <section
        className="hero pt-4 section pb-0 mb-0"
        id="hero"
        // style={{ minHeight: "80vh" }}
      >
        <div className=" mt-5 m-0 pb-0 mb-0">
          <div className="col-md-6 col-lg-6 col-xl-6 mb-0 mb-md-0 mb-lg-0 mb-xl-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5 w-100">
            <div
              id="carouselExampleControls"
              className="carousel slide w-100 h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner w-100 h-100">
                <div
                  className="carousel-item active w-100 h-100"
                  style={{
                    backgroundImage: `url(${banner1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="text-center h-100 w-100 p-2 p-md-5 p-lg-5 p-xl-5 d-flex align-items-center"
                    style={{ background: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="container py-5 d-flex align-items-center justify-content-center">
                      <p
                        className="mt-3"
                        style={{
                          fontSize: "22px",
                        }}
                      >
                        {/* SAMPLE TEST 2 */}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item w-100 h-100"
                  style={{
                    backgroundImage: `url(${banner4})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="text-center h-100 w-100 p-2 p-md-5 p-lg-5 p-xl-5 d-flex align-items-center"
                    style={{ background: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="container py-5 d-flex align-items-center justify-content-center">
                      <p
                        className="mt-3"
                        style={{
                          fontSize: "22px",
                        }}
                      >
                        {/* SAMPLE TEST 2 */}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item w-100 h-100"
                  style={{
                    backgroundImage: `url(${banner3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="text-center h-100 w-100 p-2 p-md-5 p-lg-5 p-xl-5 d-flex align-items-center"
                    style={{ background: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="container py-5 d-flex align-items-center justify-content-center">
                      <p
                        className="mt-3"
                        style={{
                          fontSize: "22px",
                        }}
                      >
                        {/* SAMPLE TEST 2 */}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item w-100 h-100"
                  style={{
                    backgroundImage: `url(${banner2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="text-center h-100 w-100 p-2 p-md-5 p-lg-5 p-xl-5 d-flex align-items-center"
                    style={{ background: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="container py-5 d-flex align-items-center justify-content-center">
                      <p
                        className="mt-3"
                        style={{
                          fontSize: "22px",
                        }}
                      >
                        {/* SAMPLE TEST */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon visually-hidden"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon visually-hidden"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="row m-0 pb-0 mb-0"
            style={{ flexWrap: "wrap-reverse" }}
          >
            <div
              className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
              style={{
                background: "#090909",
              }}
            >
              <div className="container py-5">
                <h1 className="fw-bold">About IDTA</h1>

                <p>
                  The Indian Dental Technician Association is the unified voice
                  of the Dental Laboratory professionals supporting dentistry
                  and serving the public interest by promoting high standards.
                  I.D.T.A. accomplished this by providing Programs, services and
                  networking opportunities to meet the evolving technical,
                  Educational, professional and business needs of dental
                  laboratories. The Indian Dental Technician Association is a
                  Pvt.Organization for Dental Laboratory's and Dental
                  Technicians in India and we are committed to keeping member in
                  touch with what is going in Dental Technology and the wider
                  dental arena as well as facilitating our members with the
                  tools they need to stay educated and compliant. Currently the
                  I.D.T.A has 200+ Members and 500+ Socially connected Members
                </p>

                <button
                  className="btn btn-success border-0 mx-auto px-4 shadow-none btn-lg fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Contact Us Now
                </button>
              </div>
            </div>
            <div
              className="d-none d-md-block col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
              style={{
                background: "#090909",
              }}
            >
              <img
                className="img-fluid w-100 h-100 py-0 my-0"
                src={aboutIdta}
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
        </div>
        <div className="row m-0 pb-0 mb-0">
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src={Img2}
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
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Reasons to join I.D.T.A</h1>
              <ol className="mt-3">
                <li>
                  An Organisation dedicated to the interest of dental laboratory
                  owners and technicians.
                </li>
                <li>
                  Established and run by Dental Technicians for Dental
                  Technician and Laboratorys Owners.
                </li>
                <li>
                  Expert support and guidance for every aspect of your business,
                  from starting up and day-to-day operations to employment
                  issues and representing your view.
                </li>
                <li>Committed to raising standards for the industry.</li>
                <li>
                  Actively promotes I.D.T.A Member Laboratories to the Indian
                  Dentists.
                </li>
                <li>An annual exhibition dedicated to dental technology.</li>
                <li>
                  Regular journal and information bulletins give you liiefings
                  on current events and product developments.
                </li>
                <li>
                  Specially negotiated money-saving deals designed to maximise
                  your budgets.
                </li>
                <li>
                  We provide an annual conference, significantly discounted for
                  members.
                </li>
                <li>We Also provide a range of online CPD courses.</li>
                <li>Members receive the IDTA newsletter.</li>
                <li>We offer peer review advice and support.</li>
              </ol>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
            <div
              className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
              style={{
                background: "#090909",
              }}
            >
              <div className="container py-5">
                <h1 className="fw-bold">What we do for you?</h1>
                <ol className="mt-3">
                  <li>
                    IDTA work with students to provide a seamless transaction
                    from Universities, Colleges & Institutes into the profession
                    ensuring a well trained fully supported work forces into the
                    future.
                  </li>
                  <li>
                    Stay connected to those in the market to buy or sale
                    practice and equipments.
                  </li>
                  <li>Mentoring programmes.</li>
                  <li>
                    We connect with you the leader in the profession, so, you
                    can meet, learn and share ideas with them.
                  </li>
                  <li>
                    An open form for you to share your thoughts. Group study,
                    group study with other association. Annual conferences. Our
                    annual conference provide world class CPD, great social
                    events and the chance to connect with expert with 1st Class
                    Speakers and time to catch with colleagues.
                  </li>
                  <li>
                    Collected and shared, so, you can stay on top of the latest
                    research and news from across the profession, saving your
                    time, so, you can focus on what's important for your
                    patient.
                  </li>
                </ol>
                <a
                  className="btn btn-success border-0 mx-auto px-4 shadow-none btn-lg fw-bold"
                  href="/membership"
                >
                  Register Now
                </a>
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
                src={Img1}
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

          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src={homelast}
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
              background: "#090909",
            }}
          >
            <div className="container py-5">
              {/* <h1 className="fw-bold">What we do for you?</h1> */}
              <ol className="mt-3">
                The object for which the Association is established is to
                represent effectively the interest of the Members and provide a
                range of professional services to support and develop their
                business. The Association aims to :-
                <li>
                  Inform and advice Members of the latest industry development
                  and how they will affect their Laboratory.
                </li>
                <li>
                  Support and implement initiatives to improve standards of worm
                  and materials.
                </li>
                <li>
                  Encourage schemes which help improve rhe technicial and
                  general knowledge to all those working in the field of dental
                  technology.
                </li>
                <li>
                  promote membership of the Association to the dental
                  profession.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                background: "#000000",
                border: "1px solid #ffffff",
              }}
            >
              <div
                className="modal-header"
                style={{
                  borderBottom: "none",
                }}
              >
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Contact Us
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 className="text-secondary mb-3">Laboratory Details</h5>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Full Name of Lab Owner(s)"
                    onChange={(e) => setOwnerFullName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Contact Number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Email"
                    onChange={(e) => setLabEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Website"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Lab Name"
                    onChange={(e) => setLabName(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "none",
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => saveContactForm()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
