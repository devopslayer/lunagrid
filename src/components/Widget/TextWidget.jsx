import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TextWidget.css";

const TAB_CONTENT = {
  about:
    "Hey there! I’m XYZ, your frontend developer passionate about crafting smooth, engaging web experiences. I’ve been working with technologies like React.js, Angular, JavaScript, TypeScript, HTML, CSS, Redux, and Bootstrap. I completed my Diploma in Computer Engineering and went on to earn my Bachelor’s degree in Computer Science and Engineering. Originally from Jamshedpur, I’ve been calling Bengaluru home for nearly a decade now — a city where I’ve studied, worked, and grown both personally and professionally. When I’m not coding, you’ll usually find me exploring new tech trends, improving my design eye, or experimenting with UI animations.",

  experiences:
    "Over the years, I’ve built and collaborated on various web projects ranging from single-page applications to scalable business platforms. My experience as a Software Developer helped me strengthen my foundation in component-based architecture, responsive design, and performance optimization. I’ve worked extensively with frameworks like React and Angular, bringing creative ideas to life with clean, maintainable code and a strong focus on user experience.",

  recommended:
    "If you’re looking for someone who blends creativity with technical precision, I’d be thrilled to collaborate. I take pride in writing readable, efficient code and designing intuitive interfaces that make users feel at home. Colleagues often describe me as detail-oriented and easy to work with — always eager to learn, improve, and contribute to meaningful projects.",
};

function TextWidget() {
  const [key, setKey] = useState("about");

  return (
    <section className="text-widget" aria-label="Information Tabs">
      <Tabs
        id="info-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        justify
        role="tablist"
      >
        {Object.entries(TAB_CONTENT).map(([tabKey, tabContent]) => (
          <Tab
            key={tabKey}
            eventKey={tabKey}
            title={tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
            tabIndex={0}
            role="tab"
            aria-controls={`${tabKey}-panel`}
            id={`${tabKey}-tab`}
          >
            <article
              id={`${tabKey}-panel`}
              role="tabpanel"
              aria-labelledby={`${tabKey}-tab`}
            >
              {tabContent ? (
                <p>{tabContent}</p>
              ) : (
                <p>
                  <em>No content avaiable.</em>
                </p>
              )}
            </article>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}

export default TextWidget;
