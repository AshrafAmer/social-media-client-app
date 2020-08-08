import React, {useEffect, useState} from "react";
import PostsData from '../../../Services/posts.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function TopUsers() {

    let [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {
        PostsData.active().then(res => {
            activeUsers.push(...res);
            setActiveUsers([...res]);
            // console.log('activeUsers', activeUsers);
        });

    }, []);

  return (

    <>
    {activeUsers.length === 0 ? '' :
        (activeUsers.map((user, i) => {
            return (
                <div key={i} className="widget-body">
                    <ul className="like-page-list-wrapper">
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <FontAwesomeIcon icon={faUserAlt} size='1x' color='#CFB53B' style={{margin: '-10px 10px 1px -20px'}}/>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="#"> {user.first_name} {user.last_name} </a></h3>
                            </div>
                        </li>            
                    </ul>
                </div>
            )})
        )}
    </>         
  );
}