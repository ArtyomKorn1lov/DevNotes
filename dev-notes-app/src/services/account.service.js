import React from "react";
import axios from 'axios';
import TokenObtainPairModel from "../models/TokenObtainPairModel.js";

const serverRoute = "http://127.0.0.1:8000/api/v1";

const AccountService = {

    registerModel: new TokenObtainPairModel(),

    setRegisterModel: function(model) {
        this.registerModel = model;
    },

    
}

export default AccountService;