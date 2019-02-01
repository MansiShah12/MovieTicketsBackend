import User from '../models/user';
import tokengen,{cipher} from '../helpers/userHelper'

export default function register(req, res, next) {
    var email = req.body.email
    var password = req.body.password
    const cpass = cipher(password)
    const userData ={
       ... req.body,
       password : cpass 
    }
    var myData = new User(userData);
    myData.save()
        .then(async(response) => {
            //console.log("response in Regiatration is", response)
            var firstName = response.first_name
            var lastName = response.last_name
            var token = await tokengen(email);
            res.json({message: " Registration Successfull",email : email, access_token : token, first_name :firstName,last_name :lastName})
           })
        .catch(err => {
            //onsole.log("error of register", err)
            if (err["code"] == 11000){
                res.json({message: "email already exist", status: 'error'});
            }
        });
}

export  function updateUser(req, res, next) {
    var email = req.body.email
    var userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
     }
    User.findOneAndUpdate({email: email}, {$set: userData})
        .then(async(response) => {
            //console.log("response in updateUser is", response)
            User.findOne({email : email})
             .then(async(response) => {
                        //console.log("response in updateUser is", response)
                        var firstName = response.first_name
                        var lastName = response.last_name
                        res.json({message: " Update Successfull",email : email, first_name :firstName,last_name :lastName})
                    })
                    .catch(err => {
                        console.log("errrrrrer", err)
                    });
        })
        .catch(err => {
            if (err["code"] == 11000){
                res.json({message: "email already exist", status: 'error'});
            }
        });
}
