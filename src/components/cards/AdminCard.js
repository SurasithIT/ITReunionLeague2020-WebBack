import React from "react";
import { Link } from "react-router-dom";

export default function AdminCard(props) {
  return (
    <div className="col-4">
      <div className="content my-4 mx-2">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-dark shadow">
                <div className="card-header table-shadow">
                  <div className="row">
                    <span className="text-header  ">
                      <i
                        className={`fas fa-${props.iconName} paddingtext-icon pr-1`}
                      ></i>
                      {props.name}
                    </span>
                  </div>
                </div>
                <div className="card-body p-2 text-center">
                  <div className="col-12 text-center">
                    <h5>Body</h5>
                  </div>
                  <Link to={`/${props.name}`}>
                    <button className="btn btn-success">Manage</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
