import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}
