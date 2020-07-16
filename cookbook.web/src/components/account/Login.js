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

  //ui.setLanguage('en');
  function isInvalid(val) {
    if (val === "test") {
      return true;
    }

    return false;
  }

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
              name="username"
              type="text"
              ref={register({ required: true, minLength: 3 })}
            />
          </div>
          <div class="box-validation"></div>
        </div>
        <div class="row">
          <div class="box-label">
            <label class="f-label" htmlFor="password">
              {loc.password}*
            </label>
          </div>
          <div class="box-input">
            <input
              class="f-input"
              name="password"
              type="password"
              ref={register({
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: 3,
                validate: {
                  isInvalid: (value) => isInvalid(value),
                },
              })}
            />
          </div>
          <div class="box-validation">
            <span>{errors.password && "Password required"}</span>
            <span>
              {" "}
              {errors.password && errors.password.type === "isInvalid" && (
                <p>Password is test!</p>
              )}
            </span>
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
