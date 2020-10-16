import React, { useEffect, useState } from "react";
import EventStatusDropdown from "../dropdown/EventStatusDropdown";
import PlayerDropdown from "../dropdown/PlayerDropdown";
import TeamDropdown from "../dropdown/TeamDropdown";
import TeamEventDropdown from "../dropdown/TeamEventDropdown";
import axios from "axios";

const MatchEvent = (props) => {
  const [eventStatus, setEventStatus] = useState({
    id: 0,
    Minutes: 0,
    playerId: "",
    matchId: "",
    teamId: "",
    EventStatusId: "",
  });
  const [players, setPlayers] = useState([]);
  const [playersDropdown, setPlayersDropdown] = useState([]);

  const getPlayerDropdownData = () => {
    // const playersUrl = "https://itreuionapi.herokuapp.com/team/"
    const playersUrl = "https://itreuionapi.herokuapp.com/player/dropdown";
    axios
      .get(playersUrl)
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setPlayers(res.data);
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    // }
  };

  const setTeam = (value) => {
    setEventStatus((prev) => {
      return {
        ...prev,
        teamId: +value,
      };
    });
  };

  const setPlayer = (value) => {
    setEventStatus((prev) => {
      return {
        ...prev,
        playerId: +value,
      };
    });
  };
  const setEventState = (value) => {
    setEventStatus((prev) => {
      return {
        ...prev,
        EventStatusId: +value,
      };
    });
  };
  const setMinutes = (value) => {
    setEventStatus((prev) => {
      return {
        ...prev,
        Minutes: +value,
      };
    });
  };

  // const { id, Minutes, playerId, matchId, teamId, EventStatusId} = props.data
  // const [minutes, setMinutes] = useState(0);
  // const [team, setTeam] = useState("");
  // const [player, setPlayer] = useState("");
  // const [status, setStatus] = useState("");

  useEffect(() => {
    setEventStatus(props.data);
    getPlayerDropdownData();

    //return () => {};
  }, []);

  useEffect(() => {
    props.setEvent(props.index, eventStatus);
    console.log(eventStatus);
    let _players = players.filter((val) => val.teamId === eventStatus.teamId);
    setPlayersDropdown(_players);
    props.calScore();
  }, [props.index, eventStatus]);

  return (
    <div className="row">
      <div className="col-2">
        <label htmlFor="minutes">Minutes :</label>
        <input
          type="number"
          className="form-control"
          id={"minutes-" + props.index}
          required
          value={eventStatus.Minutes}
          onChange={(event) => {
            setMinutes(event.target.value);
          }}
        />
      </div>
      <div className="col-3">
        <TeamEventDropdown
          index={props.index}
          id={"team" + props.index}
          label="Team :"
          teams={props.filterTeam}
          value={eventStatus.teamId || ""}
          setValue={setTeam}
        />
      </div>
      <div className="col-3">
        <PlayerDropdown
          id={"player-" + props.index}
          label="Player :"
          team={eventStatus.teamId}
          players={playersDropdown}
          value={eventStatus.playerId || ""}
          setValue={setPlayer}
        />
      </div>
      <div className="col-3">
        <EventStatusDropdown
          id={"status-" + props.index}
          label="Status :"
          value={eventStatus.EventStatusId}
          setValue={setEventState}
        />
      </div>

      <div className="col-1">
        <button
          className="btn btn-danger my-4"
          onClick={() => {
            props.remove(props.index);
          }}
        >
          <i className="fas fa-window-close" />
        </button>
      </div>
    </div>
  );
};

export default MatchEvent;
