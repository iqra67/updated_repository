import React from "react";

function Team() {
  return (
    <div className="product-page">
      {/* Product Section */}
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-4">Photography Collection</h1>
          <div className="row g-4">

            {/* Wedding Card */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={process.env.PUBLIC_URL + "/images/wedding.jpg"}
                  className="card-img-top img-fluid rounded shadow"
                  alt="Wedding"
                />
                <div className="card-body">
                  <h5 className="card-title">Wedding Moments</h5>
                  <p className="card-text">Capturing the magic of love and ceremonies.</p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#galleryWedding"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Nature Card */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={process.env.PUBLIC_URL + "/images/nature.jpg"}
                  className="card-img-top img-fluid rounded shadow"
                  alt="Nature"
                />
                <div className="card-body">
                  <h5 className="card-title">Nature Wonders</h5>
                  <p className="card-text">Peaceful landscapes and scenic beauty.</p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#galleryNature"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Portrait Card */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={process.env.PUBLIC_URL + "/images/portrait.jpg"}
                  className="card-img-top img-fluid rounded shadow"
                  alt="Portrait"
                />
                <div className="card-body">
                  <h5 className="card-title">Portrait Shots</h5>
                  <p className="card-text">Expressive and elegant personal portraits.</p>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#galleryPortrait"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Modals */}

      {/* Wedding Modal */}
      <div
        className="modal fade"
        id="galleryWedding"
        tabIndex={-1}
        aria-labelledby="galleryWeddingLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title">Wedding Gallery</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/m1.jpeg"} className="img-fluid rounded shadow" alt="Pic 1" />
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/m2.jpeg"} className="img-fluid rounded shadow" alt="Pic 2" />
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/m3.jpeg"} className="img-fluid rounded shadow" alt="Pic 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nature Modal */}
      <div
        className="modal fade"
        id="galleryNature"
        tabIndex={-1}
        aria-labelledby="galleryNatureLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title">Nature Gallery</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/n1.jpeg"} className="img-fluid rounded shadow" alt="Pic 1" />
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/n3.jpeg"} className="img-fluid rounded shadow" alt="Pic 2" />
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/n4.jpeg"} className="img-fluid rounded shadow" alt="Pic 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portrait Modal */}
      <div
        className="modal fade"
        id="galleryPortrait"
        tabIndex={-1}
        aria-labelledby="galleryPortraitLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title">Portrait Gallery</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/n2.jpeg"} className="img-fluid rounded shadow" alt="Pic 1" />
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/p1.jpeg"} className="img-fluid rounded shadow" alt="Pic 2" />
                </div>
                <div className="col-md-4">
                  <img src={process.env.PUBLIC_URL + "/images/p2.jpeg"} className="img-fluid rounded shadow" alt="Pic 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Team;
