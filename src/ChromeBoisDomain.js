import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

// 'e' in the functions stands for event, an instance of an event
// look in the react docs for the proper property of 'e' for what the deliverables want


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    // capture x and y coordinates
    drawChromeBoiAtCoords(e.clientX, e.clientY);
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }
  
  clickHandler = (e) => {
    toggleCycling();
  }
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
 
  keydownHandler = (e) => {
    if (e.key === 'a') { 
      resize('+');
    } else if (e.key === 's') {
      resize('-');
    }
  } 
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.keydownHandler}
        onClick={this.clickHandler}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
