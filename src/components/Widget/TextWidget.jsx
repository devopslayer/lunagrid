import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TextWidget.css";

const TAB_CONTENT = {
  about: "This is the About Me content. Add your details here.",
  experiences: "Here are your Experiences details",
  recommended: "Here are your Recommendations",
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
