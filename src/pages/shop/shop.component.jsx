import React, {useState} from "react";

import SHOP_DATA from "./ShopData";

import CollectionItem from "../../components/collection/collection.items";
 import './shop.style.css'
const ShopPage = () =>{
    const [shopdata] = useState(SHOP_DATA);
    return(
        <div className="ShopClass">
            {
                shopdata.map(({id, ...otherprops}) => (
                    <CollectionItem key={id} {...otherprops} />
                ))
            }
        </div>
    )
}

export default ShopPage;