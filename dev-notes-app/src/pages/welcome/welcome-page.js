import React from "react";
import axios from 'axios';
import DevNotes from "../../assets/devnotes.png";
import Side from "../../assets/side 1.png";
import Vector from "../../assets/vector.png";
import NoteModel from "../../models/NoteModel.js";
import TokenObtainPairModel from "../../models/TokenObtainPairModel.js";
import AccountService from "../../services/account.service.js"
import './welcome-page.css';

export default class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authState: false,
            regState: false,
            registerModel: new TokenObtainPairModel()
        };
        this.targetRoute = "http://127.0.0.1:8000/api/v1/notes/";
        this.authClick = this.authClick.bind(this);
        this.regClick = this.regClick.bind(this);
        this.register = this.register.bind(this);
    }

    authClick() {
        this.setState({ authState: true, regState: false });
    }

    regClick() {
        this.setState({ authState: false, regState: true });
    }

    register() {
        const register = new TokenObtainPairModel("123", "123");
        AccountService.setRegisterModel(register);
        console.log(AccountService.registerModel);
        axios.get(this.targetRoute)
        .then((resp) => {
            console.log(resp);
        });
    }

    render() {
        return (
            <div className="content">
                <div className="content__welcome">
                    <div className="content__dev-notes">
                        <img className="devnotes-image" src={DevNotes} alt="dev" />
                        <img className="devnotes-image" src={Side} alt="side" />
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
                        <button onClick={this.register} className="sing-up">
                            <h2 className="sign-text">Check Request</h2>
                        </button>
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