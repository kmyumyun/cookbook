import React from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../services/auth/auth.service";
import "./css/FormGrid.css";
import loc from "../../resources/lang/localization";

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
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
              className={"f-input" + (errors.username ? " invalid" : "")}
              name="username"
              type="text"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.username && loc.formatString(loc.required, loc.username)}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-label">
            <label class="f-label" htmlFor="password">
              {loc.password}*
            </label>
          </div>
          <div class="box-input">
            <input
              className={"f-input" + (errors.password ? " invalid" : "")}
              name="password"
              type="password"
              ref={register({ required: true })}
            />
          </div>
          <div class="box-validation">
            <div class="ve">
              {errors.password && loc.formatString(loc.required, loc.password)}
            </div>
          </div>
        </div>
      </div>
      <div class="btn-field">
        <input class="btn-sbmt" type="submit" value={loc.signin} />
      </div>
    </form>
  );
}

class Login extends React.Component {
  render() {
    return <LoginForm />;
  }
}

export default Login;
