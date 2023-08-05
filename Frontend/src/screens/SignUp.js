import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../lib/Users";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (
      fullname === "" ||
      fullname === null ||
      fullname === undefined ||
      email === "" ||
      email === null ||
      email === undefined ||
      password === "" ||
      password === null ||
      password === undefined
    ) {
      alert("Empty Input Fields");
    } else {
      const userInfo = {
        fullname: fullname,
        email: email,
        password: password,
      };
      Users.signup(userInfo)
        .then((response) => {
          console.log("Registration in successfully");
          console.log(response.data.fullname);
          localStorage.setItem("userRegistered", "registered");
          alert("Registration in successfully");
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error logging in:", error);
          alert("Error logging in:" + error);
        });
    }
  };

  const keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      console.log("enter");
      signUp();
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentUser") === null ||
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === undefined
    ) {
      console.log("login to continue");
    } else {
      navigate("/dashboard");
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
          <form>
            <h1 className="text-center">Sign Up</h1>
            <hr />
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                placeholder="Name"
                onKeyDown={(e) => keyDownHandler(e)}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                placeholder="Email"
                onKeyDown={(e) => keyDownHandler(e)}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2 text-light"
                placeholder="Password"
                onKeyDown={(e) => keyDownHandler(e)}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="mb-3">
              Already have an account? &nbsp;
              <a
                className="text-decoration-none text-custom-primary"
                href="/login"
              >
                Login
              </a>
            </p>
            <div className="text-center">
              <button
                type="button"
                className="btn bg-custom-primary text-light fw-bold w-100"
                onClick={() => signUp()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
