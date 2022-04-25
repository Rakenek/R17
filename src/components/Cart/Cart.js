import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const DUMMY_CART_DATA = [
  {
    id: "c1",
    name: "Sushi",
    amount: 2,
    price: 12.99,
  },
];

const Cart = () => {
  const cartItems = (
    <ul>
      {DUMMY_CART_DATA.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
