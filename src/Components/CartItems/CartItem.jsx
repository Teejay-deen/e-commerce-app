import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, CartItems, removeToCart } = useContext(ShopContext);
  return (
    <div className="cartitem">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitem-format">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitem-quantity">{CartItems[e.id]}</button>
                <p>{e.new_price * CartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItem;
