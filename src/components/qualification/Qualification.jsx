import React from "react";
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";
import "./qualification.css";
const Qualification = () => {
  return (
    <section className="section qualification">
      <h2 className="section__title" title="Qualification Section Title">
        Qualification
      </h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button  button--flex">
            <UilGraduationCap
              size="1.8rem"
              title="Education"
              className="qualification__icon"
            />
            Education
          </div>
          <span style={{ fontSize: "14px" }}>&</span>
          <div className="qualification__button  button--flex">
            <UilBriefcaseAlt
              size="1.8rem"
              title="Experience"
              className="qualification__icon"
            />
            Experience
          </div>
        </div>
        <div className="qualification__section">
          <div className="qualification__content">
            <div
              className="qualification__data"
              title="Education Computer Science"
            >
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  Egypt - Mansoura University
                </span>
                <div className="qualification__calender">
                  <UilCalendarAlt size="1rem" />
                  2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div
              className="qualification__data"
              title="Experience Frontend Development"
            >
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Development</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calender">
                  <UilCalendarAlt size="1rem" />
                  2021 - Present
                </div>
              </div>
            </div>
            <div
              className="qualification__data"
              title="Education Computer Science"
            >
              <div>
                <h3 className="qualification__title">Junior Frontend</h3>
                <span className="qualification__subtitle">
                  SmartBrand - Remotely - Riyadh Saudi Arabia
                </span>
                <div className="qualification__calender">
                  <UilCalendarAlt size="1rem" />
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
