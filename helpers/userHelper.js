import Session from '../models/session'

const TokenGenerator = require('uuid-token-generator');

export default function generateToken(email){
    const tokgen = new TokenGenerator();
    var token = tokgen.generate();
    var sessionData = {
        email : email,
        token : token
    }
    var session = new Session(sessionData)
    return session.save()
    .then((res) =>  {
    //console.log("responseeeeeee", res)
    return token
    }).catch(err => {
        console.log("err", err)
        next(err)
    });
}