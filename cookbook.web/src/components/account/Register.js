import React from "react";
import { useForm } from "react-hook-form";
import "./css/FormGrid.css";
import loc from "../../resources/lang/localization";
import AuthService from "../../services/auth/auth.service";

function RegisterForm() {
  const { register, watch, handleSubmit, errors, formState } = useForm();
  const { isSubmitted } = formState;
  const watchPassword = watch("password");
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
              className={
                "f-input" +
                (errors.username && isSubmitted ? " invalid" : "") +
                (!errors.username && isSubmitted ? " valid" : "")
              }
              id="username"
              name="username"
              type="text"
              ref={register({ required: true, minLength: 3, maxLength: 35 })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.username?.type === "required" &&
                loc.formatString(loc.required, loc.username)}
              {errors.username?.type === "minLength" &&
                loc.formatString(loc.minLength, loc.username, "3")}
              {errors.username?.type === "maxLength" &&
                loc.formatString(loc.maxLength, loc.username, "35")}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="firstname">{loc.firstname}*</label>
          </div>
          <div class="box-input">
            <input
              className={
                "f-input" +
                (errors.firstname && isSubmitted ? " invalid" : "") +
                (!errors.firstname && isSubmitted ? " valid" : "")
              }
              id="firstname"
              name="firstname"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.firstname?.type === "required" &&
                loc.formatString(loc.required, loc.firstname)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="lastname">{loc.lastname}*</label>
          </div>
          <div class="box-input">
            <input
              className={
                "f-input" +
                (errors.lastname && isSubmitted ? " invalid" : "") +
                (!errors.lastname && isSubmitted ? " valid" : "")
              }
              id="lastname"
              name="lastname"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.lastname?.type === "required" &&
                loc.formatString(loc.required, loc.lastname)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="email">{loc.email}*</label>
          </div>
          <div class="box-input">
            <input
              className={
                "f-input" +
                (errors.email && isSubmitted ? " invalid" : "") +
                (!errors.email && isSubmitted ? " valid" : "")
              }
              id="email"
              name="email"
              type="email"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.email?.type === "required" &&
                loc.formatString(loc.required, loc.email)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="password">{loc.password}*</label>
          </div>
          <div class="box-input">
            <input
              className={
                "f-input" +
                (errors.password && isSubmitted ? " invalid" : "") +
                (!errors.password && isSubmitted ? " valid" : "")
              }
              id="password"
              name="password"
              type="password"
              ref={register({ required: true, minLength: 6 })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.password?.type === "required" &&
                loc.formatString(loc.required, loc.password)}
              {errors.password?.type === "minLength" &&
                loc.formatString(loc.minLength, loc.password, "6")}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label htmlFor="repassword">{loc.repassword}*</label>
          </div>
          <div class="box-input">
            <input
              className={
                "f-input" +
                (errors.repassword?.type === "passwordMatch" && isSubmitted
                  ? " invalid"
                  : "") +
                (!errors.password && !errors.repassword && isSubmitted
                  ? " valid"
                  : "")
              }
              id="repassword"
              name="repassword"
              type="password"
              ref={register({
                required: true,
                validate: {
                  passwordMatch: (value) => value === watchPassword,
                },
              })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {!errors.password && errors.repassword && loc.rePassword}
            </div>
          </div>
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
