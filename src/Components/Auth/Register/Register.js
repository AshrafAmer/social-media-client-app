import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../../Services/auth.service";


export default function Register() {
  const { register, handleSubmit, errors} = useForm();
  const [registerError, setRegisterError] = useState('');
  const history = useHistory();


  // Simple Middleware, to avoid logined users from go to register page
  // useEffect(()=>{
  //   if(AuthService.userData()){
  //       history.push('/');
  //   }
  // }, []);

  // JWT Login Function Handler ==> Login or check errors
  const registerHandler = (first_name, last_name, email, gender, password, confirm_password) => {
    AuthService.register(first_name, last_name, email, gender, password, confirm_password)
        .then( data => {
          console.log(data);
          if(data == 200){
            history.push('/');
            window.location.reload(true);
          }
          else{
            setRegisterError("Invalid data, please check password fields");
          }
        },
        err => {
                    console.log(err.response.data.message);
          setRegisterError('Unknown Error occured, please try later.!');
        }
    );
}


  const onSubmit = data => registerHandler(data.first_name, data.last_name, data.email, data.gender, data.password, data.confirm_password);

  return (
    <>
        <div className="login">
            <h1 className="login-caption"><span className="tweak">R</span>egister</h1>
            <p className="not-member">Already has an <Link className= "tweak" to="/login">account</Link></p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="controls">

                  <div className="form-group row">
                      <label className="col-sm-4 col-form-label my-form-label">First Name</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control-plaintext my-input" 
                                ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} name="first_name"  placeholder="First Name"/>
                        {errors.first_name && <span className="my-form-error">This field is required, only characters</span>}
                      </div>
                  </div>

                  <div className="form-group row">
                      <label className="col-sm-4 col-form-label my-form-label">Last Name</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control-plaintext my-input" 
                                ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} name="last_name"  placeholder="Last Name"/>
                        {errors.last_name && <span className="my-form-error">This field is required, only characters</span>}
                      </div>
                  </div>


                  <div className="form-group row">
                      <label className="col-sm-4 col-form-label my-form-label">Email</label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control-plaintext my-input" 
                                ref={register({ required: true })} name="email"  placeholder="email@example.com"/>
                        {errors.email && <span className="my-form-error">This field is required</span>}
                      </div>
                  </div>

                  <div className="form-group row">
                      <label className="col-sm-4 col-form-label my-form-label">Gender</label>
                      <div className="col-sm-8">

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" ref={register({ required: true })} name="gender" id="inlineRadio1" value="m" />
                        <label className="form-check-label my-form-label"> Male</label>
                      </div>
                      <div className="form-check form-check-inline female-option">
                        <input className="form-check-input" type="radio"ref={register({ required: true })}  name="gender" id="inlineRadio2" value="f" />
                        <label className="form-check-label my-form-label">Female</label>
                      </div><br />

                        {errors.gender && <span className="my-form-error">This field is required</span>}
                      </div>
                  </div>

                  <div className="form-group row">
                      <label className="col-sm-4 col-form-label my-form-label">Password</label>
                      <div className="col-sm-8">
                        <input type="password" className="form-control-plaintext my-input" 
                                ref={register({ required: true, minLength: 8 })} name="password"  placeholder="********"/>
                        {errors.password && <span className="my-form-error">This field is required, at least 8 characters</span>}
                      </div>
                  </div>

                  <div className="form-group row">
                      <label className="col-sm-4 col-form-label my-form-label">Confirm Password</label>
                      <div className="col-sm-8">
                        <input type="password" className="form-control-plaintext my-input" 
                                ref={register({ required: true, minLength: 8 })} name="confirm_password"  placeholder="********"/>
                        {errors.confirm_password && <span className="my-form-error">This field is required, at least 8 characters</span>}
                      </div>
                  </div>
                  <p className="my-form-error">{registerError}</p>
                <button type="submit" className="btn btn-default btn-block btn-custom">Register</button>
            </div>
        </form>
    </>
  );
}