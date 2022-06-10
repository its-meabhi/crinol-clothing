import React from "react";
import "./collection.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DisplayItems from "../items/items.component";

const CollectionItem = ({ title, items }) => {
  const history = useHistory();
  return (
    <div className="collection-tab">
      <span
        className="collection-title"
      >
        <span style={{cursor: 'pointer', fontSize: '30px'}} onClick={() => history.push(`/shop/${title}`)}>{title}</span>
      </span>
      <div className="item">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <DisplayItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionItem;
