import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const EventStatusDropdown = (props) => {
  const [list, setList] = useState([{ id: "", nameEn: "-- กรุณาเลือก --" }]);
  const getDropdownStatus = () => {
    axios
      .get("https://itreuionapi.herokuapp.com/matchevent/status/all")
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setList(list.concat(res.data.status));
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    getDropdownStatus();
  }, []);

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
                {val.nameEn}
              </option>
            );
          })}
      </select>
    </Fragment>
  );
};

export default EventStatusDropdown;
