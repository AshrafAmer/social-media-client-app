import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './include/header.css';
import { Link, useHistory } from "react-router-dom";
import AuthService from './../../../Services/auth.service';


export default function Header({activeLink}) {

    const history = useHistory();

    const logout = () => {
        AuthService.logout()
            .then( data => {
                history.push('/login');
            },
            err => {
                console.log(err.response.data.message);
            }
        );
    }
    
  return (
    <>
        <header>
            <div className="header-top sticky bg-white d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="header-top-navigation">
                                <nav>
                                    <ul>
                                        <li className={activeLink === 'all' ? 'active' : ''}><Link to="/">home</Link></li>
                                        <li className={activeLink === 'timeline' ? 'active' : ''}>
                                            <Link to="/timeline">TimeLine</Link>
                                        </li>   
                                        <li className="logout-style" onClick={()=>{logout()}}><a href="#">Logout</a></li>                             
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
}