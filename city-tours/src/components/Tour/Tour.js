import React, { Component } from 'react'

// styling
import "./tour.scss";

export default class Tour extends Component {
  render() {
    console.log(this.props);
    return (
      <h1>
        Hello from tour
      </h1>
    )
  }
}
