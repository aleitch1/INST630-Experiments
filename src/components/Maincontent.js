import React from 'react'
import './Maincontent.css'
import Bgimg from '../images/front_new.jpg'
import Datetime from '../functions/Datetime'
import Directory from '../data.json';

function Maincontent() {
  return (
    <div className="main-content">
        <div id="background-image">
            <img src={Bgimg} alt="Background" id="bg-image"/>
        </div>
        <div className="container">
            <div id="day-date-time"><Datetime /> </div>
            <h1>University Health Centre</h1>
            <h2>Leading the way to healthier terps</h2>

            <div className="main-row">
                <div className="main-column">
                    <div className="line"> </div>
                    <h4>Emergency lines</h4>
                    
                    {/* Fetching Json Data */}
                    <div className="emergency-lines">
                    {
                        Directory.map( (record,key) => {
                            return(
                                <div className="row" key={key}>
                                    <div className="column"> {record.category}</div>
                                    <div className="column"> {record.phone}</div>
                                </div>  
                            )
                        })
                    }
                    <button className="primary">Telemedicine Appointments</button>
                    </div>
                </div>
                <div className="main-column">
                    <div className="line"> </div>
                    <h4>Hours of operation</h4>
                    <div className="row">
                        <div className="column">Monday - Friday </div>
                        <div className="column">8am - 5pm</div>
                    </div>
                    <div className="row">
                        <div className="column">Saturday</div>
                        <div className="column">9am - 12pm</div>
                    </div>
                    <div className="row">
                        <div className="column">Sunday</div>
                        <div className="column">CLOSED</div>
                    </div>
                    <div className="info">
                        Limited services are only available until further notice.
                    </div>
                </div>
                <div className="main-column">
                    <div className="line"> </div>
                    <h4>COVID</h4>
                    <button  className="primary" id="heal-line-button">Heal Line</button>
                    <button  className="primary" id="covid-operations">UHC COVID-19 Operations</button>
                    <button  className="primary" id="vaccine-info">COVID-19 Vaccine Information</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Maincontent