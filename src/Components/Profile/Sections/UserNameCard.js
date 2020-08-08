import React from "react";
import AuthService from './../../../Services/auth.service';

export default function UserNameCard() {

  return (
    <div className="card widget-item">
        <h4 className="widget-title">{AuthService.userData() ? AuthService.userData().first_name + ' ' + AuthService.userData().last_name : ''}</h4>
        <div className="widget-body">
            <div className="about-author">
                <p>I Don’t know how? But I believe that it is possible one day if I stay with my dream all time</p>
            </div>
        </div>
    </div>            
  );
}