import React, { useEffect, useState } from "react";
import EventStatusDropdown from "../dropdown/EventStatusDropdown";
import PlayerDropdown from "../dropdown/PlayerDropdown";
import TeamDropdown from "../dropdown/TeamDropdown";

const MatchEvent = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setPlayer(player);
    setTeam(team);
    return () => {};
  }, []);

  return (
    <div className="row">
      <div className="col-2">
        <label htmlFor="minutes">Minutes :</label>
        <input
          type="number"
          className="form-control"
          id="minutes"
          required
          value={minutes}
          onChange={(event) => {
            setMinutes(event.target.value);
          }}
        />
      </div>
      <div className="col-3">
        <TeamDropdown
          id="team"
          label="Team :"
          value={team || ""}
          setValue={setTeam}
        />
      </div>
      <div className="col-3">
        <PlayerDropdown
          id="player"
          label="Player :"
          team={team}
          value={player}
          setValue={setPlayer}
        />
      </div>
      <div className="col-3">
        <EventStatusDropdown
          id="status"
          label="Status :"
          value={status}
          setValue={setStatus}
        />
      </div>

      <div className="col-1">
        <button
          className="btn btn-danger my-4"
          onClick={() => {
            props.remove(props.id);
          }}
        >
          <i className="fas fa-window-close" />
        </button>
      </div>
    </div>
  );
};

export default MatchEvent;
