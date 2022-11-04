import React from "react";
import DevNotes from "../../assets/devnotes.png";
import Side from "../../assets/side 1.png"
import Vector from "../../assets/vector.png"
import './welcome-page.css';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content__welcome">
                    <div className="content__dev-notes">
                        <img src={DevNotes} alt="dev" />
                        <img src={Side} alt="side" />
                        <h1 className="huge-text">BETA 1.0</h1>
                    </div>
                    <div className="content__controls">
                        <div className="content__title">
                            <h1 className="big-text">Useful free open-source code keeper From developers to developers</h1>
                            <div className="content__sign">
                                <button className="sing-in">
                                    <h2 className="sign-text">Sign In</h2>
                                </button>
                                <button className="sing-up">
                                    <h2 className="sign-text">Sign Up</h2>
                                </button>
                            </div>
                        </div>
                        <div className="content__follow">
                            <div className="follow-us">
                                <h2 className="medium-text">follow us</h2>
                            </div>
                            <img className="vector" src={Vector} alt="Vector" />
                            <div className="github">
                                <h2 className="medium-text">Github</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}