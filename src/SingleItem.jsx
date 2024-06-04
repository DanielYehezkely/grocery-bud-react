import React, { useState } from "react";

const SingleItem = ({ item, removeItem }) => {

  const [isChecked, setsIsChecked] = useState(false);

  return <div className="single-item">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setsIsChecked(!isChecked)} />
    <p 
    style={{ 
      textTransform: 'capitalize', 
      textDecoration: isChecked && 'line-through' }} 
      >{item.name}
      </p>
    <button className="btn remove-btn" type="button" onClick={() => removeItem(item.id)}>
      Delete
    </button>
  </div>;
};

export default SingleItem;
