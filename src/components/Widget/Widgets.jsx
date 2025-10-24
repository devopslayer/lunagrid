import React from "react";
import TextWidget from "./TextWidget";
import LogoGalleryWidget from "./LogoGalleryWidget";
import "./Widgets.css";

function Widgets() {
  return (
    <section className="widgets-container">
      <article>
        <TextWidget />
      </article>
      <article>
        <LogoGalleryWidget />
      </article>
    </section>
  );
}

export default Widgets;
