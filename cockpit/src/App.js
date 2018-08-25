import React, { Component } from 'react';
import './App.css';
import Login from './Authentification/Login';
import Orderscreen from './Orderscreen';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      token:null,
      loginRequired: false
    }
  }

  componentWillMount(){
    
  }

  render() {
    const loginscreen = (
      <Login appContext={this} />
    )

    const orderscreen = (
      <Orderscreen appContext={this}/>
    )

    return (
      <div className="App">
        {this.state.loginRequired && this.state.token ? orderscreen : loginscreen}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;