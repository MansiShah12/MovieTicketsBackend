import User from '../models/user';
import tokengen from '../helpers/userHelper'

export default function register(req, res, next) {
    var email = req.body.email
    var myData = new User(req.body);
    myData.save()
        .then(async() => {
            var token = await tokengen(email);
            res.json({message: " Registration Successfull",email : email, access_token : token})
           })
        .catch(err => {
            if (err["code"] == 11000){
                res.json({message: "email already exist", status: 'error'});
            }
        });
}
