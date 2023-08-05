import React, { useState } from "react";
// import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import ContactForm from "../lib/ContactForm";
import Img3 from "../assets/img/img (3).jpg";
import Img4 from "../assets/img/img (4).jpg";

const JoinUs = () => {
  const [labName, setLabName] = useState("");
  const [number, setNumber] = useState("");
  const [labEmail, setLabEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [ownerFullName, setOwnerFullName] = useState("");

  const saveContactInfo = async (contactInfo) => {
    ContactForm.saveContact(contactInfo)
      .then((response) => {
        console.log(response.data);
        alert("Contact Info Saved");
      })
      .catch((error) => {
        console.log("Error: " + error);
        alert("Error: " + error);
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
      alert("Please fill the input fields");
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
      <Navbar />
      <section
        className="hero pt-4 section pb-0 mb-0"
        id="hero"
        // style={{ minHeight: "80vh" }}
      >
        <div className="row mt-5 m-0 pb-0 mb-0">
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{
              background: "#000",
            }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src={Img3}
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
              <h1 className="fw-bold">Join Us</h1>
              <p className="mt-3">
                An Organization dedicated to the interest of dental laboratory
                owners and technicians. Established and run by Dental
                Technicians for Dental Technician and Laboratory Owners.
                Committed to raising standards for the industry. Expert support
                and guidance for every aspect of your business, from Starting Up
                and day-to-day operations to employment issues and representing
                your view. Actively promotes IDTA Member Laboratories to the
                Indian Dentists. An annual exhibition dedicated to dental
                technology. Regular journal and information bulletins give you
                briefings on current events and product developments. Specially
                negotiated money-saving deals designed to maximize your budgets.
                We provide an annual conference, significantly discounted for
                members. We Also provide a range of online CPD courses. Members
                receive the IDTA newsletter. We offer peer review advice and
                support.
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
                  Regular journal and information bulletins give you briefings
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
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{
              background: "#000",
            }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src={Img4}
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
                    placeholder="Lab Name"
                    onChange={(e) => setLabName(e.target.value)}
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
                    placeholder="Full Name of Lab Owner(s)"
                    onChange={(e) => setOwnerFullName(e.target.value)}
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

export default JoinUs;
