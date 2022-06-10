import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from 'react-stripe-checkout'
import { emptyCart } from "../../redux/action/cart";


const StripeButton = ({price}) =>{
    const stripePrice = price * 100;
    const StripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY
    const imageIcon = process.env.REACT_APP_STRIPE_ICON
    const dispatch = useDispatch()
    const onToken = () =>{
        console.clear()
        alert('Payment Successful')
        dispatch(emptyCart());
    }
    return(
        <StripeCheckout
        name="Crinol Clothing LTD."
        image={imageIcon}
        label="Pay Now"
        billingAddress
        shippingAddress
        description={`Your Total is $${price} `}
        amount={stripePrice}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={StripeKey}
        />
    )
}


export default StripeButton