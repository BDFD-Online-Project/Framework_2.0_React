import React, { Component } from "react";
import moment from "moment";
import Controls from "./Controls";

export class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: this.getRemainingTime(),
      pause: false,
    };
    this.togglePause = this.togglePause.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRemainingTime() {
    let now = moment(),
      newYear = moment({ year: now.year() + 1 }),
      diff = newYear.diff(now);
    return moment.duration(diff);
  }

  togglePause() {
    console.log("click!");
    this.setState({
      paused: !this.state.paused,
    });

    if (this.state.paused) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.setState({
          duration: this.getRemainingTime(),
        });
      }, 1000);
    }
  }

  render() {
    const { duration, paused } = this.state;
    return (
      <div>
        <section className="hero is-dark is-bold is-fullheight has-text-centered is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">New Year Is Coming Up!</h1>
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Days</p>
                    <p className="title">{Math.floor(duration.asDays())}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Hours</p>
                    <p className="title">
                      {duration.hours().toString().padStart(2, "0")}
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Minutes</p>
                    <p className="title">
                      {duration.minutes().toString().padStart(2, "0")}
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Second</p>
                    <p className="title">
                      {duration.seconds().toString().padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </nav>
              <Controls paused={paused} onPauseToggle={this.togglePause} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Countdown;
