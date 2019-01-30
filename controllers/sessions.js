import User from '../models/user';
import Session from '../models/session'
import tokengen from '../helpers/userHelper'
export   function login(req, res, next) {
    var email = req.body.email
    User.findOne(req.body)
    .then(async(response) =>{
    //console.log("usrerererererer1111111111111", response) 
    if(response==null)
        res.json({message: " Login failed"})
    else{
         var token = await tokengen(email);
        res.json({message: " Login Successfull",email : email, access_token : token, status : 200 })
    }
    }).catch(err => next(err));
}

export function logout(req, res, next) {
    var email = req.body.email
    Session.findOneAndDelete({email:email})
    .then((response) =>{
        //console.log("usrerererererer", response) 
        if(response)
            res.json({message: "User Logged out successfully", status : 200});
        else{
            res.json({message: "Already Logged out"})
        }
    }).catch(err => {
        next(err);
    });
}