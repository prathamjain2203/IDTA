import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/commons/Footer";
import ContactForm from "../../lib/ContactForm";

const ContactForms = () => {
  const [contactForms, setContactForms] = useState([]);

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
      const getAllContacts = async () => {
        ContactForm.getAllContacts()
          .then((response) => {
            console.log(response.data);
            setContactForms(response.data);
          })
          .catch((error) => {
            alert("Error: " + error);
            console.log("Error: " + error);
          });
      };
      getAllContacts();
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
                href="/jobapplications"
              >
                Job Applications
              </a>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger text-decoration-none"
                onClick={() => logout()}
              >
                Logout
              </button>
              <hr />
              <h4 className="mt-4 fw-bold">Contact Forms</h4>
              <div className="row mt-5">
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Lab Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col">Owner Name</th>
                      </tr>
                    </thead>
                    {contactForms.length === 0 ? (
                      <>
                        <h4 className="text-center">
                          No Contacts are Available
                        </h4>
                      </>
                    ) : (
                      contactForms?.map((contactItem, index) => (
                        <tbody key={index}>
                          <tr>
                            <th className="text-light" scope="row">
                              {index + 1}
                            </th>
                            <td className="text-light">
                              {contactItem.labName}
                            </td>
                            <td className="text-light">{contactItem.number}</td>
                            <td className="text-light">{contactItem.email}</td>
                            <td className="text-light">
                              {contactItem.website}
                            </td>
                            <td className="text-light">
                              {contactItem.ownerFullName}
                            </td>
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

export default ContactForms;
