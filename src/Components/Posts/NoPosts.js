import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function NoPosts() {

  return (
    <>
        <div className="card">
            <div className="post-title d-flex align-items-center">
                <div className="profile-thumb">
                    <FontAwesomeIcon size='2x' icon={faPlayCircle} color='#CFB53B' style={{marginRight: '25px'}} />
                </div>

                <div className="posted-author">
                    <h6 className="author"><a href="">Welcome to Our site</a></h6>
                    <span className="post-time">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date())}</span>
                </div>
            </div>
            <div className="post-content">
                <p className="post-desc">
                    No posts added till now, add new posts and become a conversation starter...
                </p>
            </div>
        </div>
    </>
  );
}