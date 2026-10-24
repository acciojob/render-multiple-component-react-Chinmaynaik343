
import React from "react";

function App() {
  const projects = [
    {
      name: "Smart Emergency Response System",
      description:
        "A web application to report emergencies and track incident resolution."
    },
    {
      name: "EV Charging Station Finder",
      description:
        "A web application to find nearby EV charging stations and check availability."
    },
    {
      name: "Online Shopping Cart",
      description:
        "An application that allows users to browse products and manage their shopping cart."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">
            {project.name}
          </h1>

          <h6 data-ns-test="project-description">
            {project.description}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default App;
