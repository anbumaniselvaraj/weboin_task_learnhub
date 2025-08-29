



import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/form");
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#000000CC",
        pointerEvents: "none", 
      }}
    >
      <div
        className="container border border-1 rounded-5 mt-4 p-2"
        style={{
          maxWidth: "70%",
          height: "auto",
          margin: "0 auto",
          pointerEvents: "auto",
        }}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <div
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
            onMouseLeave={(e) => (e.target.style.cursor = "default")}
            onClick={goToHome}
          >
            <span
              style={{
                fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                lineHeight: "2rem",
                fontWeight: 900,
                color: "#C9FD02",
                fontFamily: "Arial, sans-serif",
              }}
            >
              LearnHub
            </span>
          </div>

          <div>
            <button
              onClick={goToForm}
              className="btn text-light rounded-pill px-3 py-1"
              style={{
                fontSize: "clamp(0.8rem, 3vw, 0.9rem)",
                cursor: "pointer",
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;