import React from 'react'
import { GoogleOutlined  } from '@ant-design/icons'
import "firebase/auth";

import {auth} from "./firebase"
import firebase from 'firebase';

function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Unichat!</h2>

                <div className="login-button google" onClick= { () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign in with Google

                </div>
                <br /> <br />

                <button> Guest Login </button>



            </div>
        </div>
    )
}

export default Login
