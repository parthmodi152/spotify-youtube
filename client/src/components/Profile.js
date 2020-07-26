import React, {Component} from 'react';
import Nav from './Nav';
import {BrowserRouter} from 'react-router-dom';

class Profile extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <BrowserRouter>
                <Nav/>
            </BrowserRouter>
            
        )
    }
}

export default Profile