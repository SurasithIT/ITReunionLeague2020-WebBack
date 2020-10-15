import React from "react";
import AdminCard from "../cards/AdminCard";

const Admin = () => {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb">
              <div className="col-sm">
                <h1 className="m-0 text-bold ">
                  <i className="fas fa-tools paddingtext-icon pr-1"></i>Admin
                  Area
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminCard name="Match" iconName="table"></AdminCard>
      <AdminCard name="Team" iconName="users"></AdminCard>
      <AdminCard name="Player" iconName="user"></AdminCard>
      <AdminCard name="Generation" iconName="user"></AdminCard>
    </div>
  );
};

export default Admin;
