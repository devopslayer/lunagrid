import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./LogoGalleryWidget.css";

const DEFAULT_IMAGES = [
  "https://placehold.co/150?text=Image+1",
  "https://placehold.co/150?text=Image+2",
  "https://placehold.co/150?text=Image+3",
];

function LogoGalleryWidget() {
  const [images, setImages] = useState(DEFAULT_IMAGES);
  const scrollRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkScrollButtons = () => {
      setCanScrollPrev(el.scrollLeft > 0);
      setCanScrollNext(el.scrollWidth > el.clientWidth + el.scrollLeft + 1);
    };

    checkScrollButtons();
    el.addEventListener("scroll", checkScrollButtons);

    // ✅ Safely cleanup listener
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollButtons);
    };
  }, [images]);

  const addImage = () => {
    const newImageURL = `https://placehold.co/150?text=Image+${
      images.length + 1
    }`;
    setImages((imgs) => [...imgs, newImageURL]);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 160;
    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="logo-gallery-widget" aria-label="Image Gallery">
      <header className="d-flex align-items-center justify-content-between mb-2">
        <h2 className="gallery-title">Gallery</h2>
        <nav aria-label="Gallery controls">
          <Button
            variant="primary"
            size="sm"
            onClick={addImage}
            className="me-2"
          >
            Add Image
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scroll("prev")}
            className="me-2"
            disabled={!canScrollPrev}
          >
            Prev
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
          >
            Next
          </Button>
        </nav>
      </header>

      {images.length === 0 ? (
        <p>No images to display.</p>
      ) : (
        <div
          className="image-scroll-container"
          ref={scrollRef}
          role="list"
          tabIndex={0}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="gallery-image"
              loading="lazy"
              role="listitem"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default LogoGalleryWidget;
