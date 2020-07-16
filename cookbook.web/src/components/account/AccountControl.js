import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./css/Account.css";
import loc from "../../resources/lang/localization";

class AccountControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.state = { isLoginModel: true };
  }

  handleLoginRequest() {}

  handleRegisterRequest() {}

  changeMode() {
    this.setState({ isLoginModel: !this.state.isLoginModel });
  }

  render() {
    const isLoginModel = this.state.isLoginModel;
    let formField;
    if (isLoginModel) {
      formField = <Login />;
    } else {
      formField = <Register />;
    }
    return (
      <div>
        <div className="mode-button-wrap">
          <button
            className={"btn-acc " + (this.state.isLoginModel && "active")}
            disabled={this.state.isLoginModel}
            onClick={this.changeMode}
          >
            {loc.loginpage}
          </button>
          <button
            className={"btn-acc "+(!this.state.isLoginModel && "active")}
            disabled={!this.state.isLoginModel}
            onClick={this.changeMode}
          >
            {loc.registerpage}
          </button>
        </div>
        <div className="mode-form-wrap">{formField}</div>
      </div>
    );
  }
}

export default AccountControl;
