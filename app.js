//Imports
const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

//
var cart = [
    {name: "FIFA 22", nums: 0, price: 20.00, img: "fifa22.jpg"},
    {name: "Football Manager 22", nums: 0, price: 50.00, img: "footballmanager22.png"},
    {name: "The Sims 4", nums: 0, price: 15.00, img: "sims4.jpg"},
    {name: "Total War: Rome II", nums: 0, price: 50.00, img: "totalwar.jpg"},
    {name: "The Witcher 3", nums: 0, price: 40.00, img: "witcher.jpg"},
    {name: "Red Dead Redemption 2", nums: 0, price: 60.00, img: "reddead.jpg"}
];
var address ={address:"", address2:"", buyername:"", state:"", zip: "", city:"", card: ""}


app.get('/', (req,res)=>{
    res.redirect('/browse');
})
app.get('/browse', (req, res) => {
    res.render('./gamestore/browse', {title: 'Game Store', cart});
  });

  app.get('/cart', (req, res) => {
    res.render('./gamestore/cart', {title: 'Game Cart', cart});
  });

  app.get('/confirmation', (req, res) => {
    res.render('./gamestore/confirmation', {title: 'Confirmation', cart,address});
  });

  app.post('/cart', (req,res) => {
      // console.log(req.body)
      let cartgame = req.body
      cart[0].nums = Number(cartgame.nums0)
      cart[1].nums = Number(cartgame.nums1)
      cart[2].nums = Number(cartgame.nums2)
      cart[3].nums = Number(cartgame.nums3)
      cart[4].nums = Number(cartgame.nums4)
      cart[5].nums = Number(cartgame.nums5)
      res.redirect('/cart');   
});

app.post('/confirmation', (req,res) => {
  let addressCart = req.body
  address.buyername = addressCart.inputName
  address.address = addressCart.inputAddress
  if(addressCart.inputAddress2 != "")
  {
    address.address += " " + addressCart.inputAddress2
  } 
  address.city = addressCart.inputCity
  address.state = addressCart.inputState
  address.zip = addressCart.inputZip
  address.card = addressCart.inputCard.substring(15)
  
  
  res.redirect('/confirmation');
});

app.post('/browse', (req,res) => {
 
      cart[0].nums = 0
      cart[1].nums = 0
      cart[2].nums = 0
      cart[3].nums = 0
      cart[4].nums = 0
      cart[5].nums = 0
  
  res.redirect('/browse');
});