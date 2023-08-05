import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../lib/Users";

const Login = () => {
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
      const userInfo = {
        email: email,
        password: password,
      };
      Users.login(userInfo)
        .then((response) => {
          console.log("Logged in successfully");
          localStorage.setItem("currentUser", response.data.userPrimaryKey);
          const lastPage = localStorage.getItem("currentPage");
          if (lastPage === null || lastPage === undefined || lastPage === "") {
            navigate("/dashboard");
          } else {
            if (lastPage.includes("course")) {
              const pageId = lastPage.substring(lastPage.lastIndexOf("/") + 1);
              navigate("/course/" + pageId);
            } else if (lastPage.includes("membership")) {
              navigate("/membership");
            } else {
              navigate("/dashboard");
            }
          }
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
      login();
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentUser") === null ||
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === undefined
    ) {
      console.log("please login");
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
            <h1 className="text-center">Login</h1>
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
              Don't have an account? &nbsp;
              <a
                className="text-decoration-none text-custom-primary"
                href="/signup"
              >
                Sign Up
              </a>
            </p>
            <div className="text-center">
              <button
                type="button"
                className="btn bg-custom-primary text-light fw-bold w-100"
                onClick={() => login()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
