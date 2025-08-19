// src/pages/Home.jsx
import React from 'react';
import '../App.css'; // make sure CSS is imported

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1>CaptureCraft</h1>
          <p className="lead">Turning Moments into Art</p>
          <a href="/contact" className="btn btn-warning mt-3">Book Now</a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center">Featured Shots</h2>
          <div className="row g-4">
            {[
              "ali.jpg",
              "nature.jpg",
              "flower.jpeg",
              "cute.jpeg",
              "dogi.jpeg",
              "amazing.jpeg"
            ].map((img, i) => (
              <div className="col-md-4" key={i}>
                <img
                  src={process.env.PUBLIC_URL + "/images/" + img}
                  className="gallery-img"
                  alt={`Shot ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Why Choose CaptureCraft?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-star-fill card-icon"></i>
              <h5 className="mt-3">Creative Direction</h5>
              <p>Every photo tells a story with rich color, emotion, and vision.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning-fill card-icon"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>Get your edited, high-res photos within 3 days.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-people-fill card-icon"></i>
              <h5 className="mt-3">Happy Clients</h5>
              <p>100+ satisfied clients with smiles and memories to keep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center">Client Love</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>“Absolutely stunning work! My wedding photos brought tears to my eyes. Highly recommended!”</p>
                <footer className="blockquote-footer">Ayesha Malik</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>“Professional, quick, and the pictures came out better than I imagined. Will book again!”</p>
                <footer className="blockquote-footer">Hamza Rauf</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5 text-white" style={{ backgroundColor: '#222831' }}>
        <div className="container text-center">
          <h2 className="section-title text-white">Let's Capture Your Moments</h2>
          <p>From weddings to portraits — I’m here to craft timeless memories.</p>
          <a href="/contact" className="btn btn-warning">Get in Touch</a>
        </div>
      </section>
    </>
  );
};

export default Home;
