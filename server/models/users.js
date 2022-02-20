const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: {
    type: String,
    
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    

  },
  isAdmin: {
    type: Boolean
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart'
  }
});



module.exports.addUser= function (newUser, callback) {
   bcrypt.genSalt(10,(err,salt) => {
   	bcrypt.hash(newUser.password, salt , (err, hash) =>{
        if(err) throw (err);

        newUser.password=hash;
        newUser.save(callback);
   	});
   });
};

const Users = model('Users', UserSchema);

module.exports = Users;