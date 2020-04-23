import React, { Component } from "react";

export default class Datepicker extends Component {
  render() {
    return (
      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder="Find a repository"
          />
        </p>
        <p className="control">
          <a className="button is-info">Search</a>
        </p>
      </div>
    );
  }
}
