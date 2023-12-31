import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body
          onClick={() => navigate("/membership")}
          style={{
            cursor: "pointer",
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background: "black",
            background: "url(/modalbg.jpeg) no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <IoMdClose
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "20px",
              color: "black",
              top: "20px",
            }}
          />
          <a
            style={{ textAlign: "center" }}
            className="navbar-brand text-light fw-bold"
            href="/"
          >
            <span
              style={{ color: "black" }}
              className="d-none d-md-block d-lg-block d-xl-block"
            >
              Welcome To Indian Dental Technician Association
            </span>
            <span
              style={{ color: "black" }}
              className="d-block"
            >
              01-01-2024
            </span>
          </a>
          <h2 style={{ color: "black", textAlign: "center" }}>
            Registration is live now
          </h2>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
