import React from "react";
import MainComponent from "../welcome/welcome-page";
import './App.css';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page__content">
          <MainComponent />
        </div>
      </div>
    );
  }
}
