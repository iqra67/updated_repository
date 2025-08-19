// src/components/footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">CaptureCraft</h5>
            <p>CaptureCraft is your creative partner in photography. We turn your moments into lasting memories with passion and precision.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
            <p><i className="bi bi-envelope me-2"></i> info@capturecraft.com</p>
            <p><i className="bi bi-telephone me-2"></i> +92 123 4567890</p>
            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light me-3 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0">© 2025 CaptureCraft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
