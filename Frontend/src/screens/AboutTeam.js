import React, { useEffect } from "react";
// import { Container } from "react-bootstrap";
// import IDTALogo from "../assets/img/idta-logo.png";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import TeamData from "../assets/jsonData/teamInfo.json";
import board1 from "../assets/img/board1";
import board2 from "../assets/img/board2";
import board3 from "../assets/img/board3";
import board4 from "../assets/img/board4";
import { ScrollRestoration } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpeg";

const images = [image3, image1, image2];
const Images = [board1, board2, board3, board4];
const Card = ({ item, image }) => {
  return (
    <div
      className="about-grid"
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px" }}
    >
      <div
        className="image"
        style={{
          width: "200px",
          height: "172px",
          objectFit: "contain",
        }}
      >
        <img style={{ width: "180px", height: "180px" }} src={image} alt="pic" />
      </div>
      <div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#ffff",
            margin: "0",
          }}
        >
          {item?.name}
        </p>
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "white",
            margin: "10px 0",
          }}
        ></div>
        <div style={{ display: "flex" }}>
          <span style={{ fontWeight: "bold" }}>{item?.position}</span>
        </div>
        <div>
          <div>
            <span>Company: </span>
            <span>{item?.company}</span>
          </div>
          {/* <div>
            <span>Address: </span>
            <span>{item?.address}</span>
          </div>{" "}
          <div>
            <span>State: </span>
            <span>{item?.state}</span>
          </div>{" "} */}
          <div>
            <span>Phone: </span>
            <span>{item?.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
      <Navbar />
      <section className="pt-4 section pb-0" id="about">
        <div style={{ padding: "100px" }} className="row director-container">
          <h2 className="board-title">Board of Directors</h2>
          <p>
            The Board of Directors collaborates with staff and a legion of
            volunteer committee's to execute the strategic plan and serve
            I.D.T.A members.
          </p>
          {TeamData?.map((teamItem, index) => (
            <div key={index} className="col-md-8 col-lg-6 col-xl-6 my-3">
              <Card image={images?.[index]} item={teamItem} />
            </div>

            // <div className="row mt-5 m-0" key={index}>
            //   <div className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0">
            //     <img
            //       className="img-fluid w-100"
            //       src={teamItem.categoryImg}
            //       alt="logo"
            //       style={{
            //         maxWidth: "100%",
            //         maxHeight: "330px",
            //         objectFit: "cover",
            //         objectPosition: "center",
            //       }}
            //     />
            //   </div>
            //   <div
            //     className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            //     style={{
            //       background: "#090909",
            //     }}
            //   >
            //     <div className="container py-5">
            //       {/* <h3 className="fw-bold text-success">AWARD WINNING</h3> */}
            //       <h1 className="fw-bold">{teamItem.category}</h1>
            //     </div>
            //   </div>
            //   {teamItem.teamInfo?.map((teamInfoItem, index) => (
            //     <div
            //       className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            //       key={index}
            //       style={{
            //         background: "#090909",
            //       }}
            //     >
            //       <div className="row mx-0 px-0">
            //         <div className="col-md-6 col-lg-6 col-xl-6 text-center mx-0 px-0">
            //           <img
            //             className="img-fluid h-100 py-0 my-0 mx-0 px-0"
            //             src={teamInfoItem.profile}
            //             alt="logo"
            //             style={{
            //               maxWidth: "100%",
            //               maxHeight: "100%",
            //               objectFit: "cover",
            //               objectPosition: "center",
            //             }}
            //           />
            //         </div>
            //         <div className="col-md-6 col-lg-6 col-xl-6 mx-0 px-0">
            //           <div className="py-5 px-3">
            //             <div className="text-light">
            //               <h1>{teamInfoItem.name}</h1>
            //               <h3 className="fw-bold text-success">
            //                 {teamInfoItem.position}
            //               </h3>
            //               <p>{teamInfoItem.info}</p>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            // ))}
            // </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutTeam;
