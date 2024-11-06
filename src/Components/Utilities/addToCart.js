
const getCartList = () => {
  const cartList = localStorage.getItem("cartlist");
   return cartList ? JSON.parse(cartList) : [];
};
  
const addToCartList = (id) => {
  const cartList = getCartList();
  if (cartList.includes(id)) {
    console.log("already exists!");
  } else {
    cartList.push(id);
    const store = JSON.stringify(cartList);
    localStorage.setItem("cartlist", store);
  }
};
const setCartList = (cartList) => {
  localStorage.setItem("cartlist", JSON.stringify(cartList));
};


const removeFromCartList = (id) => {
  const cartList = getCartList();
  const updatedCartList = cartList.filter(itemId => itemId !== id); 
  setCartList(updatedCartList);  
};

export { addToCartList, getCartList,removeFromCartList, setCartList };