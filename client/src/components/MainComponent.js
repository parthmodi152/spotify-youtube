import React, { Component } from 'react';
import Profile from './Profile';
import Login from './Login';

class Main extends Component {
    constructor(props){
        super(props)

        const params = this.getHashParams();
        const token = params.access_token;

        this.state = {
            loggedIn: token ? true : false,
            access_token: token
        }
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }


    render(){
        return(
            <>
            {this.state.loggedIn ? <Profile token = {this.state.access_token}/> : <Login/>}
            </>
        )
    }
}

export default Main;