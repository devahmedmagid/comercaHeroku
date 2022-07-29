import React from 'react';
import axios from 'axios';
import { useState, useEffect, useHistory } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { axiosInstance } from '../config';

const KEY =
  'pk_test_51LBGYmIQRhGWSvYmh9UKzQwcYkvhjgrSqT2KTQ6M9xLa0JYrpmYYdmoZHHmLQX9PRgIg715CARPrmuzDelV0RKxc00awbvmCqJ';

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axiosInstance.post(
          `${axiosInstance.baseURL}api/checkout/payment`,
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(response.data);
        history.push('/success');
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest;
  }, [stripeToken, history]);
  return (
    <div>
      {stripeToken ? (
        <span>Processing. Please Wait...</span>
      ) : (
        <StripeCheckout
          name='Comerca'
          image=''
          billingAddress
          shippingAddress
          description='Your total is $20'
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button>Pay Now</button>;
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
