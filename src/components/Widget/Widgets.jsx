import React from "react";
import TextWidget from "./TextWidget";
import LogoGalleryWidget from "./LogoGalleryWidget";
import "./Widgets.css";

function Widgets() {
  return (
    <section className="widgets-wrapper d-flex flex-column justify-content-between">
      <TextWidget />
      <LogoGalleryWidget />
    </section>
  );
}

export default Widgets;
