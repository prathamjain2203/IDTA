import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCredentials from "../../data/AdminCredentials.json";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (
      email === "" ||
      email === null ||
      email === undefined ||
      password === "" ||
      password === null ||
      password === undefined
    ) {
      alert("Empty Input Fields");
    } else {
      // login logic
      if (
        email === AdminCredentials.username &&
        password === AdminCredentials.password
      ) {
        localStorage.setItem("currentAdmin", "admin");
        navigate("/contactforms");
      } else {
        alert("Incorrect Admin Credentials");
      }
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentAdmin") === null ||
      localStorage.getItem("currentAdmin") === "" ||
      localStorage.getItem("currentAdmin") === undefined
    ) {
      console.log("please login");
    } else {
      navigate("/contactforms");
    }
  }, [navigate]);
  return (
    <div
      className="container d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card w-100 mx-auto bg-transparent border"
        style={{ maxWidth: "500px" }}
      >
        <div className="card-body">
          <h1 className="text-center">Admin Login</h1>
          <hr />
          {localStorage.getItem("userRegistered") === null ||
          localStorage.getItem("userRegistered") === "" ||
          localStorage.getItem("userRegistered") === undefined ? (
            ""
          ) : (
            <p>Registration Successful</p>
          )}
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn bg-custom-primary text-light fw-bold w-100"
              onClick={() => login()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
