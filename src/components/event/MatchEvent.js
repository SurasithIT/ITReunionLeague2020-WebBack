import React, { useEffect, useState } from "react";
import EventStatusDropdown from "../dropdown/EventStatusDropdown";
import PlayerDropdown from "../dropdown/PlayerDropdown";
import TeamDropdown from "../dropdown/TeamDropdown";

const MatchEvent = (props) => {

  const [eventStatus, setEventStatus] = useState({
    id: 0,
    Minutes: 0,
    playerId: "",
    matchId: "",
    teamId: "",
    EventStatusId: ""
  })

  const setTeam =(value)=>{
    setEventStatus(prev=>{
      return ({
        ...prev,
        teamId:value
      })
    })
  }
  const setPlayer=(value)=>{
    setEventStatus(prev=>{
      return ({
        ...prev,
        playerId:value
      })
    })
  }
  const setEventState=(value)=>{
    setEventStatus(prev=>{
      return ({
        ...prev,
        EventStatusId:value
      })
    })
  }
  const setMinutes=(value)=>{
    setEventStatus(prev=>{
      return ({
        ...prev,
        Minutes:value
      })
    })
  }

  
  // const { id, Minutes, playerId, matchId, teamId, EventStatusId} = props.data
  // const [minutes, setMinutes] = useState(0);
  // const [team, setTeam] = useState("");
  // const [player, setPlayer] = useState("");
  // const [status, setStatus] = useState("");


  useEffect(() => {
    
    setEventStatus(props.data)
    
    //return () => {};
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
          value={eventStatus.Minutes}
          onChange={(event) => {
            setMinutes(event.target.value);
          }}
        />
      </div>
      <div className="col-3">
        <TeamDropdown
          id="team"
          label="Team :"
          teams={props.filterTeam}
          value={eventStatus.teamId || ""}
          setValue={setTeam}
        />
      </div>
      <div className="col-3">
        <PlayerDropdown
          id="player"
          label="Player :"
          team={eventStatus.teamId}
          value={eventStatus.playerId}
          setValue={setPlayer}
        />
      </div>
      <div className="col-3">
        <EventStatusDropdown
          id="status"
          label="Status :"
          value={eventStatus.EventStatusId}
          setValue={setEventState}
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
