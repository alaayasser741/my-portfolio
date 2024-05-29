import React from "react";
import Fullpage from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import "./demos.css";
import { useFirestore } from "../../firebase/useFirestore";
import { Link, useParams } from "react-router-dom";

const Demos = () => {
  const { id } = useParams();
  const { items: project, loading } = useFirestore("projects", "id", id);
  const images = project && project[0].images;
  const video = project && project[0].video;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project || !project[0].images) {
    return (
      <div className="no_project_demo_found">
        <h1>Please Wait until get the project... </h1>
        <Link to="/">You can back to homepage</Link>
      </div>
    );
  }

  return (
    <section>
      <Fullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            {images.map((image, index) => (
              <div className="section" key={index}>
                <img className="image" src={image} draggable="false" alt="" />
              </div>
            ))}

            <div className="section">
              <video
                src={video}
                controls
                width="100%"
                height="100%"
                className="video"
              ></video>
            </div>

            <div className="section demo__header">
              <h1>{project[0].title}</h1>
              <a
                href={project[0].demo}
                target="_blank"
                rel="noreferrer"
                className="demo_link"
              >
                Demo
              </a>
            </div>
          </div>
        );
      }}
    />
    </section>
  );
};

export default Demos;
