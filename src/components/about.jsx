import React from "react";

function About() {
  return (
    <div className="about-page">
      {/* About Content */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="mb-4 text-primary">About CaptureCraft</h1>
          <p className="lead mb-4">
            CaptureCraft is more than just a photography brand — it’s a creative
            vision dedicated to capturing timeless moments with authenticity,
            style, and heart.
          </p>

          {/* Row with Text and Image */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/p1.jpeg"}
                alt="Photography Sample"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <p>
                From the delicate emotions of weddings to the candid energy of
                street life, our lens focuses on the details that matter. With a
                unique blend of artistic vision and cutting-edge technology, we
                ensure every photo tells a story.
              </p>
              <ul className="list-unstyled text-start ms-3">
                <li>📷 Weddings & Engagements</li>
                <li>👨‍👩‍👧 Family & Portrait Sessions</li>
                <li>🌿 Nature & Wildlife</li>
                <li>🎉 Events & Commercial Shoots</li>
              </ul>
          
 
            </div>
          </div>

          {/* Vision and Values with Icons */}
          <div className="row text-start mb-5">
            <div className="col-md-6">
              <h5 className="fw-bold text-primary">
                <i className="bi bi-eye"></i> Our Vision
              </h5>
              <p>
                To be a trusted name in visual storytelling by delivering
                emotionally rich, high-quality photography experiences.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold text-primary">
                <i className="bi bi-heart"></i> Our Values
              </h5>
              <p>
                We believe in creativity, authenticity, client satisfaction, and
                capturing the essence of every moment through our lens.
              </p>
            </div>
          </div>

          {/* Embedded Video Section */}
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="shadow-lg rounded overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-100 rounded"
                >
                  <source
                    src={process.env.PUBLIC_URL + "/video/bgVideo.mp4"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <small className="text-muted d-block mt-2">
                🎬 Amazing CaptureCraft photo shoot
              </small>
            </div>
          </div>

          {/* More Content Section */}
          <div className="container mt-5">
            <div className="row align-items-center text-center text-md-start">
              {/* Image 1 */}
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={process.env.PUBLIC_URL + "/images/wedding.jpg"}
                  className="img-fluid rounded shadow"
                  alt="Wedding Photography Shoot"
                />
              </div>

              {/* Text Content */}
              <div className="col-md-6">
                <h2 className="mb-3">Crafting Every Click</h2>
                <p>
                  At CaptureCraft, we don’t just take photos — we tell stories.
                  From candid wedding emotions to the serenity of nature, every
                  frame is captured with intention, creativity, and precision.
                </p>
                <p>
                  With a dedicated team and high-end equipment, we ensure every
                  shoot becomes a masterpiece worth sharing.
                </p>
                <p>
                  At CaptureCraft, we believe photography is more than just
                  taking pictures — it’s about freezing moments that matter.
                  From the laughter shared at a wedding to the sparkle in a
                  child’s eyes.
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-5" />

            <div className="row align-items-center text-center text-md-start flex-md-row-reverse">
              {/* Image 2 */}
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={process.env.PUBLIC_URL + "/images/sun.jpeg"}
                  className="img-fluid rounded shadow"
                  alt="Event Coverage Photography"
                />
              </div>

              {/* More Content */}
              <div className="col-md-6">
                <h2 className="mb-3">Experience the Moments Again</h2>
                <p>
                  Whether it's a concert, birthday, or corporate event, we’re
                  there to preserve every moment with stunning clarity and
                  vibrant energy. Relive your events through our lens.
                </p>
                <p>Let your memories stay alive — in high definition.</p>

                <h2 className="mb-3 mt-5">🌿 Capturing Nature’s Soul</h2>
                <p>
                  There’s a story in every sunset, a whisper in every breeze,
                  and a heartbeat in every leaf. At CaptureCraft, we don’t just
                  photograph nature — we connect with it. From golden mountain
                  views to serene forest trails, our lens seeks out the quiet
                  beauty that surrounds us. These moments remind us how
                  breathtaking the world truly is — and through our photography,
                  we make those fleeting scenes last forever.
                </p>
                <p>
                  Discover how CaptureCraft brings nature’s magic into every
                  frame — one click at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
