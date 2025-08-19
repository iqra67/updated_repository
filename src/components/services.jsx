import React from "react";

function Services() {
  return (
    <div className="services-page">
      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-4">Our Photography Services</h1>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-heart-fill fs-1 text-danger mb-3"></i>
                  <h5 className="card-title">Wedding Photography</h5>
                  <p className="card-text">
                    Capturing magical moments of your big day with elegance and emotion.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-camera-fill fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Portrait Sessions</h5>
                  <p className="card-text">
                    Professional portraits that highlight personality and beauty.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-tree-fill fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Nature & Outdoor</h5>
                  <p className="card-text">
                    Exploring the beauty of nature through creative outdoor shots.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-people-fill fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Events & Parties</h5>
                  <p className="card-text">
                    Memories from birthdays, corporate events, and more — perfectly captured.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-image-fill fs-1 text-info mb-3"></i>
                  <h5 className="card-title">Editing & Retouching</h5>
                  <p className="card-text">
                    High-end photo retouching to bring out the best in every image.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-box-seam fs-1 text-secondary mb-3"></i>
                  <h5 className="card-title">Custom Packages</h5>
                  <p className="card-text">
                    Tailored photography packages to suit your needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
