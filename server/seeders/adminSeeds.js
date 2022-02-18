const Admin = require("../models/users");
const mongoose = require("mongoose");
const dev = require("../config/dev"); //

const admins = [
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
]

mongoose
  .connect(String(dev.db), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
admins.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === admins.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});