const chargeButton = document.getElementById('dostripe')

const fakeCard = {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2020,
    cvc: '123'
  }

const processCharge = async () => {
    const postCard = await fetch('/v1/tokens', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer pk_test_teWSsixnuyIAlLxu4IMey9dj00axxSkO3M`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fakeCard),
    })
    const token = await postCard.json()
    
    const fakeCharge = {
        amount: 2000,
        currency: "usd",
        source: token.id,
        description: "Charge for jenny.rosen@example.com"
    }
    const postCharge = await fetch('/v1/charges', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer pk_test_teWSsixnuyIAlLxu4IMey9dj00axxSkO3M`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fakeCharge),
      })
    const charge = await postCharge.json()
    console.log(charge)
  }
  chargeButton.addEventListener('click',processCharge)