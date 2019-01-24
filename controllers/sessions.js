import User from '../models/user';
import Session from '../models/session'
import tokengen from '../helpers/userHelper'
export default function login(req, res, next) {
    console.log("reueststststststsst", req)
    User.findOne(req.body)
    .then((response) =>{console.log("usrerererererer", response) 
    if(response==null)
        res.json({message: " Login failed"})
    else{
        var token = tokengen();
        console.log("token isisisisis", token)
        res.json({message: " Login successfull", access_token : token})}

        var sessionData = {
            email : req.body.email,
            token : token
        }
        var session = new Session(sessionData)
        session.save()
        .then((res) => 
        console.log("responseeeeeee", res)
        //res.json({message: " Session Saved Successfull"})
        )
        .catch(err => next(err));

    }
    )
        .catch(err => next(err));
}