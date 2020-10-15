import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const PlayerDropdown = (props) => {
  const [list, setList] = useState([
    { id: "", name: "-- กรุณาเลือก --" },
    { id: -1, name: "นักเตะยืมตัว" },
  ]);
  const getDropdownData = () => {
    axios
      .get("https://itreuionapi.herokuapp.com/team/" + props.team)
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          for (let i = 0; i < res.data.player.lenght; i++) {
            let player = {
              id: res.data.player[i].id,
              name: `${res.data.player[i].FirstNameTh} ${res.data.player[i].LastNameTh}`,
            };
            list.push(player);
          }
          console.log(list);
          //   setList(list.concat(res.data.player));
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
    getDropdownData();
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
                {val.name}
              </option>
            );
          })}
      </select>
    </Fragment>
  );
};

export default PlayerDropdown;
