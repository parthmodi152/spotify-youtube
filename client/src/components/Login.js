import React, {Component} from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import SpotifyLogo from '../assets/Spotify-Logo/Spotify_Logo_RGB_White.png'
import YoutubeLogo from '../assets/Youtube-Logo/yt_logo_rgb_dark.png'
import GreenTick from '../assets/green-tick.json'



const HalfScreen =  styled.div`
    height: 100vh;
    width: 50%;
    display: inline-block;
    position: relative
`

const LoginButton = styled.a`
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    /* background-color: rgb(29, 185, 84); */
    border-radius: 30px;
    padding: 17px 35px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);

    &.YoutubeButton {
        background-color: #c4302b;
    }
    &.SpotifyButtonOn {
        background-color: rgb(29, 185, 84);
    }
    &.SpotifyButtonOff {
        background-color: grey;
    }
    
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
    margin-top: -10px;
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
const LoggedInBox = ({YoutubeLoggedIn}) => {
    const GreenTickLottie = styled.div`
    display: ${props => (YoutubeLoggedIn ? 'flex' : 'none')};;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin-top: 130px;

    & .lottieText {
        color: #5ccc2c;
        font-size: 22px;
        font-weight: 600;
        margin-right:5px;
    }
    `

    return(
        <GreenTickLottie>
            <div className='lottieText'>Logged In</div>
            <Lottie className='lottie' options={defaultOptions} height={45} width={45}></Lottie>
        </GreenTickLottie>
    ) 
}

const defaultOptions = {
    autoplay: true, 
    animationData: GreenTick,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
    };

class Login extends Component {
    constructor(props){
        super(props)

        var params  = this.getHashParams()
        if (params.scope && params.access_token && params.expires_in){
            var YoutubeToken = params.access_token
        }

        this.state = {
            YoutubeLoggedIn : YoutubeToken ? true: false,
            YoutubeAccessToken : YoutubeToken
        }

    }


    render() {
        return(
            <div className='LoginContent'>
                <HalfScreen>
                    <YtLogo src={YoutubeLogo}></YtLogo>
                    <LoginButton href='http://localhost:3500/youtube_login' 
                        className='YoutubeButton'>Login with Youtube</LoginButton>
                    <LoggedInBox YoutubeLoggedIn={this.state.YoutubeLoggedIn}></LoggedInBox>
                </HalfScreen>
                <HalfScreen>
                    <SpLogo src={SpotifyLogo}></SpLogo>
                    <LoginButton  
                    href={this.state.YoutubeLoggedIn ? 'http://localhost:8888/login': ''}
                    className={this.state.YoutubeLoggedIn ? 'SpotifyButtonOn': 'SpotifyButtonOff'}
                    >Login with Spotify</LoginButton>
                </HalfScreen>
                
            </div>
        )
    }
}
export default Login