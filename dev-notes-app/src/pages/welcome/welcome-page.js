import React from "react";
import DevIcon from "../../assets/devnotes.png"
import GitHubIcon from "../../assets/GitHub.png"
import './welcome-page.css';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content__welcome">
                    <div className="welcome__side">
                        <img src={DevIcon} alt="DevIcon" />
                        <h1 className="medium-text">Your lovely code manager</h1>
                        <div className="welcome__sign">
                            <button className="sign-button">
                                <h2 className="sign-text">Sign Up</h2>
                            </button>
                            <button className="sign-button -in">
                                <h2 className="sign-text">Sign Out</h2>
                            </button>
                        </div>
                    </div>
                    <div className="welcome__side -right">
                        <h1 className="big-text">Useful free open-source code keeper From developers for developers</h1>
                        <img src={GitHubIcon} alt="GitHubIcon"/>
                    </div>
                </div>
            </div>
        );
    }
}