import mongoose, {Schema} from 'mongoose'

const sessionSchema = new Schema({
    email : {
        type : String,
        unique : true
    },
    token : String
})

export default mongoose.model('session', sessionSchema)