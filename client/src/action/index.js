import axios from "axios";
import history from "../history";
import { message, tokenConfig } from "./authActions";

// //List Items
export const getList = (category) => (dispatch) => {
  axios
    .get(`/eapparel/${category}`)
    .then((res) =>
      dispatch({
        type: "GET_LIST",
        payload: res.data,
      })
    )
    .catch(() => history.push("/"));
};

//Show Item Detail
export const showItem = (category, id) => (dispatch) => {
  axios
    .get(`/eapparel/${category}/${id}`)
    .then((res) =>
      dispatch({
        type: "SHOW_ITEM",
        payload: res.data,
      })
    )
    .catch(() => history.push("/"));
};

//Change list quantity
export const changeQty = (i, quantity) => (dispatch) => {
  dispatch({
    type: "CHANGE_QTY",
    i,
    quantity,
  });
};

//Add Item to Cart
export const addToCart = (item, buynow) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: item,
  });
  return buynow === "buynow" ? history.push("/eapparel/shoppingcart") : null;
};

//Update Item Quantity in Cart
export const updateCartItemQty = (i, quantity, buynow) => (dispatch) => {
  dispatch({
    type: "UPDATE_CART_ITEM_QTY",
    i,
    quantity,
  });
  //Navigate to shopping cart if user buys now
  return buynow === "buynow" ? history.push("/eapparel/shoppingcart") : null;
};

//Delete Item from Cart
export const deleteItem = (item) => (dispatch) => {
  dispatch({
    type: "DELETE_ITEM",
    item,
  });
};

//Post Checkout Payment (Pay with Card)
export const checkOut = (token, order) => (dispatch, getState) => {
  axios
    .post("/eapparel/checkout", { token, order }, tokenConfig(getState)) 
    .then((res) => {
      if (res.data.status === "Payment success!") {
        dispatch({
          type: "CHECKOUT",
          payload: res.data,
        });
        history.push("/eapparel/shoppingcart/ordercomplete");
      }
      //If Payment failed, send status
      dispatch(message(res.data.status));
    })
    .catch((err) => console.log(err));
};

//Updates/refreshes feature bar 
export const updateFeature = (category) => (dispatch) => {
  dispatch({
    type: "FEATURE_UPDATE",
    payload: category,
  });
};

//Get order history
export const getHistory = (id) => (dispatch) => {
  axios
    .get(`/eapparel/orderhistory/${id}`)
    .then((res) =>
      dispatch({
        type: "ORDER_HISTORY",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
