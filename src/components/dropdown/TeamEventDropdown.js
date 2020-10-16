import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const TeamEventDropdown = (props) => {
  const [list, setList] = useState([{ id: 0, name: "--- กรุณาเลือก ---" }]);
  const getDropdownData = () => {
    //if send value from MatchEvent Modal will True
    setList(list.concat(props.teams));
  };

  useEffect(() => {
    getDropdownData();
  }, []);

  return (
    <Fragment>
      <label htmlFor={props.index + props.id}>{props.label}</label>
      <select
        className="form-control"
        id={props.index + props.id}
        required
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      >
        {list &&
          list.map((val) => {
            return (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            );
          })}
      </select>
    </Fragment>
  );
};

export default TeamEventDropdown;
