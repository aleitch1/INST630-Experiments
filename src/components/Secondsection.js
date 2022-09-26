import React, { useState } from 'react'
import Image1 from '../images/healthAndWellness.svg'
import Image2 from '../images/primaryCare.svg'
import Image3 from '../images/covidServices.svg'
import './Secondsection.css'

function Secondsection() {
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);

  return (
    <div className="second-section section">
        <h3 className="sub-heading">What we provide</h3>
        <div className="heading-line"></div>

            <div className="container">
                <div className="main-row">
                    <button className="main-column clickable-section" id="health-and-wellness" onMouseEnter={() => setIsShown1(true)}
                        onMouseLeave={() => setIsShown1(false)}>
                        <img src={Image1} alt="health and wellness"/>
                        <p>
                            Health & Wellness program
                        </p>
                    </button>
                    <button className=" main-column clickable-section" id="primary-care" onMouseEnter={() => setIsShown2(true)}
                        onMouseLeave={() => setIsShown2(false)}> 
                        <img src={Image2} alt ="primary care"/>
                        <p>Primary Care</p>
                    </button>
                    <button className="main-column clickable-section" id="covid-services" onMouseEnter={() => setIsShown3(true)}
                        onMouseLeave={() => setIsShown3(false)}>
                        <img src={Image3} alt="covid services"/>
                        <p>COVID-19 services</p>
                    </button>
                </div>
            {isShown1 &&(
                <div id="extra-info">We aim to promote the holistic well-being of students through these services.</div>
            )}
            {isShown2 &&(
                <div id="extra-info">We offer general medical services including evaluation of health conditions.</div>
            )}
            {isShown3 &&(
                <div id="extra-info">We strive to work hard to keep everyone safe during this pandemic.</div>
            )}
            

        </div>
    </div>
  )
}

export default Secondsection