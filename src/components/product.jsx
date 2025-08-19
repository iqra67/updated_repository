import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Professional Camera",
    desc: "Capture every moment with high-resolution detail and stunning clarity using our pro-level cameras.",
    img: process.env.PUBLIC_URL + "/images/camera.jpeg",
  },
  {
    id: 2,
    title: "Sturdy Tripods",
    desc: "Get the perfect shot with our range of sturdy and flexible tripods for any shooting angle.",
    img: process.env.PUBLIC_URL + "/images/tripod.jpeg",
  },
  {
    id: 3,
    title: "Studio Lighting",
    desc: "Enhance your shots with premium lighting kits designed for professional indoor shoots.",
    img: process.env.PUBLIC_URL + "/images/lighting.jpeg",
  },
];

const galleryItems = [
  { id: 1, category: "portrait", img: process.env.PUBLIC_URL + "/images/p5.jpeg", alt: "Portrait 1" },
  { id: 2, category: "portrait", img: process.env.PUBLIC_URL + "/images/p6.jpeg", alt: "Portrait 2" },
  { id: 3, category: "portrait", img: process.env.PUBLIC_URL + "/images/p7.jpeg", alt: "Portrait 3" },
  { id: 4, category: "nature", img: process.env.PUBLIC_URL + "/images/ns.jpeg", alt: "Nature 1" },
  { id: 5, category: "nature", img: process.env.PUBLIC_URL + "/images/n6.jpeg", alt: "Nature 2" },
  { id: 6, category: "nature", img: process.env.PUBLIC_URL + "/images/n7.jpeg", alt: "Nature 3" },
  { id: 7, category: "events", img: process.env.PUBLIC_URL + "/images/e1.jpeg", alt: "Event 1" },
  { id: 8, category: "events", img: process.env.PUBLIC_URL + "/images/e2.jpeg", alt: "Event 2" },
  { id: 9, category: "events", img: process.env.PUBLIC_URL + "/images/e3.jpeg", alt: "Event 3" },
];

function ProductCard({ title, desc, img }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div style={{ height: "250px", overflow: "hidden" }}>
          <img
            src={img}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <button className="btn btn-dark">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

function Gallery({ items, filter, onFilterChange }) {
  const filteredItems = items.filter(item => filter === "all" || item.category === filter);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Explore Our Gallery</h2>

        <div className="mb-4">
          {["all", "portrait", "nature", "events"].map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-dark m-1 ${filter === cat ? "active" : ""}`}
              onClick={() => onFilterChange(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="row g-3">
          {filteredItems.map(({ id, img, alt }) => (
            <div key={id} className="col-md-4">
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={img}
                  alt={alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <section className="py-5">
        <div className="container">
          <h1 className="text-center fw-bold mb-4">Our Photography Products</h1>
          <div className="row g-4">
            {products.map(({ id, title, desc, img }) => (
              <ProductCard key={id} title={title} desc={desc} img={img} />
            ))}
          </div>
        </div>
      </section>

      <Gallery items={galleryItems} filter={filter} onFilterChange={setFilter} />
    </>
  );
}
