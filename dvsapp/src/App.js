import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className = 'title'>
          <h1>Welcome</h1>
          <h4>To</h4>
          <h2>Your Survivors Tool</h2>
        </div>
        <button className = 'mainButton'>Get Started</button>
        <a className = 'resourceLink' href = 'https://ncadv.org/resources'>Other Resources</a>
        <Footer />
      </div>
    )
  }
}

export default App
