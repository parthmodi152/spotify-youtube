const express = require('express')
var querystring = require('querystring');
const {google} = require('googleapis');
var request = require('request')
const url = require('url');
const app = express()
const port = 3500


const oauth2Client = new google.auth.OAuth2(
    '684108310222-qfmeov1s54v960djs2snsf1kmcdjf46a.apps.googleusercontent.com',
    '0wyyOM63H_IO3dnT8IRnpowB',
    'http://localhost:3500/auth'
);

// const getGoogleAuthorizationCode = () => {
//     var code = '';
//     var url = window.location;
//     var code = new URLSearchParams(url.search).get('code');
//     return code;
// }

app.get('/youtube_login', function (req, res){
    const scopes = [
        "https://www.googleapis.com/auth/youtube.readonly"
    ];
    
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        response_type: 'code',
    
        // If you only need one scope you can pass it as a string
        scope: scopes
    });
    res.redirect(url);
})

app.get('/auth', function(req, res){

    var auth_code = req.query.code

    request.post('https://oauth2.googleapis.com/token', {
        json: {
            code: auth_code,
            client_id: '684108310222-qfmeov1s54v960djs2snsf1kmcdjf46a.apps.googleusercontent.com',
            client_secret: '0wyyOM63H_IO3dnT8IRnpowB',
            redirect_uri: 'http://localhost:3500/auth',
            grant_type: 'authorization_code'
        }
    }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res.statusCode}`)
        oauth2Client.setCredentials(body)
        saveData(body)
    })

    function saveData(data) {
        console.log(data.access_token)
        var token  = data.access_token

        request.get('https://www.googleapis.com/youtube/v3/videos', {
            json: {
                key: 'AIzaSyA_7jUpwpINAAbcou2nY4er1PC7rWYmdaw',
                myRating: 'like',
                headers: {
                    Authorization: 'Bearer '+ token,
                    Accept: 'application/json'
                }
                }
        }, (error, res, body) => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log(res)
        })
    }
    
    res.send('hello')

    
    
    // var hashParams = {};
    //     var e, r = /([^&;=]+)=?([^&;]*)/g,
    //         q = window.location.hash.substring(1);
    //     e = r.exec(q)
    //     while (e) {
    //         hashParams[e[1]] = decodeURIComponent(e[2]);
    //         e = r.exec(q);
    //     }

    //     res.send(hashParams)
    // res.redirect('http://localhost:3000/#'+
    // querystring.stringify({
    //     access_token: tokens.access_token,
    //     refresh_token: tokens.refresh_token
    // }));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}/youtube_login`))