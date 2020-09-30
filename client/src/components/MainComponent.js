import React, { Component } from 'react';
import Profile from './Profile';
import Login from './Login';

class Main extends Component {
    constructor(props){
        super(props)

        var client_secret = {
            YoutubeLoggedIn: false,
            YoutubeAccessToken: '',
            SpotifyloggedIn: false,
            SpotifyAcessToken: ''
        }

        var params  = this.getHashParams()
        if (params.scope && params.access_token && params.expires_in){
            var YoutubeToken = params.access_token
        }
        if (params.access_token && params.refresh_token) {
            var SpotifyToken = params.access_token
        }

        // var YoutubeToken = ''
        // var SpotifyToken = ''

        // if (!YoutubeToken){
        //     // console.log('Youtube Not Logged In')
        //     const YoutubeParams = this.getHashParams();
        //     // console.log('Getting Youtube Params ...')
        //     // console.log(YoutubeParams)
        //     if (Object.keys(YoutubeParams).length !== 0){
        //         // console.log('Found Youtube Params')
        //         YoutubeToken = YoutubeParams.access_token;
        //         // console.log('Getting youtube access token from params ...')
        //         // console.log(YoutubeToken)
        //     }
        // } else {
        //     console.log('Youtube is Logged In')
        //     const SpotifyParams = this.getHashParams();
        //     if (Object.keys(SpotifyParams).length !== 0){
        //         if(SpotifyParams.access_token != YoutubeToken){
        //             SpotifyToken = SpotifyParams.access_token;
        //         }
        //     }
        // }

        this.state = {
            YoutubeLoggedIn : YoutubeToken ? true:false,
            SpotifyloggedIn: SpotifyToken ? true: false,
            YoutubeAccessToken : YoutubeToken,
            SpotifyAcessToken: SpotifyToken
        }
        
        console.log(this.state)
    };


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
            {this.state.SpotifyloggedIn ? <Profile SpotifyToken = {this.state.SpotifyAcessToken} YoutubeToken = {this.state.YoutubeAccessToken} /> : <Login YoutubeToken = {this.state.YoutubeAccessToken}/>}
            </>
        )
    }
}

export default Main;