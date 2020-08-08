import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../../Services/auth.service";

export default function Login() {
  const { register, handleSubmit, errors} = useForm();
  const [loginError, setLoginError] = useState('');
  const history = useHistory();


  // Simple Middleware, to avoid logined users from go to login page
  // useEffect(()=>{
  //   if(AuthService.userData()){
  //       history.push('/');
  //   }
  // }, []);

  // JWT Login Function Handler ==> Login or check errors
  const loginHandler = (email, password) => {
    AuthService.login(email, password)
        .then( data => {
            history.push('/');
        },
        err => {
          // console.log(err.response.data.message);
            setLoginError(err.response.data.message);
        }
    );
}
  const onSubmit = data => loginHandler(data.email, data.password);

  return (
    <>
        <div className="login">
            <h1 className="login-caption"><span className="tweak">L</span>ogin</h1>
            <p className="not-member">Not a member? <Link className= "tweak" to="/register">Sign up Now</Link></p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="controls">
                  <div className="form-group row">
                      <label className="col-sm-2 col-form-label my-form-label">Email</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control-plaintext my-input" 
                                ref={register({ required: true })} name="email"  placeholder="email@example.com"/>
                        {errors.email && <span className="my-form-error">This field is required</span>}
                      </div>
                  </div>

                  <div className="form-group row">
                      <label className="col-sm-2 col-form-label my-form-label">Password</label>
                      <div className="col-sm-10">
                        <input type="password" className="form-control-plaintext my-input" 
                                ref={register({ required: true })} name="password"  placeholder="********"/>
                        {errors.password && <span className="my-form-error">This field is required</span>}
                      </div>
                  </div>
                  <p className="my-form-error">{loginError}</p>
                <button type="submit" className="btn btn-default btn-block btn-custom">Login</button>
            </div>
        </form>
    </>
  );
}