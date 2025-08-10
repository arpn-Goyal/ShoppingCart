import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartCounter.cartItem);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>

      {cartItems.length > 0 ? (
        <div className="row g-4">
          {cartItems.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.itemId}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.shortDescription}
                  </p>
                  <h6 className="mb-3">${item.price}</h6>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => dispatch(remove(item.itemId))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">Your cart is empty. Add some products first!</p>
      )}
    </div>
  );
}
