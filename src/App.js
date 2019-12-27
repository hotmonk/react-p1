import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state={
    credentials:[
      {username:"hotmonk", email:"avinashkhetri@gmail.com"},
      {username:"DarthVader", email:"anakinskywalker@gmail.com"}

    ]
  }

  InputDetectedHandler=(event)=>{
     //console.log("colsiksd");
    this.setState({
     credentials:[
        {username:event.target.value, email:"hbnjlnl"},
        {username:this.state.credentials[1].username, email:this.state.credentials[1].email}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.InputDetectedHandler} currentusername={this.state.credentials[0].username}/>
        <UserOutput email={this.state.credentials[0].email} username={this.state.credentials[0].username}/>
        <UserOutput email={this.state.credentials[1].email} username={this.state.credentials[1].username}/>
      </div>
    );
  }
}

export default App;
