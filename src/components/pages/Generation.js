import React, { useState, useEffect } from "react";
import axios from "axios";
import GenerationModal from "../modals/GenerationModal";


const Generation = () =>{

  const [generaionData, setGenerationData] = useState([]);
  const [id, setId] = useState(-1);
  const [generation, setGeneraton] = useState({});
  
  const fetchMatch = () => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/team/generation/all";
    axios({
      method: "get",
      url: PROXY_URL + URL,
      data: {
        KEY: "VALUE",
      },
    })
      .then((res) => {
        console.log(res.data.generation)
        setGenerationData(res.data.generation);
        // console.log(generaionData)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchMatch()
  }, []);

  const handleDelete = (idgen) => {
    const token = localStorage.getItem("token");
    axios
      .delete("https://itreuionapi.herokuapp.com/match/" + idgen, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          fetchMatch();
        } else {
          console.log(`Error : {Status: ${res.status}, Msg: ${res.data}`);
          //Show Dialog box หรือ Modal แจ้ง Error
        }
      })
      .catch((err) => console.log(err));
  };

  const RenderGeneration = (props) => {
    return(
      <tr>
        <td>{props.rendergen.number}</td>
        <td>{props.rendergen.teamId}</td>
      <td>
      <button
        type="button"
        className="btn btn-primary "
        data-toggle="modal"
        data-target="#generationModal"
        onClick={() => {
          setId(props.rendergen.id);
          setGeneraton(props.rendergen)
        }}
      >
        Edit
      </button>{" "}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          handleDelete(props.rendergen.id);
        }}
      >
         Delete
      </button>
      </td>
      </tr>
    )
  }


  const generationlist = () => {
    return generaionData.map((rendergen) => {
      return <RenderGeneration rendergen={rendergen} key={rendergen.id} />;
    });
  }
  return (
    <div>
      <GenerationModal
        id={id}
        data={generation}
      ></GenerationModal>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-bold ">
                <i className="fas fa-table paddingtext-icon pr-1"></i>Generation
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-dark shadow">
                <div className="card-header table-shadow">
                  <div className="row">
                    <div className="col-sm-9">
                      <span className="text-header">Generation Management</span>
                    </div>
                    <div className="col-sm-3 padding-top-btn">
                      <button
                        type="button"
                        className="btn btn-block btn-primary float-sm-right"
                        data-toggle="modal"
                        data-target="#generationModal"
                        onClick={() => {
                          setId(-1);
                        }}
                      >
                        <i className="fas fa-plus"></i> Add Generation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 ">
                  <div className="table-responsive mat-elevation-z2">
                    <table className="table table-hover table-striped text-center table-fixed table-shadow">
                      <thead className="thead-dark">
                        <tr>
                          <th width="40%">Generation</th>
                          <th width="84%">Teams</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {generationlist()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generation;
