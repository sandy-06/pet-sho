const Product = require("../models/Product");
const mongoose = require('mongoose');




const seedProducts = [   
  new Product({
   name:"Blue Buffalo Tastefuls",
   price: 11.95 , 
   quantity: 10,
   category: "food",
   image:"../../assets/images/food/bbtastefulcat.png",
   description: "Blue Buffalo Tastefuls Natural pate wet cat food"
  }),
  new Product({
    name: "Blue Buffalo Dry dog Food",
    price: 35.98,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/blubuffalo.png",
    description: "Blue Buffalo Life protection formula natural adult small breed dry dog food"
  }),
  new Product({
    name: "Cesar wet dog food",
    price: 20.42,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/ceasarsdog.png",
    description: "Cesar gourmet wet dog food variety packs-24 trays"
  }),
  new Product({
    name: "Purina Friskies wet cat food",
    price: 18.89,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/friskiescatfood.png",
    description: "Purina friskies gravy wet cat food variety pack, poultry shreds, meaty bits & Prime filets"
  }),
   new Product({
    name: "IAMS proactive health dry cat food",
    price: 24.98,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/iamscat.png",
    description: "IAMS proactive health adult indoor weight & Hairball care dry cat food, chicken & salmon recipes"
  }),
   new Product({
    name: "Instict dry dog food",
    price: 62.99.toExponential,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/instinct.png",
    description: "Instinct raw boost grain free dry dog food, high protein kibble + freeze dried raw dob food"
  }),
   new Product({
    name: "Instinct dry cat food",
    price: 23.99,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/instinctcat.png",
    description: "Instinct grain free dry cat food, original raw coated natural high protein cat food"
  }),
  new Product({
    name: "Nulo wet cat food",
    price: 13.37,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/nulocat.png",
    description: "Nulo freestyle wet cat food, 2.8 oz pouches, 6 or 24 count"
  }),
  new Product({
    name: "Purina Pro Plan dry dog food",
    price: 55.48,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/purina.png",
    description: "purina pro plan with probiotics shredded blend high protein, adult dry dog food chicken and rice"
  }),
   new Product({
    name: "Purina Fancy Feast wet cat food",
    price: 22.98,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/purinafancycat.png",
    description: "Purina Fancy Feast Petites gravy adult gourmet single serve break apart wet cat food"
  }),
 
  new Product({
    name: "Hills Science Diet dry dog food",
    price: 40.99,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/sciencedietdog.png",
    description: "Hill's science diet dry dog food, adult, small paws for small breed dogs"
  }),
  new Product({
    name: "Taste of the Wild dry dog food",
    price: 54.99,
    quantity: 10,
    category: "food",
    image: "../../assets/images/food/tasteofthewild.png",
    description: "Taste of the Wild Roasted Bison and venison high protein real meat recipes premium dry dog food with superfoods and nutrients"
  }),
   new Product({
    name: "KIPRITII 18 pack dog toys",
    price: 26.88,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/assorteddogtoys.png",
    description: "KIRITII dog chew toys for puppy-18 pack puppy teething chew toy"
  }),
  
   new Product({
    name: "OODOSI cat wand toy",
    price: 13.9,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/assotcat.png",
    description: "OODOSI cat wand toy, interactive cat toys with 2 poles and 9 attachments"
  }),
   new Product({
    name: "Potaroma fluffy cat Ball",
    price: 15.99,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/.png",
    description: "Potaroma 3 pack fluffy plush cat ball toys, interactive chirping balls kicker toys"
  }),
   new Product({
    name: "Legendog 5pcs catnip toy",
    price: 11.99,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/catnip.png",
    description: "Legenddog 5pcs catnip toy, cat chew toy bite resistant catnip toys for cats"

  }),
   new Product({
    name: "Upsky cat toy roller",
    price: 10.99,
    quantity: 10,
    category: "toys",
    image:"../../assets/images/toys/catroller.png",
    description: "UPSKY cat roller 3-level turntable cat toys and balls with six colorful balls."
  }),
   new Product({
    name: "Andiker cat spiral spring",
    price: 5.89,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/catsprings.png",
    description: "Andiker cat spiral spring, 12 pcs cat creative to to kill time and keep fit"
  }),

  // Food -> "../../ASSETS/IMAGES/"

  new Product({
    name: "godog, Dragon Squeaker Toy",
    price: 15.80,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/dragon.png",
    description: "goDog, dragon Squeaker dog toy, chew guard and resistant technology"

  }),
   new Product({
    name: "Outward Hound Hid-a squirrel",
    price: 11.01,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/hideasquirrel.png",
    description: "outward hound hide-a-squirrel squeaky puzzle plush dog toy"
  }),
   new Product({
    name: "Nerf Dog football",
    price: 9.99,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/nerfball.png",
    description: "Nerf dog rubber football dog toy with interactive squeaker"

  }),
   new Product({
    name: "goDog Rooster",
    price: 10.99,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/rooster.png",
    description: "goDog checkers skinny rooster with chew guard technology tough plush dog toy"
  }),
   new Product({
    name: "Outward Hound tennis Ballz",
    price: 11.99,
    quantity: 10,
    category: "toys",
    image: "../../assets/images/toys/tennisball.png",
    description: "Outward hound Squeaker ballz, tennis ballz"
  }),
  new Product({
    name: "Mailer 20 pcs cat toy set",
    price: 18.99,
    quantity: 10,
    category: "toys",
    image:"../../assets/mages/toys/tunnel.png",
    description: "malier 20 pce cat kitten toys set, collapsible cat tunnel etc"
  }),
  
  new Product({
    name: "Cat Bag for bathing",
    price: 16.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/catbathing.png",
    description: "Cat bag for bathing 8 pcs set with cat shower net bag adjustable grooming bruch nail clippers, etc"
    
  }),
  new Product({
    name: "Cat Comb",
    price: 6.99.toExponential,
    quantity: 10,
    category:"gear",
    image: "../../assets/images/accessories/catcomb.png",
    description: "Cat comb per short and long hair soft deshedding brush"
    
  }),
  new Product({
    name: "Fish&Nap Cat Tree",
    price: 41.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/cattree.png",
    describe: "Fish&nap cat tree cat tower cat condo sisal scratching posts"
    
  }),
  
  
  new Product({
    name: "Masbrill light up dog Collar",
    price: 16.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/colars.png",
    description: "Masbrill light up dog collar led glow collar with usb rechargeable lighted flashing dog collar"
    
  }),
  new Product({
    name: "Furhaven Orthopedic Pet Bed",
    price: 62.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/dogbed.png",
    description: "Furhave orthopedic, cooling gel and memory foam pet beds"
    
  }),
  new Product({
    name: "Amazon Basics elevated Pet Bed",
    price: 22.68,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/elevateddogbed.png",
    description: "Amazon basics cooling elevated pet bed, xs to xl"
  }),
  new Product({
    name: "KTWEGOFU Auto cat feeder",
    price: 29.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/feeder-water.png",
    description: "KTWEGOFU automatic cat feeder and water dispenser, auto gravity food feeder"
    
  }),
  new Product({
    name: "juxzh dog harness",
    price: 19.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/halter.png",
    description: "juxzh truelove soft front dog harness. Best reflective no pull harness with handle and 2 leash attachments"
    
  }),
  new Product({
    name: "Venture leash",
    price: 24.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/leash.png",
    description: "Venture leash w/locking comfort grip"
  }),
  new Product({
    name: "Training pads",
    price: 24.63,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/traainingpads.png",
    description: "Glad for pets black charcoal puppy pads new and improver puppy potty training pads"
    
  }),
  new Product({
    name: "tomxcute cat water fountain",
    price: 39.94,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/water.png",
    description: "Tomxcute cat water fountain, 3.2l/108oz automatic stainless steel pet fountain"
  }),
  new Product({
    name: "Cat window perch",
    price: 23.99,
    quantity: 10,
    category: "gear",
    image: "../../assets/images/accessories/windowledge.png",
    description: "cat window perch, cat hammock window seat, space saving mounted cat bed for large cats"
  }),
  new Product({
    name: "PetHonesty cranberry for Dogs",
    price: 25.99,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/cranberry.png",
    description: "pethonesty cranberry for Dogs- soft chew supplements, kidney and bladder support"
  }),
  new Product({
    name: "Oxyfresh Pet Dental Solution",
    price: 16.95,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/dentalwater.png",
    description: "Oxyfresh premium pet dental care solution pet water additive"
  }),
  new Product({
    name: "terramycin antibiotic for eye infection",
    price: 21.99,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/eyemed.png",
    description: "terramycin antibiotic ointment for eye infection treatment in dogs, cats, cattle, horses and sheep"
  }),
  new Product({
    name: "Feliway calming diffuser",
    price: 29.99,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/feliway.png",
    description: "feliway optimum cat, enhanced calming pheromone Diffuser"
  }),
  new Product({
    name: "Hartz Hairball remedy",
    price: 4.47, 
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/hairball.png",
    description: "Hartz Hairball remedy plus chicken flavored soft chews for cats"
  }),
  new Product({
    name: "Vetiq hip and Joint",
    price: 15.60,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/hipandjoint.png",
    description: "Vetiq vet recommended hip and joint supplement for dogs, chicken flavored soft chews"
  }),
  new Product({
    name: "Nylabone advances oral Care",
    price: 8.09,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/oralcare.png",
    description: "Nylabone advanced oral care water additives for Dogs"
  }),
  new Product({
    name: "Plaque off for cats",
    price: 14.40,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/plaqueremover.png",
    description: "Plaque off for cats 40g - special feline formulation"
  }),
  new Product({
    name: "Probiotic bites",
    price: 26.97,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/probiotics.png",
    description: "zesty paws probiotic for dogs-probiotics for gut flora, digestive health"
  }),
  new Product({
    name: "Pure Wild Alaska Salmon Oil",
    price: 14.97,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/salmonoil.png",
    description: "Pure wild Alaskan salmon oil for dogs and cats-joint,immune and heart health"
  }),
  new Product({
    name: "virbac CET toothepaste",
    price: 10.38,
    quantity: 10,
    category: "health",
    image: "../../assets/images/health/toothpaste.png",
    description: "Virbac CET enzymatic toothpaste Eliminates bad breath by removing plaque and tartar buildup"
  }),
  new Product({
    name: "Multivitamin",
    price: 19.94,
    quantity: 10,
    category: "health",
    image:"../../assets/images/health/vits.png",
    description: "10 in 1 Multivitamin with glucosamine and PurforMSM hip and joint, skin and coat, digestion and Brain health"
  }),
  
  
];
//connect mongoose
const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
}
