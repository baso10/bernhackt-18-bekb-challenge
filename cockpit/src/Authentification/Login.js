import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CardContent, Card } from "../../node_modules/@material-ui/core";
import Logo from "../Logo/logo.jpg";
import "./Login.css";
import withRoot from "../withRoot";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  handleClick = event => {
    //TODO: Login Logic
    this.props.appContext.setState({ token: 1234, loginRequired: true });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      //TODO: Login Logic
      this.props.appContext.setState({ token: 1234, loginRequired: true });
    }
  };

  render() {
    return (
      <div className="flex-container">
        <Card className="row">
          <CardContent className="flex-item">
            <img src={Logo} alt="Logo" style={{ width: "35%" }} />
            <div onKeyDown={this.handleKeyPress}>
              <TextField
                type="text"
                placeholder="Kundennummer"
                onChange={newValue => this.setState({ user: newValue })}
              />
              <br />
              <TextField
                type="password"
                placeholder="Passwort"
                onChange={newValue => this.setState({ password: newValue })}
              />
              <br />
              <Button
                autoFocus
                variant="outlined"
                color="primary"
                style={style}
                onClick={this.handleClick}
              >
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default withRoot(Login);
