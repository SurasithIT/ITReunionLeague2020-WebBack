import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamDropdown from "../dropdown/TeamDropdown";
import MatchEvent from "../event/MatchEvent";
import StadiumDropdown from "../dropdown/StadiumDropdown";

const MatchModal = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [kickOffTime, setKickOffTime] = useState(new Date());
  const [stadiumId, setStadiumId] = useState(0);
  const [homeTeam, setHomeTeam] = useState(0);
  const [awayTeam, setAwayTeam] = useState(0);
  const [homeScores, setHomeScores] = useState(0);
  const [awayScores, setAwayScores] = useState(0);
  const [refereeTeam, setRefereeTeam] = useState(0);
  const [teadmDropdown, setTeadmDropdown] = useState([]);
  const getDropdownTeam = () => {
    axios
      .get("https://itreuionapi.herokuapp.com/team/all")
      .then((res) => {
        console.log(res);
        if (res.data) {
          setTeadmDropdown(res.data.teams);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    if (id !== props.id) {
      if (props.id === -1) {
        setTitle("Add");
        setKickOffTime(new Date());
        setHomeScores(0);
        setAwayScores(0);
      } else {
        setTitle("Edit");
        setKickOffTime(props.data.Kickoff);
        setStadiumId(props.data.StadiumId);
        setHomeTeam(props.data.HomeTeam);
        setAwayTeam(props.data.AwayTeam);
        setHomeScores(+props.data.HomeScores);
        setAwayScores(+props.data.AwayScores);
        setRefereeTeam(props.data.RefereeTeam);
      }
      setId(props.id);
    }
    return () => {};
  }, [id, props]);

  const hanDleSubmit = () => {
    if (title === "Add") {
      const match = {
        Kickoff: kickOffTime,
        HomeScores: homeScores,
        AwayScores: awayScores,
        StadiumId: stadiumId,
        HomeTeamId: homeTeam,
        AwayTeamId: awayTeam,
        RefereeTeamId: refereeTeam,
      };
      const token = localStorage.getItem("token");
      axios
        .post("https://itreuionapi.herokuapp.com/match/", match, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.status);
          } else {
            console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
            //Show Dialog box หรือ Modal แจ้ง Error
          }
        })
        .catch((err) => console.log(err));
    }
    // else{
    //   const team = {
    //     name: generation
    //   }
    //   const token = localStorage.getItem('token')
    //   axios.patch('https://itreuionapi.herokuapp.com/team/' + idteam , team, {
    //     headers: {
    //       Authorization: token}
    //   })
    //   .then(res => {
    //     if (res.status === 200) {

    //     } else {
    //       console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
    //       //Show Dialog box หรือ Modal แจ้ง Error
    //     }
    //   })
    //   .catch((err) => console.log(err))
    // }
  };

  return (
    <div>
      <div>
        <div
          className="modal fade bd-example-modal-lg"
          id="matchModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="matchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="matchModalLabel">
                  {title} Match
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="match-detail">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-3">
                        <label htmlFor="kickOffTime">Kick off :</label>
                        <input
                          type="time"
                          className="form-control"
                          id="kickOffTime"
                          required
                          value={
                            new Date(
                              Date.parse(kickOffTime)
                            ).toLocaleTimeString("th-TH", {
                              hour12: false,
                              hour: "2-digit",
                              minute: "2-digit",
                            }) || "07:00"
                          }
                          onChange={(event) => {
                            console.log(event);
                            console.log(kickOffTime);
                            console.log(
                              new Date(
                                Date.parse(kickOffTime)
                              ).toLocaleTimeString("th-TH", {
                                hour12: false,
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            );
                            // setKickOff(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-3">
                        <StadiumDropdown
                          id="stadiumId"
                          label="Stadium :"
                          value={stadiumId || ""}
                          setValue={setStadiumId}
                        />
                      </div>

                      <div className="col-6">
                        {/* <label htmlFor="refereeTeam">Referee Team :</label>
                        <select
                          className="form-control"
                          id="refereeTeam"
                          required
                          value={refereeTeam}
                          onChange={(event) => {
                            setRefereeTeam(event.target.value);
                          }}
                        >
                          {teadmDropdown.map((val) => {
                            return (
                              <option key={val.id} value={val.id}>
                                {val.name}
                              </option>
                            );
                          })}
                        </select> */}
                        <TeamDropdown
                          id="refTeam"
                          label="Referee Team :"
                          value={refereeTeam || ""}
                          setValue={setRefereeTeam}
                        />
                      </div>

                      <div className="col-4">
                        {/* <label htmlFor="homeTeam">Home Team :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="homeTeam"
                          required
                          value={homeTeam}
                          onChange={(event) => {
                            setHomeTeam(event.target.value);
                          }}
                        /> */}
                        <TeamDropdown
                          id="homeTeam"
                          label="Home Team :"
                          value={homeTeam || ""}
                          setValue={setHomeTeam}
                        />
                      </div>

                      <div className="col-2">
                        <label htmlFor="homeScores">scores :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="homeScores"
                          required
                          value={homeScores}
                          onChange={(event) => {
                            setHomeScores(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-2">
                        <label htmlFor="awayScores">scores :</label>
                        <input
                          type="number"
                          className="form-control"
                          id="awayScores"
                          required
                          value={awayScores}
                          onChange={(event) => {
                            setAwayScores(event.target.value);
                          }}
                        />
                      </div>

                      <div className="col-4">
                         
                        {/* <label htmlFor="awayTeam">Away Team :</label>
                        <input
                          type="text"
                          className="form-control"
                          id="awayTeam"
                          required
                          value={awayTeam}
                          onChange={(event) => {
                            setAwayTeam(event.target.value);
                          }}
                        /> */}
                        <TeamDropdown
                          id="awayTeam"
                          label="Away Team :"
                          value={awayTeam}
                          setValue={setAwayTeam}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="match-event">
                  <MatchEvent homeTeam={homeTeam} awayTeam={awayTeam} />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={hanDleSubmit}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchModal;
