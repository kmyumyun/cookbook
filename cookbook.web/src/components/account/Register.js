import React from "react";
import { useForm } from "react-hook-form";
import "./css/FormGrid.css";
import loc from "../../resources/lang/localization";
import AuthService from "../../services/auth/auth.service";

function RegisterForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log("Register data is:");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="wrapper">
        <div class="row">
          <div class="box-label pt-10">
            <label class="f-label" htmlFor="username">
              {loc.username}*
            </label>
          </div>
          <div class="box-input pt-10">
            <input
              class="f-input"
              id="username"
              name="username"
              type="text"
              ref={register({ required: true, minLength: 3, maxLength: 35 })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.username?.type === "required" && loc.required.format([loc.username])}
              {errors.username?.type === "minLength" && "Too short"}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="lastname">{loc.firstname}*</label>
          </div>
          <div class="box-input">
            <input
              class="f-input"
              id="firstname"
              name="firstname"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation"></div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="lastname">{loc.lastname}*</label>
          </div>
          <div class="box-input">
            <input
              class="f-input"
              id="lastname"
              name="lastname"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation"></div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="email">{loc.email}*</label>
          </div>
          <div class="box-input">
            <input
              class="f-input"
              id="email"
              name="email"
              type="email"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation"></div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="password">{loc.password}*</label>
          </div>
          <div class="box-input">
            <input
              class="f-input"
              id="password"
              name="password"
              type="password"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation"></div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="repassword">{loc.repassword}*</label>
          </div>
          <div class="box-input">
            <input
              class="f-input"
              id="repassword"
              name="repassword"
              type="password"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation"></div>
        </div>
      </div>
      <div class="btn-field">
        <input class="btn-sbmt" type="submit" value={loc.signup} />
      </div>
    </form>
  );
}

class Register extends React.Component {
  render() {
    return <RegisterForm />;
  }
}

export default Register;
