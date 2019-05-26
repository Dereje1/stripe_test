const express = require('express')
require('dotenv').config();
const app = express()
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET)
app.use(express.static('client'))
app.use(bodyParser.json());


//must register phone for this work
app.post('/v1/tokens',(req,res)=>{
    stripe.tokens.create({
        card: req.body
      }, (err, token)=> {
        // asynchronously called
    if(err) console.log(err)
        res.json(token)
    });
})

app.post('/v1/charges',(req,res)=>{
    stripe.charges.create(req.body, (err, charge) =>{
    // asynchronously called
    if(err) console.log(err)
        res.json(charge)
    });
})

app.listen(3000, () => console.log('listening on 3000'))