import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react';
import Slider from 'react-rangeslider'
import './App.css';
import glamorous from 'glamorous'

const Glamory = glamorous.div({
  height: 50,
  width: 80,
  backgroundColor: "red",
  color: "yellow"
});

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      log: [],
      value: 10
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  handleClick = () => this.updateLog('Button received click with mouse')

  handleKeyPress = (e) => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault()
      this.updateLog('Button received click with keyboard')
    }
  }

  updateLog = message => this.setState({ log: [message, ...this.state.log] })

  render() {
    const { value } = this.state
    return (
      <div className="App">
        <div className="background-gradient">
          <div className="App-header">
            <h2>BASIS</h2>
          </div>
          <Glamory>Test</Glamory>
          <div>
            <Button
              className='GO'
              content='GO'
              onClick={this.handleClick}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className='slider'>
            <Slider
              min={0}
              max={100}
              value={value}
              onChangeStart={this.handleChangeStart}
              onChange={this.handleChange}
              onChangeComplete={this.handleChangeComplete}
            />
            <div className='value'>{value}</div>
          </div>
          <div className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;