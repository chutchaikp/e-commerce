
import StripeCheckout from 'react-stripe-checkout';
import './App.css';

function App() {
  const KEY = 'pk_test_51MeSOmI9N1I84JHk0JOcsUObPQ7r0LLIjC8RuZ6uBZYlm8gSbAf4KDUSFY3CnyhNXXFoCYeLH7CycTdUrrycFBDC00oLhPtftK'

  const onToken = (token) => {
    try {
      console.log(token)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App">

      <StripeCheckout name='dev shop'
        image='https://avatars.githubusercontent.com/u/2068733?s=400&u=e19ccdba63aa7c94653d463fda4e83dc93b68deb&v=4'
        billingAddress
        shippingAddress
        description='Your amount is $ 20'
        amount={20}
        token={onToken}
        stripeKey={ }
      >

        <button>PAY</button>
      </StripeCheckout>

    </div>
  );
}

export default App;
