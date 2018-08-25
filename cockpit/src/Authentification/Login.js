import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CardContent, Card } from '../../node_modules/@material-ui/core';
import Logo from '../Logo/logo.jpg';
import './Login.css';


class Login extends Component {

constructor(props){
  super(props);
  this.state={
    user:'',
    password:''
  }
 }

 handleClick = (event) => {
        var apiBaseUrl = "http://localhost:4000/api/";
        var payload={
            "user":this.state.user,
            "password":this.state.password
        }
        
        //TODO: Login Logic
        this.props.appContext.setState({token: 1234, loginRequired:true})
            
}

handleKeyPress = (event) => {
    if(event.key == 'Enter'){
        //TODO: Login Logic
        this.props.appContext.setState({token: 1234, loginRequired:true})
    }
}

    /*
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.data.code == 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });*/
    

render() {
    return (
      <div className="flex-container">
        <MuiThemeProvider>
            <Card className="row">
              <CardContent className="flex-item">
                    <img src={Logo} alt="Logo" style={{width:"35%"}}></img>
                    <div onKeyDown = {this.handleKeyPress}>
                        <TextField  
                            type="text"
                            placeholder="Kundennummer"
                            onChange = {(newValue) => this.setState({user:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            placeholder="Passwort"
                            onChange = {(newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <Button autoFocus variant="outlined" primary={true} style={style} onClick={this.handleClick}>Login</Button>
                    </div>
                </CardContent>
            </Card>
         </MuiThemeProvider>
      </div>
    );
  }
}   

const style = {
 margin: 15
};

export default Login;