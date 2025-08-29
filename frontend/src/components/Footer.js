import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-light py-4" style={{backgroundColor:"#000"}}>
      <div className="container">
        {/* Logo/Title Section */}
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-2">
              <div className="mb-3 mb-md-0">
                <h2 className="h1 fw-bold mb-0" style={{ color: '#C9FD02' }}>
                  LearnHub
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright and Links Section */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-4">
              <div className="mb-3 mb-md-0">
                <div className="text-center text-md-end">
                  <p className="mb-2" style={{ color: '#64748B' }}>
                    © 2022 Tailwind Labs Inc. All rights reserved.
                  </p>
                  <div className="d-flex gap-4 justify-content-center">
                    <a
                      href="/form"
                      className="text-decoration-none hover-effect"
                      style={{ color: '#F1F5F9' }}
                    >
                      Form
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;