import { NavLink } from "react-router-dom";
import { useShopContext } from "../../components/header/ShopProvider";
import "./Cart.scss";

const icon = "./assets/img/Meubel.png";
const arrow = "./assets/img/Vector.png";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, calculateTotalPrice } =
    useShopContext();

  return (
    <div className="cart">
      <section className="cart_hero">
        <div className="container">
          <div className="cart_hero_text">
            <div className="cart_head">
              <img src={icon} alt="" />
              <h1>Cart</h1>
            </div>
            <div className="links">
              <NavLink to="/">Home</NavLink>
              <img src={arrow} alt="arrow" />
              <NavLink to="">Cart</NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="carts">
        <div className="container">
          <div className="cart_content">
            <div className="got_cart">
              <div className="cart_head">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>
              {cartItems.map((item, index) => (
                <div className="card_item" key={index}>
                  <img src={item.image} alt={item.title} />

                  <div className="item_texts">
                    <h1>{item.description}</h1>
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                    <button onClick={() => addToCart(item.id)}>Add</button>
                    <input type="text" />
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart_total">
              <h1>Cart Totals</h1>
              <div className="total">
                <div className="total_text">
                  <span>Subtotal</span>
                  <p>{calculateTotalPrice()}</p>
                </div>
                <div className="total_text">
                  <span>Total</span>
                  <h2>{calculateTotalPrice()}</h2>
                </div>
              </div>
              <div className="checkout">
                <NavLink>
                  <button>Checkout</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
