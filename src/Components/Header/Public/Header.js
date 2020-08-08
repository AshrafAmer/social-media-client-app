import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AuthService from "../../../Services/auth.service";

export default function Header() {
  const history = useHistory();


  // Simple Middleware, to avoid logined users from go to login page
  useEffect(()=>{
    if(AuthService.userData()){
        history.push('/');
        window.location.reload(true);
    }
  }, []);

  return (
    <></>
  );
}