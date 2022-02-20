const Admin = require("../models/users");
const mongoose = require("mongoose");


// mongoose
 // .connect('mongodb://localhost27017/test',{
//   // useNewUrlParser:true, useUnifiedTopology: true})
//    .then(() =>{
//      console.log('MONGO CONNECTION OPEN!!!');
  //  })
  //  .catch(() => {
 //     console.log(err);
    // })

const adminSeeds = [
    new Admin({
        name: "Sandy Sanders",
        email: "sandy@gmail.com",
        password: "123456",
        isAdmin: true,
    }),
    new Admin({
        name: "Jason Offenbaker",
        email: "jason@gmail.com",
        password: "123456",
        isAdmin: true,
    }),
    new Admin({
        name: "David Schwerd",
        email: "david@gmail.com",
        password: "123456",
        isAdmin: true,
    }),
    new Admin({
        name: "Carl Pastor",
        email: "carl@gmail.com",
        password: "123456",
        isAdmin: true
    })
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(adminSeeds);
}
//seedDB().then(() => {
  //  mongoose.connection.close();
//});

