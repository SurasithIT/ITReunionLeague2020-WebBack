import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const PlayerDropdown = (props) => {
  const initList = [
    { id: "", name: "-- กรุณาเลือก --" },
    { id: -1, name: "นักเตะยืมตัว" },
  ];
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...initList, ...props.players]);
  }, []);

  useEffect(() => {
    setList([...initList, ...props.players]);
  }, [props.players]);

  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className="form-control"
        id={props.id}
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

export default PlayerDropdown;
