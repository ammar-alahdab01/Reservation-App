import { faBed, faCalendarDays, faHandHoldingHeart, faPerson, faPlane, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useReducer } from "react";
import "./header.css";
// Date Range library
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// date-fns library for formating date
import { format } from "date-fns";
import { useNavigate, NavLink } from "react-router-dom";

const initialOptions = {
  adult: 1,
  children: 0,
  room: 1,
};

const reducer = (options, action) => {
  switch (action) {
    case "incAdult":
      return { ...options, adult: options.adult + 1 };
    case "decAdult":
      return { ...options, adult: options.adult - 1 };
    case "incChildren":
      return { ...options, children: options.children + 1 };
    case "decChildren":
      return { ...options, children: options.children - 1 };
    case "incRoom":
      return { ...options, room: options.room + 1 };
    case "decRoom":
      return { ...options, room: options.room - 1 };
    case "reset":
      return initialOptions;
    default:
      return options;
  }
};

function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [openDateBox, setOpenDateBox] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptionBox, setOpenOptionBox] = useState(false);
  const [optionBox, dispatch] = useReducer(reducer, initialOptions);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, optionBox, date } });
  };
  const HandleOpneBox = (e) => {
    if ([...e.target.classList].includes("date")) {
      setOpenDateBox(!openDateBox);
      if (openOptionBox) {
        setOpenOptionBox(!openOptionBox);
      }
    } else if ([...e.target.classList].includes("option")) {
      setOpenOptionBox(!openOptionBox);
      if (openDateBox) {
        setOpenDateBox(!openDateBox);
      }
    }
  };

  return (
    <div className="header" style={type === "mini" ? { paddingBottom: "20px" } : {}}>
      <div className={type === "mini" ? "container miniMode" : "container"}>
        <div className="headerLinks">
          <NavLink to="/" className="headerLinksItem">
            <FontAwesomeIcon className="headerLinkIcon" icon={faBed} />
            <span>Stays</span>
          </NavLink>
          <NavLink to="/flights" className="headerLinksItem">
            <FontAwesomeIcon className="headerLinkIcon" icon={faPlane} />
            <span>Flights</span>
          </NavLink>
          <NavLink to="/our-features" className="headerLinksItem">
            <FontAwesomeIcon className="headerLinkIcon" icon={faHandHoldingHeart} />
            <span>Our Features</span>
          </NavLink>
          <NavLink to="/about" className="headerLinksItem">
            <FontAwesomeIcon className="headerLinkIcon" icon={faQuestionCircle} />
            <span>About Us</span>
          </NavLink>
        </div>
        {type !== "mini" && (
          <>
            <h1 className="headrTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headrDescrption">Get rewarded for your travels - unlock instant saving of 10% or more with a free Marbooking account.</p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="Where are going?" className="headerSearchBar" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span className="headerSearchText date" onClick={(e) => HandleOpneBox(e)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDateBox && (
                  <DateRange className="dateBox" editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <div className="headerSearchText option" onClick={(e) => HandleOpneBox(e)}>
                  {`${optionBox.adult} Adults / ${optionBox.children} Children / ${optionBox.room} Room`}
                  {openOptionBox && (
                    <div className="optionsBox">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button className="optionCounterButton" onClick={() => dispatch("decAdult")} disabled={optionBox.adult <= 1}>
                            -
                          </button>
                          <span className="optionCounterNumber">{optionBox.adult}</span>
                          <button className="optionCounterButton" onClick={() => dispatch("incAdult")}>
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button className="optionCounterButton" onClick={() => dispatch("decChildren")} disabled={optionBox.children <= 0}>
                            -
                          </button>
                          <span className="optionCounterNumber">{optionBox.children}</span>
                          <button className="optionCounterButton" onClick={() => dispatch("incChildren")}>
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button className="optionCounterButton" onClick={() => dispatch("decRoom")} disabled={optionBox.room <= 1}>
                            -
                          </button>
                          <span className="optionCounterNumber">{optionBox.room}</span>
                          <button className="optionCounterButton" onClick={() => dispatch("incRoom")}>
                            +
                          </button>
                        </div>
                      </div>
                      <button className="resetOptions" onClick={() => dispatch("reset")}>
                        Reset
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="headerSearchItem headerBtn">
                <button className="headerButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
