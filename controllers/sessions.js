import User from '../models/user';
import Session from '../models/session'
import tokengen, {cipher} from '../helpers/userHelper'


export   function login(req, res, next) {
    var pass = req.body.password
    var email = req.body.email
    const cpass = cipher(pass)
    const data= {
        email : email,
        password : cpass
    }
    User.findOne(data)
    .then(async(response) =>{
    //console.log("usrerererererer1111111111111", response) 
    if(response==null)
        res.json({message: " Login failed"})
    else{
       var firstName = response.first_name
        var lastName = response.last_name
         var token = await tokengen(email);
        res.json({message: " Login Successfull",email : email, access_token : token,first_name :firstName,last_name :lastName,  status : 200 })
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