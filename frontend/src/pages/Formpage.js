import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    course: "",
    status: "Unplaced",
  });

  const [submittedForms, setSubmittedForms] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get("https://weboin-task-learnhub-backend.vercel.app/api/form");
      setSubmittedForms(response.data);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.role ||
      !formData.phone ||
      !formData.course
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/forms/${currentId}`, formData);
      } else {
        await axios.post("http://localhost:5000/api/forms", formData);
      }
      fetchForms();
      setFormData({
        name: "",
        email: "",
        role: "",
        phone: "",
        course: "",
        status: "Unplaced",
      });
      setIsEditing(false);
      setCurrentId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (form) => {
    setFormData({
      name: form.name,
      email: form.email,
      role: form.role,
      phone: form.phone,
      course: form.course,
      status: form.status,
    });
    setIsEditing(true);
    setCurrentId(form._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/forms/${id}`);
      fetchForms();
    } catch (error) {
      console.error("Error deleting form:", error);
    }
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  // Calculate statistics
  // const totalSubmissions = submittedForms.length;
  // const placedStudents = submittedForms.filter(
  //   (form) => form.status === "Placed"
  // ).length;
  // const unplacedStudents = submittedForms.filter(
  //   (form) => form.status === "Unplaced"
  // ).length;

  return (
    <>
      <Navbar />
      <div style={{ background: "#000", minHeight: "100vh" }}>
        <div className="container-fluid py-2">
          <div className="row">
            <div className="col-12 col-lg-12 col-xl-12">
              <div
                className="card shadow-lg border-0"
                style={{ backgroundColor: "#000", borderRadius: "30px" }}
              >
                <div
                  className="card-body p-4 p-md-5 mt-lg-5"
                  style={{ marginTop: "80px" }}
                >
                  <div className="text-center mb-5">
                    <h1
                      className="display-3 fw-bold mb-4"
                      style={{ color: "#C9FD02", fontSize: "40px" }}
                    >
                      Fill This Form
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4 g-md-5">
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="name"
                          className="form-label fw-bold mb-3"
                          style={{
                            color: "#C9FD02",
                            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                          }}
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          style={{
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 25px",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px rgba(158, 240, 26, 0.25)")
                          }
                          onBlur={(e) =>
                            (e.target.style.boxShadow =
                              "0 4px 15px rgba(0,0,0,0.1)")
                          }
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="role"
                          className="form-label fw-bold mb-3"
                          style={{
                            color: "#C9FD02",
                            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                          }}
                        >
                          Role:
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Enter your role"
                          style={{
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 25px",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px rgba(158, 240, 26, 0.25)")
                          }
                          onBlur={(e) =>
                            (e.target.style.boxShadow =
                              "0 4px 15px rgba(0,0,0,0.1)")
                          }
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="email"
                          className="form-label fw-bold mb-3"
                          style={{
                            color: "#C9FD02",
                            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                          }}
                        >
                          Email:
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          style={{
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 25px",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px rgba(158, 240, 26, 0.25)")
                          }
                          onBlur={(e) =>
                            (e.target.style.boxShadow =
                              "0 4px 15px rgba(0,0,0,0.1)")
                          }
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="phone"
                          className="form-label fw-bold mb-3"
                          style={{
                            color: "#C9FD02",
                            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                          }}
                        >
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          style={{
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 25px",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px rgba(158, 240, 26, 0.25)")
                          }
                          onBlur={(e) =>
                            (e.target.style.boxShadow =
                              "0 4px 15px rgba(0,0,0,0.1)")
                          }
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="course"
                          className="form-label fw-bold mb-3"
                          style={{
                            color: "#C9FD02",
                            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                          }}
                        >
                          Course:
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          style={{
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 25px",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px rgba(158, 240, 26, 0.25)")
                          }
                          onBlur={(e) =>
                            (e.target.style.boxShadow =
                              "0 4px 15px rgba(0,0,0,0.1)")
                          }
                          required
                        >
                          <option value="">Select a course</option>
                          <option value="React Basics">React Basics</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Javascript Fundamentals">
                            Javascript Fundamentals
                          </option>
                          <option value="Advanced Css">Advanced Css</option>
                          <option value="Backend Development">
                            Backend Development
                          </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="status"
                          className="form-label fw-bold mb-3"
                          style={{
                            color: "#C9FD02",
                            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                          }}
                        >
                          Status:
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          style={{
                            backgroundColor: "#f8f9fa",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 25px",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.boxShadow =
                              "0 0 0 4px rgba(158, 240, 26, 0.25)")
                          }
                          onBlur={(e) =>
                            (e.target.style.boxShadow =
                              "0 4px 15px rgba(0,0,0,0.1)")
                          }
                        >
                          <option value="Unplaced">Unplaced</option>
                          <option value="Placed">Placed</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-end mt-2 mt-md-2">
                          <button
                            type="submit"
                            className="btn btn-lg px-4 py-2"
                            style={{
                              backgroundColor: "transparent",
                              color: "#ffffff",
                              border: "3px solid #ffffff",
                              borderRadius: "50px",
                              fontSize: "1.2rem",
                              fontWeight: "600",
                              transition: "all 0.3s ease",
                              minWidth: "160px",
                              boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            {isEditing ? "Update" : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>



        
          {submittedForms.length > 0 && (
            <div className="row mt-5 px-lg-4 py-lg-4">
              <div className="col-12">
                <div className="row g-4">
                  {submittedForms.map((form) => (
                    <div key={form._id} className="col-12 col-md-6 col-lg-4">
                      <div
                        className="card"
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "10px",
                          padding: "10px",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                          border: "none",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0px)";
                        }}
                      >
                        <div className="card-body py-ly-2 px-lg-2">
                          <div className="d-flex align-items-center mb-3">
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center me-3"
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#C9FD02",
                                color: "#000",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                              }}
                            >
                              {getInitial(form.name)}
                            </div>
                            <h5
                              className="mb-0"
                              style={{
                                color: "#000",
                                fontSize: "1.3rem",
                                fontWeight: "semi-bold",
                              }}
                            >
                              {form.name}
                            </h5>
                          </div>
                          <div className="mb-2">
                            <strong style={{ color: "#000" }}>Role:</strong>{" "}
                            <span style={{ color: "#000" }}>{form.role}</span>
                          </div>
                          <div className="mb-2">
                            <strong style={{ color: "#333" }}>Email:</strong>{" "}
                            <span style={{ color: "#000" }}>{form.email}</span>
                          </div>
                          <div className="mb-2">
                            <strong style={{ color: "#333" }}>Phone Number:</strong>{" "}
                            <span style={{ color: "#000" }}>{form.phone}</span>
                          </div>
                          <div className="mb-2">
                            <strong style={{ color: "#333" }}>Course:</strong>{" "}
                            <span style={{ color: "#000" }}>{form.course}</span>
                          </div>
                          <div className="mb-3">
                            <strong style={{ color: "#333" }}>Status:</strong>{" "}
                            <span
                              style={{
                                color: form.status === "Placed" ? "#28a745" : "#666",
                                fontWeight: form.status === "Placed" ? "600" : "normal",
                              }}
                            >
                              {form.status}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">

                            <button
                              onClick={() => handleDelete(form._id)}
                              className="btn"
                              style={{
                                backgroundColor: "#EF4444",
                                color: "#ffffff",
                                borderRadius: "5px",
                                fontWeight: "600",
                                border: "none",
                                padding: "10px 20px",
                                transition: "all 0.3s ease",
                                width: "100%",
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Form;
