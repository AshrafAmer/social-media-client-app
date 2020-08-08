import React, { Component } from "react";
import Header from './../Header/Public/Header';
import LayoutCanvas from './include/LayoutCanvas';
import './include/layout.css';
import Login from "./Login/Login";
import Register from "./Register/Register";

class Layout extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div id="login-box">
                        {this.props.load === 'login' ? (
                            <Login />
                        ) : (
                            <Register />
                        )}
                    </div>
                </div>
                <LayoutCanvas />
            </>
        );
    }
};

export default Layout;