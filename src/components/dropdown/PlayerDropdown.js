import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const PlayerDropdown = (props) => {
  const [list, setList] = useState([
    { id: "", name: "-- กรุณาเลือก --" },
    { id: -1, name: "นักเตะยืมตัว" },
  ]);
  const getDropdownData = () => {
    const playersUrl = "https://itreuionapi.herokuapp.com/team/"
    console.log("props.team =>", props.teams);
    if (props.teams) {
        const homePlayerReq = axios.get(playersUrl+props.teams[0].id) || []
        const awayPlayerReq = axios.get(playersUrl+props.teams[1].id) || []
        axios.all([homePlayerReq, awayPlayerReq]).then(axios.spread((...responses) => {
          let players = responses[0].player.concat(responses[1].player)
          players = players.map(player=> {
            return ({
              id: player.id,
              name: player.name
            })
          })
          console.log(players);
          
          setList(prev=>([...prev, ...players]))

          // use/access the results 
        })).catch(errors => {
          // react on errors.
          console.log(errors);
        })
    } else {
      axios
        .get(playersUrl+ props.team)
        .then((res) => {
          console.log(res);
          if (res.status === 200 && res.data) {
            for (let i = 0; i < res.data.player.lenght; i++) {
              let player = {
                id: res.data.player[i].id,
                name: `${res.data.player[i].FirstNameTh} ${res.data.player[i].LastNameTh}`,
              };
              //setList({ ...list, player });
            }
            console.log(res.data);
            //   setList(list.concat(res.data.player));
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
  };

  useEffect(() => {
    getDropdownData();
  }, [list]);

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
