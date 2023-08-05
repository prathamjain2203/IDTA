import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import JobOpportunities from "../assets/jsonData/JobOpportunities.json";
// import Jobs from "../lib/Jobs";
import Img6 from "../assets/img/img (6).jpg";
import Img7 from "../assets/img/img (7).jpg";
import Img8 from "../assets/img/img (8).jpg";
import Img1 from "../assets/img/img (1).jpg";

const Careers = () => {
  // const [jobTitle, setJobTitle] = useState("");

  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const saveJobInfo = async (jobInfo) => {
  //   Jobs.saveJobs(jobInfo)
  //     .then((response) => {
  //       console.log(response.data);
  //       alert("Applied");
  //     })
  //     .catch((error) => {
  //       console.log("Error: " + error);
  //       alert("Error: " + error);
  //     });
  // };

  // const saveJobForm = () => {
  //   if (
  //     name === "" ||
  //     name === null ||
  //     number === "" ||
  //     number === null ||
  //     email === "" ||
  //     email === null ||
  //     message === "" ||
  //     message === null ||
  //     jobTitle === "" ||
  //     jobTitle === null
  //   ) {
  //     alert("Please fill the input fields");
  //   } else {
  //     const jobInfo = {
  //       name: name,
  //       number: number,
  //       email: email,
  //       message: message,
  //       jobTitle: jobTitle,
  //     };
  //     saveJobInfo(jobInfo);
  //   }
  // };

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
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src={Img6}
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
              <h1 className="fw-bold">Career</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                We are bringing out the best in class professionals through
                smart memebership and employment process. Lets join hands and
                become a bigger family.
              </p>
              <a
                className="btn btn-success border-0 mx-auto px-4 shadow-none btn-lg fw-bold"
                href="https://google.com"
                alt="button"
              >
                Button Here
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Commericial Dental Laboratories</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                These laboratories are where most dental technician work, either
                as employees or with experience, running their own Laboratories.
                The laboratories, which ranges from single handed organization
                through to large companies, receive prescriptions from dentists
                and carry out work required. They also repair or modify
                appliances. A large laboratory deals with a wide variety of work
                and may offer the opportunity to specialize.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src={Img7}
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
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src={Img8}
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
              <h1 className="fw-bold">Dental Clinics</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                A few dental clinics may employ their own dental technician to
                carry out work on the premises, thought most practices use
                commercial laboratories.In a Dental clinic the dental technician
                would deal with quite a wide range of work, often specializing
                to meet the needs to the particular practice.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Career Information</h1>
              <ol className="mt-3">
                <li>
                  Dental Technology is a growing sector that offer a wide range
                  of significant career opportunities both in India and
                  internationally.
                </li>
                <li>
                  A Dental Technologist "also known as Dental technician and
                  dental mechanic" is a highly skills professional who
                  specialties in the design, construction, repair and adjustment
                  of a wide range of dental technologies.
                </li>
              </ol>

              <br />
              <h4 className="fw-bold">
                Dental Technologist focus on five areas:-
              </h4>
              <ol>
                <li>
                  Restoring natural teeth through the use of crown, inlays and
                  veneers.
                </li>
                <li>
                  Replacing teeth via bridges, dentures and implants. Oral
                  reconstruction.
                </li>
                <li>
                  Orthodontic correction via braces, trays and mouth guards.
                </li>
                <li>Orthognathic adjustment, i.e. jaw realignment.</li>
                <li>
                  Dental technologist work loosely with practitioners such as
                  dentist and dental prosthetists, and apply a wide range of
                  techniques that include plaster casting, electro-spot welding,
                  metal casting and polishing, wax modelling, ceramics, wire
                  bending, electroplating and sandblasting.
                </li>
              </ol>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
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
          <div
            className="col-12 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold text-center mb-3">
                Available Opportunities
              </h1>
              <div className="row">
                {JobOpportunities.length === 0 ? (
                  <h4>No Jobs Available</h4>
                ) : (
                  JobOpportunities.map((jobItem, index) => (
                    <div
                      className="col-md-3 col-lg-3 col-xl-3 my-3"
                      key={index}
                    >
                      <div className="card bg-dark">
                        <img
                          src={jobItem.imageURL}
                          className="card-img-top"
                          alt="logo"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{jobItem.title}</h5>
                          <p className="card-text">
                            {jobItem.shortDescription}
                          </p>
                          <button
                            className="btn btn-primary w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            // onClick={() => setJobTitle(jobItem.title)}
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
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
                {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Apply Now
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button> */}
              </div>
              <div className="modal-body">
                <h5 className="text-light mt-0 mb-4 mx-auto text-center">
                  Comming Soon
                </h5>
                {/* <h5 className="text-light mb-3">Job: {jobTitle}</h5>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div> */}
              </div>
              {/* <div
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
                  onClick={() => saveJobForm()}
                >
                  Submit
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
