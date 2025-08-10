import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice.js";

const Item = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          {item.shortDescription}
        </p>
        <h6 className="mb-3">${item.price}</h6>
        <button
          className="btn btn-primary w-100"
          onClick={()=> dispatch(add(item))}
        >
          Add to Cart
        </button>
      </div>
    </div>

  )
}

export default Item