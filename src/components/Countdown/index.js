import React, { Component } from "react";
import moment from "moment";

import Timer from "./Timer";
import Controls from "./Controls";
import Datepicker from "./Datepicker";

export default class Countdown extends Component {
  /* Can be replace with state = {} 
  constructor(props) {
    super(props);
    this.state = {
      duration: this.getRemainingTime(),
      pause: false,
    };
    // this.handleTogglePause = this.handleTogglePause.bind(this);
  }
*/
  state = {
    duration: this.getRemainingTime(),
    pause: false,
  };

  componentDidMount() {
    this.resume();
  }

  componentWillUnmount() {
    this.paused();
  }

  getRemainingTime() {
    let now = moment(),
      newYear = moment({ year: now.year() + 1 }),
      diff = newYear.diff(now);
    return moment.duration(diff);
  }

  handleTogglePause = () => {
    // console.log("click!");
    this.setState((prevState, props) => {
      const paused = !prevState.paused;
      if (paused) {
        this.paused();
      } else {
        this.resume();
      }
      return {
        paused,
      };
    });
  };

  paused() {
    clearInterval(this.interval);
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime(),
      });
    }, 1000);
  }

  render() {
    const { duration, paused } = this.state;
    return (
      <div>
        <section className="hero is-dark is-bold is-fullheight has-text-centered is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">New Year Is Coming Up!</h1>
              <Timer duration={duration} />
              <Datepicker />
              <Controls
                paused={paused}
                onPauseToggle={this.handleTogglePause}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
