import React from "react";
import SHOP_DATA from "../shop/ShopData";
import DisplayItems from "../../components/items/items.component";
import './category.style.css'
function CategoryComponent({ match }) {
  const Data = SHOP_DATA.filter(
    (title) => title.routeName === match.params.category.toLowerCase()
  );
  var MyObj = null;
  var items = null;
  if(Data.length){
    MyObj = Data[0];
    items = MyObj.items;
  }
  return (
    <>
      {Data.length ? (
        <div className="collection-tab">
          <h1 style={{textAlign: 'center'}}> {MyObj.title.toUpperCase()} </h1>

          <div className="item">
            {items.map((data) => {
              return (
                <div className="items" key={data.id}>
                  <DisplayItems key={data.id} item={data} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 style={{textAlign: 'center', minHeight : '80vh'}}>Sorry, Category Not Found </h1>
      )}
    </>
  );
}

export default CategoryComponent;
