import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeButton from "../../components/stripeCheckout/stripecheckout.component";
import { addtoCart, decreaseCart, removeItem } from "../../redux/action/cart";
import './checkout.css'
const CheckOut = () =>{
    const dispatch = useDispatch();
    const data = useSelector(state => state.cartReducer.cartItems)
    const user = useSelector(state => state.authReducer.user)
    var ans = 0;
    return (
        <>
        {
            user
            ?
            <div className="checkout-item">
            <div className="checkout-header">
                <div>
                    <span>Product</span>
                </div>
                <div>
                    <span>Quantity</span>
                </div>
                <div>
                    <span>Price</span>
                </div>
                <div>
                    <span>Remove</span>
                </div>
            </div>
            <div className="hr" />
            {
                data.length ?
                <>
                <div className="items-list">
                {
                    data.map(items =>{
                        ans += items.quantity * items.price
                        return (
                            <div key={items.id}>
                            <div className="checkout-header" >
                                <div>
                                    <img src={items.imageUrl} alt="checkout-imag" />
                                </div>
                                <div>
                                    <span className="pointer" onClick={() => dispatch(decreaseCart(items))}> &#8249; </span>
                                    <span>{items.quantity}</span>
                                    <span className="pointer" onClick={() => dispatch(addtoCart(items))}> &#8250; </span>
                                </div>
                                <div>
                                    <span>{items.price}&#36;</span>
                                </div>
                                <div>
                                    <span className="pointer" onClick={()=> dispatch(removeItem(items))}>X</span>
                                </div>
                            </div>
                            <hr className="hr" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="total"> Total : { ans }&#36; </div>
            <div className="total">
                <StripeButton price={ans} />
            </div>
            </>
            :
            <div className="checkout-header empty" style={{height : '45vh'}}>
                Your Cart is Empty
            </div>
            }
        </div>
        :
        <div className="checkout-item">
            <span style={{textAlign : 'center', marginTop : '250px', height: '40vh' , fontSize : '18px'}}>Please Sign in To Continue</span>
        </div>
        }
        </>
    )
}

export default CheckOut;