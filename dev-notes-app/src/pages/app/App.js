import React from "react";
import MainComponent from "../welcome/welcome-page";
import NotFound from "../not-found/not-found-page";
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
}
