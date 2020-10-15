import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamDropdown from "../dropdown/TeamDropdown";
import { trackPromise } from "react-promise-tracker";

const GenerationModal = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState();
  const [generation, setGeneration] = useState();
  const [team, setTeam] = useState();
  const [idgeneration, setIdgeneration] = useState();

  useEffect(() => {
    if (id !== props.id) {
      if (props.id === -1) {
        setTitle("Add");
      } else {
        setTitle("Edit");
        console.log(props.data.id);
        setGeneration(props.data.number);
        setIdgeneration(props.data.id);
        setTeam(props.data.teamId);
      }
      setId(props.id);
    }
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, [id, props.id, props.data]);

  const hanDleSubmit = () => {
    if (title === "Add") {
      const newgeneration = {
        number: generation,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .post(
            "https://itreuionapi.herokuapp.com/team/generation",
            newgeneration,
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              console.log(res.status);
            } else {
              console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
              //Show Dialog box หรือ Modal แจ้ง Error
            }
          })
          .catch((err) => console.log(err))
      );
    } else {
      const editgeneration = {
        number: generation,
      };
      const token = localStorage.getItem("token");
      trackPromise(
        axios
          .patch(
            "https://itreuionapi.herokuapp.com/team/generation/" + idgeneration,
            editgeneration,
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
            } else {
              console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
              //Show Dialog box หรือ Modal แจ้ง Error
            }
          })
          .catch((err) => console.log(err))
      );
    }
  };
  console.log(props);
  return (
    <div>
      <div>
        <div
          className="modal fade bd-example-modal-lg"
          id="generationModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="playerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="playerModalLabel">
                  {title} Generation
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
                <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="generation">Generation :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="generation"
                        required
                        value={generation || ""}
                        onChange={(event) => {
                          setGeneration(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <TeamDropdown
                        id="team"
                        label="Team :"
                        value={team || ""}
                        setValue={setTeam}
                      />
                      {/* <label htmlFor="team">Team :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="team"
                        required
                        value={generation}
                        onChange={(event) => {
                          setGeneration(event.target.value);
                        }}
                      /> */}
                    </div>
                  </div>
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

export default GenerationModal;
