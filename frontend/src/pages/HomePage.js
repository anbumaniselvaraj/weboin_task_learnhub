import React, { useState, useEffect } from "react";
import "../assets/css/Aboutus.css";
import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
import bg from "../assets/image/bg-image.svg";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img4.png";
import img5 from "../assets/image/img5.png";
import img6 from "../assets/image/img6.png";
import img7 from "../assets/image/img7.png";
import img8 from "../assets/image/img8.png";
// import img11 from "../assets/image/img11.png";
import img11 from "../assets/image/img-11.png";
import img12 from "../assets/image/img12.png";
import img13 from "../assets/image/img13.png";
import imgdaigram from "../assets/image/img-diagram.png";
import Footer from "../components/Footer";
import axios from "axios";

const HomePage = () => {
  const [submittedForms, setSubmittedForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get("https://weboin-task-learnhub-backend.vercel.app/api/forms");
        setSubmittedForms(response.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };
    fetchForms();
  }, []);

  // Statistics
  const totalSubmissions = submittedForms.length;
  const placedStudents = submittedForms.filter(
    (form) => form.status === "Placed"
  ).length;
  const unplacedStudents = submittedForms.filter(
    (form) => form.status === "Unplaced"
  ).length;

  // const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div
        className="d-flex flex-column"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div
          className="flex-grow-1 d-flex align-items-center position-relative"
          style={{ zIndex: 1, paddingTop: "80px", marginTop: "-80px" }}
        >
          <div className="container text-center px-3">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <h1
                  className="fw-bold text-white"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 3.75rem)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02em",
                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                    margin: "0 0 20px",
                    padding: "0 0 12px",
                  }}
                >
                  Learn from the best, be <br /> your best..
                </h1>

                <p
                  className="fw-normal"
                  style={{
                    fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
                    color: "#4B5563",
                    maxWidth: "90%",
                    margin: "0 auto 1rem auto",
                    lineHeight: "1.6",
                  }}
                >
                  Give yourself an upgrade with our inspiring online courses
                  <br />
                  and join a global community of learners
                </p>

                <div>
                  <button
                    className="rounded-pill fw-semibold mt-5"
                    style={{
                      backgroundColor: "#FACC15",
                      color: "#000",
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                      padding: "15px 30px",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          minHeight: "auto",
          backgroundColor: "black",
          padding: "0 clamp(16px, 5vw, 32px)",
        }}
      >
        <div className="container" style={{ padding: "20px 0" }}>
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2
                className="text-white fw-bold mb-3 mt-5"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 2.9rem)",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                Our Placement Partners
              </h2>
            </div>
          </div>

          <div className="row justify-content-center align-items-center g-2">
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img1}
                  alt="Airbnb"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(27%) sepia(78%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img2}
                  alt="Grabyo"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img3}
                  alt="LifeGroups"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img4}
                  alt="MYOB"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(12%) sepia(100%) saturate(7471%) hue-rotate(297deg) brightness(95%) contrast(118%)",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img5}
                  alt="Tailus"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(52%) sepia(96%) saturate(1194%) hue-rotate(175deg) brightness(103%) contrast(101%)",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img6}
                  alt="Microsoft"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img7}
                  alt="COTV"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(20%) sepia(94%) saturate(4498%) hue-rotate(261deg) brightness(99%) contrast(105%)",
                  }}
                />
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "clamp(70px, 18vw, 90px)", padding: "10px" }}
              >
                <img
                  src={img8}
                  alt="Lilly"
                  className="img-fluid"
                  style={{
                    maxWidth: "clamp(100px, 25vw, 130px)",
                    height: "auto",
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(27%) sepia(78%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5 px-4 py-3">
            <div className="col-12 text-center">
              <button
                className="btn rounded-pill fw-semibold"
                style={{
                  backgroundColor: "#C9FD02",
                  borderColor: "#C6FF00",
                  color: "#000000",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                  fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                  padding: "7px 50px",
                  transition: "all 0.3s ease",
                  minWidth: "130px",
                }}
              >
                and, more
                <br />
                companies
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-5"
        style={{
          backgroundColor: "#000",
          minHeight: "clamp(250px, 50vw, 350px)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9 text-center">
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgb(125 211 252)",
                }}
              >
                OPEN SOURCE THEME AND UI COMPONENTS
              </p>

              <h2
                style={{
                  fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                  color: "#F8FAFC",
                  margin: "24px auto 0",
                  maxWidth: "800px",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                }}
              >
                Geaux Astro helps you <br />
                craft beautiful websites <br /> efficiently
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#000",
          minHeight: "300px",
        }}
      >
        <div className="container px-2">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div className="pe-lg-4">
                <div className="mb-5">
                  <div className="d-flex align-items-start mb-3">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "rgba(34, 197, 94, 0.2)",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={img11}
                        alt="Certificate"
                        style={{
                          width: "24px",
                          height: "24px",
                          filter:
                            "brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(574%) hue-rotate(92deg) brightness(119%) contrast(119%)",
                        }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-white fw-bold mb-2"
                        style={{
                          fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Certificate Distribution
                      </h3>
                      <p
                        className="text-light mb-0"
                        style={{
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: "1.6",
                          maxWidth: "400px",
                        }}
                      >
                        We offer certificates to validate and recognize your
                        achievement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="d-flex align-items-start mb-3">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={img12}
                        alt="Knowledge"
                        style={{
                          width: "24px",
                          height: "24px",
                          filtre:
                            "brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(2618%) hue-rotate(212deg) brightness(101%) contrast(101%)",
                        }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-white fw-bold mb-2"
                        style={{
                          fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Knowledge
                      </h3>
                      <p
                        className="text-light mb-0"
                        style={{
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: "1.6",
                          maxWidth: "400px",
                        }}
                      >
                        We deliver transformative knowledge that empowers and
                        inspires.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-0">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "rgba(239, 68, 68, 0.2)",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={img13}
                        alt="Hands-on Experience"
                        style={{
                          width: "24px",
                          height: "24px",
                          filter:
                            "brightness(0) saturate(100%) invert(55%) sepia(89%) saturate(4157%) hue-rotate(340deg) brightness(98%) contrast(90%)",
                        }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-white fw-bold mb-2"
                        style={{
                          fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Hands-on Experience
                      </h3>
                      <p
                        className="text-light mb-0"
                        style={{
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: "1.6",
                          maxWidth: "400px",
                        }}
                      >
                        We provide hands-on experience for real-world learning.
                        You learn best by doing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "300px" }}
                >
                  <img
                    src={imgdaigram}
                    alt="Analytics Dashboard"
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "12px",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-vh-100 d-flex align-items-center"
        style={{
          backgroundColor: "#000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 255, 100, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(0, 150, 255, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(255, 0, 150, 0.1) 0%, transparent 50%)`,
            opacity: 0.3,
          }}
        ></div>

        <div
          className="container px-4 px-md-5 py-lg-5"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "85%",
            height: "auto",
            margin: "0 auto",
          }}
        >
          <div className="row align-items-center mt-lg-5 ">
            <div className="col-12 col-lg-6 mb-5 mt-lg-5 mb-lg-0">
              <div className="pe-0 pe-lg-1">
                <h1>
                  <span
                    style={{
                      color: "#16A34A",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    Empower your future
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#16A34A",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    with cutting-edge skills
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#0EA5E9",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    New, Embrace innovation,
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#0EA5E9",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    master technology, &
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#0EA5E9",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    shape the digital world
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#DC2626",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    Your journey to success
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#DC2626",
                      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    }}
                  >
                    starts here.
                  </span>
                </h1>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="text-center">
                <p
                  className="lead text-white mb-4 mb-lg-5"
                  style={{
                    fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)",
                    lineHeight: "1.6",
                  }}
                >
                  Join our course with a proven track record of success, where
                  learning isn't just about gaining skills; it's about growing
                  them. Join us, learn with confidence, and watch your skills
                  soar.
                </p>

                {/* <div className="row g-3 g-md-4 mb-4 mb-lg-5">
                  <div className="col-12 col-sm-4 col-md-4">
                    <div className="text-center d-flex flex-column align-items-center">
                      <div
                        className="badge rounded-pill px-2 py-2 mb-2"
                        style={{
                          backgroundColor: "#C9FD02",
                          color: "#000",
                          fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
                          fontWeight: "bold",
                          whiteSpace: "normal",
                          maxWidth: "100%",
                        }}
                      >
                        Total Students
                      </div>
                      <div
                        className="fw-bold text-white"
                        style={{ fontSize: "clamp(1.25rem, 5vw, 2rem)" }}
                      >
                        {totalSubmissions}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 col-md-4">
                    <div className="text-center d-flex flex-column align-items-center">
                      <div
                        className="badge rounded-pill px-2 py-2 mb-2"
                        style={{
                          backgroundColor: "#C9FD02",
                          color: "#000",
                          fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
                          fontWeight: "bold",
                          whiteSpace: "normal",
                          maxWidth: "100%",
                        }}
                      >
                        Placed Students
                      </div>
                      <div
                        className="fw-bold text-white"
                        style={{ fontSize: "clamp(1.25rem, 5vw, 2rem)" }}
                      >
                        {placedStudents}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 col-md-4">
                    <div className="text-center d-flex flex-column align-items-center">
                      <div
                        className="badge rounded-pill px-2 py-2 mb-2"
                        style={{
                          backgroundColor: "#C9FD02",
                          color: "#000",
                          fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
                          fontWeight: "bold",
                          whiteSpace: "normal",
                          maxWidth: "100%",
                        }}
                      >
                        Unplaced Students
                      </div>
                      <div
                        className="fw-bold text-white"
                        style={{ fontSize: "clamp(1.25rem, 5vw, 2rem)" }}
                      >
                        {unplacedStudents}
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row g-3 g-md-4 mb-4 mb-lg-5 flex-row">
                  <div className="col-4">
                    <div className="text-center d-flex flex-column align-items-center">
                      <div
                        className="badge rounded-pill px-2 py-2 mb-2"
                        style={{
                          backgroundColor: "#C9FD02",
                          color: "#000",
                          fontSize: "clamp(0.6rem, 2vw, 0.7rem)",
                          fontWeight: "bold",
                          whiteSpace: "normal",
                          maxWidth: "100%",
                        }}
                      >
                        Total Students
                      </div>
                      <div
                        className="fw-bold text-white"
                        style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}
                      >
                        {totalSubmissions}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center d-flex flex-column align-items-center">
                      <div
                        className="badge rounded-pill px-2 py-2 mb-2"
                        style={{
                          backgroundColor: "#C9FD02",
                          color: "#000",
                          fontSize: "clamp(0.6rem, 2vw, 0.7rem)",
                          fontWeight: "bold",
                          whiteSpace: "normal",
                          maxWidth: "100%",
                        }}
                      >
                        Placed Students
                      </div>
                      <div
                        className="fw-bold text-white"
                        style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}
                      >
                        {placedStudents}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center d-flex flex-column align-items-center">
                      <div
                        className="badge rounded-pill px-2 py-2 mb-2"
                        style={{
                          backgroundColor: "#C9FD02",
                          color: "#000",
                          fontSize: "clamp(0.6rem, 2vw, 0.7rem)",
                          fontWeight: "bold",
                          whiteSpace: "normal",
                          maxWidth: "100%",
                        }}
                      >
                        Unplaced Students
                      </div>
                      <div
                        className="fw-bold text-white"
                        style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}
                      >
                        {unplacedStudents}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>

        <style jsx>{`
          @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css");

          .hover-effect {
            transition: color 0.3s ease;
          }

          .hover-effect:hover {
            color: #ffff00 !important;
          }

          @media (max-width: 768px) {
            .display-3 {
              font-size: 2.5rem;
            }
            .display-1 {
              font-size: 3rem;
            }
          }

          @media (max-width: 576px) {
            .display-3 {
              font-size: 2rem;
            }
            .display-1 {
              font-size: 2.5rem;
            }
            .lead {
              fontsize: 1rem !important;
            }
          }

          .badge {
            transition: all 0.3s ease;
          }

          .badge:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 255, 0, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default HomePage;
