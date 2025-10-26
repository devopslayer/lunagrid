import React, { useState, useRef, useEffect } from "react";
import {
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
  FaRegQuestionCircle,
  FaGripVertical,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import rectangle from "../../assets/images/rectangle.svg";
import "./LogoGalleryWidget.css";

const DEFAULT_IMAGES = [
  rectangle,
  rectangle,
  rectangle,
];

function LogoGalleryWidget() {
  const [images, setImages] = useState(DEFAULT_IMAGES);
  const scrollRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const checkScroll = () => {
      setCanScrollPrev(el.scrollLeft > 0);
      setCanScrollNext(el.scrollWidth > el.clientWidth + el.scrollLeft + 1);
    };
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [images]);

  const handleAddImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImages((prev) => [...prev, event.target.result]);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="logo-gallery-widget" aria-label="Logo Gallery">
        <div className="widget-header d-flex flex-row align-items-start gap-1">
          <div className="icon-column d-flex flex-column align-items-center justify-content-start">
            <FaRegQuestionCircle
              style={{ fill: "url(#iconGradient)" }}
              className="info-icon"
            />
            <FaGripVertical className="grid-icon" />
            <svg width="0" height="0">
              <linearGradient id="iconGradient" x1="1" y1="0" x2="1" y2="1">
                <stop stopColor="#a3adba" offset="0%" />
                <stop stopColor="#4a4e54" offset="100%" />
              </linearGradient>
            </svg>
          </div>

          <div className="gallery-content">
            <header className="gallery-header d-flex align-items-center justify-content-between">
              <h2 className="gallery-title">Gallery</h2>
              <div className="gallery-controls d-flex align-items-center gap-4 mx-2">
                <Button className="add-btn" onClick={handleAddImageClick}>
                  <FaPlus /> Add Image
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                <div className="nav-buttons d-flex align-items-center gap-2">
                  <Button
                    className="nav-btn"
                    onClick={() => scroll("prev")}
                    disabled={!canScrollPrev}
                  >
                    <FaArrowLeft />
                  </Button>
                  <Button
                    className="nav-btn"
                    onClick={() => scroll("next")}
                    disabled={!canScrollNext}
                  >
                    <FaArrowRight />
                  </Button>
                </div>
              </div>
            </header>

            <div className="gallery-images" ref={scrollRef}>
              {images.map((src, i) => (
                <div key={i} className="gallery-item">
                  <img src={src} alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="dash"></div>
    </>
  );
}

export default LogoGalleryWidget;
