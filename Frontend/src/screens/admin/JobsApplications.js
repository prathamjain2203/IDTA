import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/commons/Footer";
import Jobs from "../../lib/Jobs";

const JobsApplications = () => {
  const [jobApplicationData, setJobApplicationData] = useState([]);

  const redirectToLogin = () => {
    window.location.replace("adminLogin");
  };

  const logout = () => {
    localStorage.clear("currentAdmin");
    window.location.replace("");
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentAdmin") === null ||
      localStorage.getItem("currentAdmin") === "" ||
      localStorage.getItem("currentAdmin") === undefined
    ) {
      console.log("Please Login");
    } else {
      console.log("LoggedIn");

      const getAllJobs = async () => {
        Jobs.getAllJobs()
          .then((response) => {
            console.log(response.data);
            setJobApplicationData(response.data);
          })
          .catch((error) => {
            alert("Error: " + error);
            console.log("Error: " + error);
          });
      };
      getAllJobs();
    }
  }, []);
  return (
    <div>
      {/* <AdminNavbar /> */}
      <Container>
        {localStorage.getItem("currentAdmin") === null ||
        localStorage.getItem("currentAdmin") === "" ||
        localStorage.getItem("currentAdmin") === undefined ? (
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
              <h1 className="fw-bold">Welcome, Admin</h1>
              <a
                className="btn btn-primary text-decoration-none"
                href="/contactforms"
              >
                Contact Forms
              </a>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger text-decoration-none"
                onClick={() => logout()}
              >
                Logout
              </button>
              <hr />
              <h4 className="mt-4 fw-bold">Job Applications</h4>
              <div className="row mt-5">
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                        <th scope="col">Job Title</th>
                      </tr>
                    </thead>
                    {jobApplicationData.length === 0 ? (
                      <>
                        <h4 className="text-center">
                          No Applications are Available
                        </h4>
                      </>
                    ) : (
                      jobApplicationData?.map((jobItem, index) => (
                        <tbody key={index}>
                          <tr>
                            <th className="text-light" scope="row">
                              {index + 1}
                            </th>
                            <td className="text-light">{jobItem.name}</td>
                            <td className="text-light">{jobItem.number}</td>
                            <td className="text-light">{jobItem.email}</td>
                            <td className="text-light">{jobItem.message}</td>
                            <td className="text-light">{jobItem.jobTitle}</td>
                          </tr>
                        </tbody>
                      ))
                    )}
                  </table>
                </div>
              </div>
            </section>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default JobsApplications;
