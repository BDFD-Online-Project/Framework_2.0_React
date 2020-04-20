import React, { Component } from 'react';
import './Test.css';

export class Test extends Component {
  render() {
    return (
      <div>
        <div>Hello</div>
        <div class='wrapper'>
          <div class='swing'>
            <div class='human'>
              <div class='top-part'>
                <div class='head'>
                  <div class='hair'></div>
                  <div class='fringe'></div>
                  <div class='eye'></div>
                  <div class='mouth'></div>
                </div>
                <div class='body'>
                  <div class='hand'>
                    <div class='hand-one'></div>
                    <div class='hand-two'></div>
                  </div>
                </div>
              </div>
              <div class='leg-one'></div>
              <div class='leg-two'></div>
            </div>
            <div class='swing-rod'></div>
            <div class='bottom'></div>
          </div>
          <div class='pole one'></div>
          <div class='pole two'></div>
        </div>
      </div>
    );
  }
}

export default Test;
