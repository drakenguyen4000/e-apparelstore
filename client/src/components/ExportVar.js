export const cartCount = (props) => {
  let sum = 0;
  props.cart.forEach((item) => {
    return (sum += item.quantity);
  });
  return sum;
};
