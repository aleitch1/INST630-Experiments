import React from 'react';

//Function to format date
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
  
    // for the hour '0' which should be '12'
    if (hours) {
      hours = hours;
    } else {
      hours = 12;
    }
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }  


function Datetime() {
    var daysOfTheWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];    
    var today = new Date();
    var day = daysOfTheWeek[today.getDay()];
    var date =
        today.getDate() +
        " " +
        today.toLocaleString("default", { month: "short" }) +
        ", " +
        today.getFullYear();
    var dateTime = day + ", " + date + ", " + formatAMPM(today);
    return (
        dateTime
    )
}

export default Datetime