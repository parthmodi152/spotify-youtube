import React, {Component} from 'react';
import styled from 'styled-components';
import SpotifyLogo from '../assets/Spotify-Logo/Spotify_Logo_RGB_White.png'
import YoutubeLogo from '../assets/Youtube-Logo/yt_logo_rgb_dark.png'

const LoginButton = styled.a`
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: rgb(29, 185, 84);
    border-radius: 30px;
    padding: 17px 35px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%)
`
const SpLogo = styled.img`
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin-top: -10px;
`
const YtLogo = styled.img`
    height: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin-top: -100px;
`
const PlusSign = styled.svg`
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin-top: -50px;
    fill: white;
`

class Login extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div className='LoginContent'>
                <YtLogo src={YoutubeLogo}></YtLogo>
                <PlusSign height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></PlusSign>
                <SpLogo src={SpotifyLogo}></SpLogo>
                <LoginButton href='http://localhost:8888/login'>Login with spotify</LoginButton>
            </div>
        )
    }
}

export default Login