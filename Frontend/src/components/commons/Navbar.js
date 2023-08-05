import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../../assets/js/navbar.js";

const Navbar = () => {
  const navigate = useNavigate();

  const currentUrl = window.location.href;
  localStorage.setItem("currentPage", currentUrl);
  console.log(localStorage.getItem("currentPage"));
  const pageName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  const [userID, setUserID] = useState("");

  const logout = () => {
    localStorage.clear("currentUser");
    navigate("/login");
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentUser") === null ||
      localStorage.getItem("currentUser") === "" ||
      localStorage.getItem("currentUser") === undefined
    ) {
      setUserID("");
    } else {
      setUserID(localStorage.getItem("currentUser"));
    }
  }, []);

  return (
    <Container>
      <nav
        className="navbar navbar-expand-lg fixed-top py-3"
        style={{ background: "#000000", opacity: "0.9" }}
      >
        <div className="container">
          <a className="navbar-brand text-light fw-bold" href="/">
            <span className="d-none d-md-block d-lg-block d-xl-block">
              Indian Dental Technician Association
            </span>
            <span className="d-block d-md-none d-lg-none d-xl-none">IDTA</span>
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-light">
              <List />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="mainNav">
              <li className="nav-item mx-3">
                <a
                  className={
                    pageName === ""
                      ? "nav-link nav-a-hover nav-item-active"
                      : "nav-link nav-a-hover"
                  }
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a
                      className={
                        pageName === "about"
                          ? "nav-link nav-a-hover nav-item-active dropdown-item w-100"
                          : "nav-link nav-a-hover dropdown-item w-100"
                      }
                      style={{ background: "none" }}
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pageName === "aboutTeam"
                          ? "nav-link nav-a-hover nav-item-active dropdown-item w-100"
                          : "nav-link nav-a-hover dropdown-item w-100"
                      }
                      style={{ background: "none" }}
                      href="/aboutTeam"
                    >
                      About Team
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={
                    pageName === "membership"
                      ? "nav-link nav-a-hover nav-item-active"
                      : "nav-link nav-a-hover"
                  }
                  href="/membership"
                >
                  Registration
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={
                    pageName === "service"
                      ? "nav-link nav-a-hover nav-item-active"
                      : "nav-link nav-a-hover"
                  }
                  href="/service"
                >
                  Services
                </a>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a
                      className={
                        pageName === "education"
                          ? "nav-link nav-a-hover nav-item-active dropdown-item w-100"
                          : "nav-link nav-a-hover dropdown-item w-100"
                      }
                      style={{ background: "none" }}
                      href="/education"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pageName === "courses"
                          ? "nav-link nav-a-hover nav-item-active dropdown-item w-100"
                          : "nav-link nav-a-hover dropdown-item w-100"
                      }
                      style={{ background: "none" }}
                      href="/courses"
                    >
                      Courses
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={
                    pageName === "career"
                      ? "nav-link nav-a-hover nav-item-active"
                      : "nav-link nav-a-hover"
                  }
                  href="/career"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={
                    pageName === "joinus"
                      ? "btn btn-success border-0 mx-auto px-2 shadow-none btn-lg fw-bold nav-link nav-item-active text-light"
                      : "btn btn-success border-0 mx-auto px-2 shadow-none btn-lg fw-bold nav-link text-light"
                  }
                  href="/joinus"
                >
                  Join Us
                </a>
              </li>
              {userID === "" || userID === null ? (
                <li className="nav-item mx-3">
                  <a
                    className={
                      pageName === "login"
                        ? "btn border-0 mx-auto px-4 shadow-none btn-lg fw-bold nav-link nav-item-active text-decoration-none text-light"
                        : "btn border-0 mx-auto px-4 shadow-none btn-lg fw-bold nav-link text-decoration-none text-light"
                    }
                    style={{ background: "#193A67" }}
                    href="/login"
                  >
                    Login
                  </a>
                </li>
              ) : (
                <li className="nav-item mx-3">
                  <button
                    className={
                      "btn border-0 mx-auto px-4 shadow-none btn-lg fw-bold nav-link text-decoration-none text-light"
                    }
                    style={{ background: "#193A67" }}
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
