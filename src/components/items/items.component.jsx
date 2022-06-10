import React from "react";
import CustomButton from "../custombutton/Custombutton.component";
import { addtoCart } from "../../redux/action/cart";
import './items.style.css'
import { useDispatch } from "react-redux";
const DisplayItems = ({item}) =>{
    const { id, name, imageUrl, price} = item
    const dispatch = useDispatch();
    return(
        <div className='items' key={id}>
                <div className="image"
                    style={{
                    backgroundImage : `url(${imageUrl})`,
                    }}
                />
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}$</span>
                </div>
                <CustomButton invert onClick={()=>{ 
                    dispatch(addtoCart(item))
                    
                    }} >ADD TO CART</CustomButton>
        </div>
    )
}
export default DisplayItems;