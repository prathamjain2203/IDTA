import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/commons/Footer";
import { ScrollRestoration } from "react-router-dom";
const GET_ALL_PAYMENTS =
  "https://springboot-java-production-daec.up.railway.app/payment";
const Payments = () => {
  const [allPaymentsData, setAllPaymentsData] = useState([]);

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

      const getAllPayments = async () => {
        fetch(GET_ALL_PAYMENTS)
          .then((response) => response.json())
          .then((data) => setAllPaymentsData(data))
          .catch((err) => console.log(err));
      };
      getAllPayments();
    }
  }, []);
  return (
    <div>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
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
              <a
                className="btn btn-primary text-decoration-none"
                href="/allPayments"
              >
                Payments
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
                        <th scope="col">User Id</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Receipt</th>
                        <th scope="col">Payment Status</th>
                      </tr>
                    </thead>
                    {allPaymentsData.length === 0 ? (
                      <>
                        <h4 className="text-center">
                          No Payments are Available
                        </h4>
                      </>
                    ) : (
                      allPaymentsData?.map((item, index) => (
                        <tbody key={index}>
                          <tr>
                            <th className="text-light" scope="row">
                              {item?.id}
                            </th>
                            <td className="text-light">
                              {item.userPrimaryKey}
                            </td>
                            <td className="text-light">{item.currency}</td>
                            <td className="text-light">{item.amount}</td>
                            <td className="text-light">{item.receipt}</td>
                            <td className="text-light">{item.paymentStatus}</td>
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

export default Payments;
