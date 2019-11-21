import React, { Component } from 'react';
import ColoredHeadingOne from 'colored-heading'
import ColoredHeadingTwo from 'colored-heading'

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne text='Colored heading one is working' color={"red"} />
        <ColoredHeadingTwo text='Colored heading two is working' color={"blue"} />
      </div>
    )
  }
}
