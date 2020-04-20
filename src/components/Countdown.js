import React, { Component } from 'react';

export class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: this.getRemainingTime(),
    };
  }

  getRemainingTime() {
    this.internal = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <section className='hero is-info is-bold is-fullheight has-text-centered is-large'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>New Year Is Coming Up!</h1>
              <nav className='level'>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Days</p>
                    <p className='title'>3,456</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Hours</p>
                    <p className='title'>123</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Minutes</p>
                    <p className='title'>456K</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <p className='heading'>Second</p>
                    <p className='title'>789</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Countdown;
