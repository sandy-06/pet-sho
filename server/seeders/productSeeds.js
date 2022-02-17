const Product = require("../models/product");
const mongoose = require("mongoose");
const dev = require("../config/dev"); //get your mongoose string
//create your array. i inserted only 1 object here
const products = [   
  new Product({
   name:"Blue Buffalo Tastefuls",
   price: 11.95 , 
   quantity: 10,
   category: food,
   image:"\yummy\src\assets\images\food\bbtastefulcat.png"
  }),
  new Product({
    name: "Blue Buffalo Dry dog Food",
    price: 35.98,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\blubuffalo.png"
  }),
  new Product({
    name: "Cesar wet dog food",
    price: 20.42,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\ceasarsdog.png"
  }),
  new Product({
    name: "Purina Friskies wet cat food",
    price: 18.89,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\friskiescatfood.png"
  }), new Product({
    name: "IAMS proactive health dry cat food",
    price: 24.98,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\iamscat.png"
  }),
   new Product({
    name: "Instict dry dog food",
    price: 62.99.toExponential,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\instinct.png"
  }),
   new Product({
    name: "Instinct dry cat food",
    price: 23.99,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\instinctcat.png"
  }),
  new Product({
    name: "Nulo wet cat food",
    price: 13.37,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\nulocat.png"
  }),
  new Product({
    name: "Purina Pro Plan dry dog food",
    price: 55.48,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\purina.png"
  }),
   new Product({
    name: "Purina Fancy Feast wet cat food",
    price: 22.98,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\purinafancycat.png"
  }),
 
  new Product({
    name: "Hills Science Diet dry dog food",
    price: 40.99,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\sciencedietdog.png"
  }),
  new Product({
    name: "Taste of the Wild dry dog food",
    price: 54.99,
    quantity: 10,
    category: food,
    image: "yummy\src\assets\images\food\tasteofthewild.png"
  }),
   new Product({
    name: "KIPRITII 18 pack dog toys",
    price: 26.88,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\assorteddogtoys.png"
  }),
  
   new Product({
    name: "OODOSI cat wand toy",
    price: 13.9,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\assotcat.png"
  }),
   new Product({
    name: "Potaroma fluffy cat Ball",
    price: 15.99,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\catball.png"
  }),
   new Product({
    name: "Legendog 5pcs catnip toy",
    price: 11.99,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\catnip.png"
  }),
   new Product({
    name: "Upsky cat toy roller",
    price: 10.99,
    quantity: 10,
    category: toys,
    image:"\yummy\src\assets\images\toys\catroller.png"
  }),
   new Product({
    name: "Andiker cat spiral spring",
    price: 5.89,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\catsprings.png",
  }),
  new Product({
    name: "godog, Dragon Squeaker Toy",
    price: 15.80,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\dragon.png"
  }),
   new Product({
    name: "Outward Hound Hid-a squirrel",
    price: 11.01,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\hideasquirrel.png"
  }),
   new Product({
    name: "Nerf Dog football",
    price: 9.99,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\nerfball.png"

  }),
   new Product({
    name: "goDog Rooster",
    price: 10.99,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\rooster.png"
  }),
   new Product({
    name: "Outward Hound tennis Ballz",
    price: 11.99,
    quantity: 10,
    category: toys,
    image: "yummy\src\assets\images\toys\tennisball.png"
  }),
  new Product({
    name: "Mailer 20 pcs cat toy set",
    price: 18.99,
    quantity: 10,
    category: toys,
    image:"yummy\src\assets\images\toys\tunnel.png"
  }),
  
  new Product({
    name: "Cat Bag for bathing",
    price: 16.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\catbathing.png"
    
  }),
  new Product({
    name: "Cat Comb",
    price: 6.99.toExponential,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\catcomb.png"
    
  }),
  new Product({
    name: "Fish&Nap Cat Tree",
    price: 41.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\cattree.png"
    
  }),
  new Product({
    name: "Furhaven Orthopedic Pet Bed",
    price: 62.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\dogbed.png"
    
  }),
  new Product({
    name: "Masbrill light up dog Collar",
    price: 16.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\colars.png"
    
  }),
  new Product({
    name: "Amazon Basics elevated Pet Bed",
    price: 22.68,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\elevateddogbed.png"
    
  }),
  new Product({
    name: "KTWEGOFU Auto cat feeder",
    price: 29.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\feeder-water.png"
    
  }),
  new Product({
    name: "juxzh dog harness",
    price: 19.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\halter.png"
    
  }),
  new Product({
    name: "Venture leash",
    price: 24.99,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\leash.png"
    
  }),
  new Product({
    name: "Training pads",
    price: 24.63,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\traainingpads.png"
    
  }),
  new Product({
    name: "tomxcute cat water fountain",
    price: 39.94,
    quantity: 10,
    category: gear,
    image: "yummy\src\assets\images\accessories\water.png"
    
  }),
  new Product({
    name: "PetHonesty cranberry for Dogs",
    price: 25.99,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\cranberry.png"
  }),
  new Product({
    name: "Oxyfresh Pet Dental Solution",
    price: 16.95,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\dentalwater.png"
  }),
  new Product({
    name: "terramycin antibiotic for eye infection",
    price: 21.99,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\earmed.png"
  }),
  new Product({
    name: "Feliway calming diffuser",
    price: 29.99,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\feliway.png"
  }),
  new Product({
    name: "Hartz Hairball remedy",
    price: 4.47, 
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\hairball.png"
  }),
  new Product({
    name: "Vetiq hip and Joint",
    price: 15.60,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\hipandjoint.png"
  }),
  new Product({
    name: "Nylabone advances oral Care",
    price: 8.09,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\oralcare.png"
  }),
  new Product({
    name: "Plaque off for cats",
    price: 14.40,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\plaqueremover.png"
  }),
  new Product({
    name: "Probiotic bites",
    price: 26.97,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\probiotics.png"
  }),
  new Product({
    name: "Pure Wild Alaska Salmon Oil",
    price: 14.97,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\salmonoil.png"
  }),
  new Product({
    name: "virbac CET toothepaste",
    price: 10.38,
    quantity: 10,
    category: health,
    image: "yummy\src\assets\images\health\toothpaste.png"
  }),
  new Product({
    name: "Multivitamin",
    price: 19.94,
    quantity: 10,
    category: health,
    image:"yummy\src\assets\images\health\vits.png"
  }),
  
  
]
//connect mongoose
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
products.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === products.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});