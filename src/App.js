import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import './App.css';
import axios from 'axios';
// import {HashRouter, Switch} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
      currentProductId: null
    }
  }
  componentDidMount() {
    this.getInventory()
  }

  getInventory = () => {
    axios.get('http://localhost:4200/api/inventory')
      .then(res => this.setState({
        inventory: res.data
      }))
      .catch(() => console.log(`Couldn't pull inventory..`))
  }
  updateCurrentProductId = (currentProductId) => {
    this.setState({
      currentProductId
    })
    console.log(this.state.currentProductId)
  }
  render() {
    return (
      <div>
        <Header />
        <div className='main-content'>
          {/* <HashRouter> */}
          <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} updateCurrentProductId={this.updateCurrentProductId} />
          <Form getInventory={this.getInventory} handleCurrentProduct={this.handleCurrent} currentProductId={this.state.currentProductId} />
          {/* </HashRouter> */}
        </div>
      </div>
    );
  }
}

export default App;
