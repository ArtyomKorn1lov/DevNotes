import React from "react";
import { Link } from 'react-router-dom';
import "./not-found-page.css";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content__not-found">
                    <h1 className="not-found-text">404</h1>
                    <h2 className="micro-text">hey buddy you picked the wrong door</h2>
                    <Link to="/" className="big-text">return home</Link>
                </div>
            </div>
        );
    }
}