import mongoose, {Schema} from 'mongoose'

const sessionSchema = new Schema({
    email : String,
    token : String
})

export default mongoose.model('session', sessionSchema)