import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserNameCard from './Sections/UserNameCard';
import TopUsers from "./Sections/TopUsers";


export default function Profile() {

  return (
    <>
        <aside className="widget-area">
            <UserNameCard />
            <div className="card widget-item">
                <h4 className="widget-title"> Active Users </h4>
                <TopUsers />
            </div>
        </aside>
    </>
  );
}