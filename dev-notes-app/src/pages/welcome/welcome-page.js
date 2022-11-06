import React from "react";
import DevNotes from "../../assets/devnotes.png";
import Side from "../../assets/side 1.png"
import Vector from "../../assets/vector.png"
import './welcome-page.css';

export default class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authState: false,
            regState: false
        };
        this.authClick = this.authClick.bind(this);
        this.regClick = this.regClick.bind(this);
    }

    authClick() {
        this.setState({ authState: true, regState: false });
    }

    regClick() {
        this.setState({ authState: false, regState: true });
    }

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
                            {!this.state.authState && !this.state.regState &&
                                <div className="content__sign">
                                    <button onClick={this.authClick} className="sing-in">
                                        <h2 className="sign-text">Sign In</h2>
                                    </button>
                                    <button onClick={this.regClick} className="sing-up">
                                        <h2 className="sign-text">Sign Up</h2>
                                    </button>
                                </div>
                            }
                            {this.state.authState && !this.state.regState &&
                                <div className="content__sign-input">
                                    <input className="primary-input" placeholder="login" name="login" type="text" />
                                    <input className="primary-input -bottom" placeholder="password" name="pass" type="password" />
                                    <div className="content__sign -auth">
                                        <button className="sing-in -auth">
                                            <h2 className="sign-text">Sign In</h2>
                                        </button>
                                    </div>
                                </div>
                            }
                            {!this.state.authState && this.state.regState &&
                                <div className="content__sign-input">
                                    <input className="primary-input" placeholder="login" name="login" type="text" />
                                    <input className="primary-input -bottom" placeholder="password" name="pass" type="password" />
                                    <div className="content__sign -reg">
                                        <button className="sing-up">
                                            <h2 className="sign-text">Sign Up</h2>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="content__follow">
                            {!this.state.authState && !this.state.regState &&
                                <div className="follow-us">
                                    <h2 className="medium-text">follow us</h2>
                                </div>
                            }
                            {!this.state.authState && !this.state.regState &&
                                <img className="vector" src={Vector} alt="Vector" />
                            }
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