import React, { useState } from "react";
import "./flightsoffers.css";
import img from "../../imgs/flights/img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
// Date Range library
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// date-fns library for formating date
import { format } from "date-fns";

function FlightsOffers() {
  const [flight, setFlight] = useState({ from: "", to: "" });
  const [openDateBox, setOpenDateBox] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="flightsOffers">
      <div className="planeImg">
        <img src={img} alt="plane" />
      </div>
      <div className="FlightsOffersText">
        <h1>Where are you going ?</h1>
        <div className="flightBox">
          <FontAwesomeIcon className="flightIcons" icon={faPlaneDeparture} />
          <input
            type="text"
            className="flightInput"
            placeholder="From..."
            var={flight.from}
            onChange={(e) => setFlight({ ...flight, [e.target.name]: e.target.value })}
            name="from"
            id="from"
          />
        </div>
        <div className="flightBox">
          <FontAwesomeIcon className="flightIcons" icon={faPlaneArrival} />
          <input
            type="text"
            className="flightInput"
            placeholder="To..."
            var={flight.to}
            onChange={(e) => setFlight({ ...flight, [e.target.name]: e.target.value })}
            name="to"
            id="to"
          />
        </div>
        <div className="flightBox">
          <FontAwesomeIcon className="flightIcons" icon={faCalendarDays} />
          <span className="flightDate" onClick={() => setOpenDateBox(!openDateBox)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDateBox && (
            <DateRange className="dateBox" editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
          )}
        </div>
        <button className="flightBtn">Search</button>
      </div>
    </div>
  );
}

export default FlightsOffers;
