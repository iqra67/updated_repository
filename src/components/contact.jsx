import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5" style={{ fontSize: "2.5rem" }}>Get in Touch</h1>
          <div className="row align-items-center">

            {/* Left Side Image */}
            <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                src={process.env.PUBLIC_URL + "/images/man call.jpeg"}
                className="img-fluid rounded shadow"
                alt="Contact us"
                style={{ maxHeight: "900px", width: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Contact Form */}
            <div className="col-md-7 d-flex align-items-center">
              <form className="w-100">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{ fontSize: "1.3rem" }}>Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{ fontSize: "1.3rem" }}>Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label" style={{ fontSize: "1.3rem" }}>Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
