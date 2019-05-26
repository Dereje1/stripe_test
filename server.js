const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const app = express()
app.use(express.static('client'))
app.use(bodyParser.json());


//must register phone for this work
app.post('/charge', async (req,res) => {
    const { card, purchase } = req.body;
    try {
       const token = await stripe.tokens.create({ card })
       purchase.source = token.id
       const charge = await stripe.charges.create(purchase)
       res.json(charge)
    } catch (error) {
       console.log(error)
    }
})



app.listen(3000, () => console.log('listening on 3000'))