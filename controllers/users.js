import User from '../models/user';
import tokengen from '../helpers/userHelper'

export default function register(req, res, next) {
    var myData = new User(req.body);
    myData.save()
        .then(() => {
            var token = tokengen();
            console.log("token isisisisis", token)
            res.json({message: " Registration Successfull", access_token : token})
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
        })
        .catch(err => next(err));
}
