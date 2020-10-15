import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const GenerationDropdown = (props) => {
  const [list, setList] = useState([{ id: "", number: "--- กรุณาเลือก ---" }]);
  const getDropdownTeam = () => {
    axios
      .get("https://itreuionapi.herokuapp.com/team/generation/all")
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setList(list.concat(res.data.generation));
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
    getDropdownTeam();
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
                {val.number}
              </option>
            );
          })}
      </select>
    </Fragment>
  );
};

export default GenerationDropdown;
