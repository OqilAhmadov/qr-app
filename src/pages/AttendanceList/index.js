import React from "react";
import "./style.scss";
import SearchIcon from "assets/images/icon-search.svg";

const AttendanceList = () => {
  return (
    <div className="list">

      <div className="list__search">
        <div className="input">
          <img src={SearchIcon} alt="searchIcon" />
          <input type="text" placeholder="search" />
        </div>
        <button type="button">Cancel</button>
      </div>
      <div className="list__items">
        <div className="item">
          <h3>Lastname First name</h3>
          <span>5A</span>
        </div>
        <span className="attending">Attending</span>
      </div>
      <div className="list__items activeItems">
        <div className="item">
          <h3>Lastname First name</h3>
          <span>5A</span>
        </div>
        <span className="notAttending">No Attending</span>
      </div>
      <div className="list__items">
        <div className="item">
          <h3>Lastname First name</h3>
          <span>5A</span>
        </div>
        <span className="verified">Verified</span>
      </div>
      <ul className="list__letters">
        <li className="letter active">A</li>
        <li className="letter">B</li>
        <li className="letter">C</li>
        <li className="letter">D</li>
        <li className="letter">E</li>
        <li className="letter">F</li>
        <li className="letter">G</li>
        <li className="letter">H</li>
        <li className="letter">I</li>
      </ul>
    </div>
  );
};

export default AttendanceList;
