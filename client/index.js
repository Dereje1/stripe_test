const chargeButton = document.getElementById('dostripe')

const fakePurchase = {
    card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2020,
        cvc: '123'
    },
    purchase: {
        amount: 2000,
        currency: "usd",
        description: "A fake Charge by xyz"
    }
  }

const processCharge = async () => {
    const purchase = await fetch('/charge', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer pk_test_teWSsixnuyIAlLxu4IMey9dj00axxSkO3M`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fakePurchase),
    })
    const charge = await purchase.json()
    console.log(charge)
}

chargeButton.addEventListener('click',processCharge)