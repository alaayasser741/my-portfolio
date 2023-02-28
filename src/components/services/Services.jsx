import React, { useState } from 'react';
import { UilArrowRight, UilTimes, UilCheckCircle, UilWebGrid, UilArrow, UilEdit } from '@iconscout/react-unicons';
import './services.css';
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTap = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="Services">
      <h2 className="section__title" title='Services Section Title'>Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <UilWebGrid size="2rem" className="services__icon" />
            <h3 className="service__title" title='Product Designer'>Product <br />Designer</h3>
          </div>

          <span className="services__button" onClick={() => { toggleTap(1) }}>View More<UilArrowRight className="services__button-icon" size="1rem" /></span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <UilTimes className="services__modal-close" onClick={() => toggleTap(0)}/>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">Providing quality work to client and companies.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">Deal with any devices</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <UilArrow size="2rem" className="services__icon" />
            <h3 className="service__title" title='Ui/Ux Designer'>UI/UX <br />Designer</h3>
          </div>

          <span className="services__button" onClick={() => { toggleTap(2) }}>View More <UilArrowRight className="services__button-icon" size="1rem" /></span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <UilTimes className="services__modal-close" onClick={() => toggleTap(0)} />
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">Providing quality work to client and companies.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">Deal with any devices</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <UilEdit size="2rem" className="services__icon" />
            <h3 className="service__title" title='Visual Designer'>Visual <br />Designer</h3>
          </div>

          <span className="services__button" onClick={() => { toggleTap(3) }}>View More <UilArrowRight className="services__button-icon" size="1rem" /></span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <UilTimes className="services__modal-close" onClick={() => toggleTap(0)} />
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">Providing quality work to client and companies.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">Deal with any devices</p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle size="1.1rem" className="services__modal-icon" />
                  <p className="services__modal-info">I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services