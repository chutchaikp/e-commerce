import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
// import './App.css';

// import data from './data.js';
// import datax from './data2';
// import { datas } from './data3.js';

import data4 from './data4.js';

function Pay() {
  const navigate = useNavigate();

  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {
    debugger;

    // const _data1 = data;
    // const _data2 = datax;
    // const _data3 = datas;
    const _data4 = data4;

    debugger;
    debugger;
  }, []);

  // Authorization: Bearer sk_test_51MeSOmI9N1I86dCREHX3N2sNQToccwXeOe9orsFeg6RMqS31mKe48peWT7D1Es7qZAH9009jETLldh

  useEffect(() => {
    async function makeRequest() {
      try {
        // const config = {
        //   headers: { Authorization: `Bearer ${KEY}` },
        // };
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
          // config
        );
        console.log('client: ', res);
        navigate('/success');
      } catch (err) {
        console.log('------------');
        console.log(err);
        console.log('+++++++++++++');
      }
    }
    makeRequest();
  }, [stripeToken]);

  const KEY =
    'pk_test_51MeSOmI9N1I84JHk0JOcsUObPQ7r0LLIjC8RuZ6uBZYlm8gSbAf4KDUSFY3CnyhNXXFoCYeLH7CycTdUrrycFBDC00oLhPtftK';

  const onToken = (token) => {
    try {
      console.log(token);
      setStripeToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {stripeToken ? (
        <> Waiting ... </>
      ) : (
        <StripeCheckout
          name="dev shop"
          image="https://avatars.githubusercontent.com/u/2068733?s=400&u=e19ccdba63aa7c94653d463fda4e83dc93b68deb&v=4"
          billingAddress
          shippingAddress
          description="Your amount is $ 20"
          amount={20}
          token={onToken}
          stripeKey={KEY}
        >
          <button>PAY</button>
        </StripeCheckout>
      )}
    </div>
  );
}

export default Pay;
