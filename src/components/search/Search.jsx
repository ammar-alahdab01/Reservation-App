import React, { useState } from "react";
import "./search.css";
// Date Range library
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// date-fns library for formating date
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Search(props) {
  const { dateSearch, desSearch, optSearch } = props;
  const [destination, setDestination] = useState(desSearch);
  const [optionBox, setOptionBox] = useState(optSearch);
  const [price, setPrice] = useState({ min: "0", max: "0" });
  const [openDateBox, setOpenDateBox] = useState(false);
  const dateVal = dateSearch === undefined ? [{ startDate: new Date(), endDate: new Date(), key: "selection" }] : dateSearch;
  const [date, setDate] = useState(dateVal);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`${destination}`);
  };
  return (
    <div className="search">
      <div className="searchbox">
        <p className="boxTitle">Search</p>
        <label className="inputLabel" htmlFor="searchBar">
          Destination:
        </label>
        <input type="text" className="searchBar" value={destination} onChange={(e) => setDestination(e.target.value)} id="searchBar" placeholder="Type ypur destination..." />
        <span className="inputLabel">Check-in-date:</span>
        <span className="dateBar" onClick={() => setOpenDateBox(!openDateBox)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDateBox && (
          <DateRange className="dateBoxList" editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
        )}
      </div>
      <div className="optionsBoxList">
        <p className="boxTitle">Options</p>
        <div className="optionBoxItem">
          <label className="inputLabel" htmlFor="min">
            Min price <span>{"(per night)"}:</span>
          </label>
          <input type="number" name="min" id="min" value={price.min} onChange={(e) => setPrice({ ...price, min: e.target.value })} />
        </div>
        <div className="optionBoxItem">
          <label className="inputLabel" htmlFor="max">
            Max price <span>{"(per night)"}:</span>
          </label>
          <input type="number" name="max" id="max" value={price.max} onChange={(e) => setPrice({ ...price, max: e.target.value })} />
        </div>
        <div className="optionBoxItem">
          <label className="inputLabel" htmlFor="adult">
            Adult:
          </label>
          <input type="number" name="adult" id="adult" value={optionBox.adult} onChange={(e) => setOptionBox({ ...optionBox, adult: e.target.value })} />
        </div>
        <div className="optionBoxItem">
          <label className="inputLabel" htmlFor="children">
            Children:
          </label>
          <input type="number" name="children" id="children" value={optionBox.children} onChange={(e) => setOptionBox({ ...optionBox, children: e.target.value })} />
        </div>
        <div className="optionBoxItem">
          <label className="inputLabel" htmlFor="room">
            Room:
          </label>
          <input type="number" name="room" id="room" value={optionBox.room} onChange={(e) => setOptionBox({ ...optionBox, room: e.target.value })} />
        </div>
      </div>
      <button className="serachButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
