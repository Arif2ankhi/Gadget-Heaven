

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { addToCartList } from "../Utilities/addToCart";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [activeView, setActiveView] = useState("cart");
  const [sortOrder, setSortOrder] = useState("desc"); // State to keep track of sort order

  const allItems = useLoaderData();

  // Load cart items
//   useEffect(() => {
//     const storedCartList = getStoredCartList();
//     const cartItems = storedCartList
//       .map((id) => allItems.find((item) => item.id === id))
//       .filter((item) => item);
//     setCartList(cartItems);
//   }, [allItems]);

  // Load wishlist items
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const wishItems = storedWishList
      .map((id) => allItems.find((item) => item.id === id))
      .filter((item) => item);
    setWishList(wishItems);
  }, [allItems]);

  // Toggle between cart and wishlist
  const toggleView = (view) => {
    setActiveView(view);
  };

  // Handle sorting by price
  const handleSortByPrice = () => {
    const sortedCartList = [...cartList];
    sortedCartList.sort((a, b) => {
      if (sortOrder === "desc") {
        return b.price - a.price; // Sort in descending order
      } else {
        return a.price - b.price; // Sort in ascending order
      }
    });
    setCartList(sortedCartList);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc"); // Toggle sort order for the next click
  };

  const handleRemoveFromCart = (id) => {
    removeFromStoredCartList(id); // Remove from localStorage
    const updatedCartList = cartList.filter((item) => item.id !== id); // Remove from state
    setCartList(updatedCartList); // Update the state
  };

  const handleRemoveFromWishList = (id) => {
    removeFromStoredWishList(id); // Remove from localStorage
    const updatedWishList = wishList.filter((item) => item.id !== id); // Remove from state
    setWishList(updatedWishList); // Update the state
  };

  const handleAddToCart = (item) => {
    addToCartList(item.id);
    setCartList([...cartList, item]); // Add item to the state
    toast.success("Item added to cart successfully!"); // Show success toast notification
  };

  return (
    <div>
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="bg-[#9538E2]">
        <div className="text-center">
          <div className="max-w-md mx-auto pt-10 text-white">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all.
            </p>
            <div className="flex gap-2 justify-center pb-10">
              <button
                className="btn rounded-full bg-[#9538E2] text-white"
                onClick={() => toggleView("cart")}
              >
                <i className="fas fa-shopping-cart text-white"></i> Cart
              </button>
              <button
                className="btn rounded-full bg-[#9538E2] text-white"
                onClick={() => toggleView("wishList")}
              >
                <i className="fa-solid fa-heart"></i> Wish List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart view */}
      {activeView === "cart" && (
        <div className="mb-[200px] mt-2 p-4">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Cart ({cartList.length})</h3>
            <h3 className="text-2xl font-bold">
              Total Cost: $
              {cartList.reduce((total, item) => total + item.price, 0)}
            </h3>
            <div className="flex gap-2">
              <button
                className="btn w-32 rounded-full text-purple-900 border-purple-900"
                onClick={handleSortByPrice} // Sorting by price on button click
              >
                Sort By Price
              </button>
              <button className="btn w-32 rounded-full bg-[#9538E2] text-white">
                Purchase
              </button>
            </div>
          </div>
          {cartList.map((cartItem) => (
            <Cart key={cartItem.id} cart={cartItem} />
          ))}
        </div>
      )}

      {/* Wishlist view */}
      {activeView === "wishList" && (
        <div className="mb-[200px] mt-2 p-4">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">
              Wish List ({wishList.length})
            </h3>
          </div>
          {wishList.map((wishItem) => (
            <WishList
              key={wishItem.id}
              wish={wishItem}
              onAddToCart={() => handleAddToCart(wishItem)} // Pass handleAddToCart function
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
