import mongoose , {Schema} from 'mongoose'

// Define movie schema
var userSchema = new Schema({
    
    first_name: String,
    last_name: String,
    email: String,
    password: String,
  });
  
  // Export Mongoose model
  export default mongoose.model('user', userSchema);