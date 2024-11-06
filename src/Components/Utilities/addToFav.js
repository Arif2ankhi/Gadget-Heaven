// const getFavList = () => {
//     const favList = localStorage.getItem("favlist");
//     if (favList) {
//       const send = JSON.parse(favList);
//       return send;
//     } else {
//       return [];
//     }
//   };
  
  // // const addToFavList = (id) => {
  //   export const getFavList = () => {
  //     // Fetch wishlist items from local storage or a mock API response
  //     const favData = localStorage.getItem('favItems');
  //     return favData ? JSON.parse(favData) : [];
  //   };
    
  // const setFavList = (favList) => {
  //   localStorage.setItem("favlist", JSON.stringify(favList));
  // };
  // export { addToFavList, setFavList };

//   // Define the function to add items to the favorites list
// export const addToFavList = (item) => {
//   // Retrieve the existing wishlist from localStorage
//   let favList = JSON.parse(localStorage.getItem('favItems')) || [];

//   // Check if the item is already in the wishlist
//   const itemExists = favList.some(favItem => favItem.id === item.id);

//   if (!itemExists) {
//     // Add the new item to the wishlist
//     favList.push(item);
//     localStorage.setItem('favItems', JSON.stringify(favList));
//   }
// };

// // Define the function to get items from the favorites list
// export const getFavList = () => {
//   const favData = localStorage.getItem('favItems');
//   return favData ? JSON.parse(favData) : [];
// };

// export { addToFavList, getFavList };

// export const addToFavList = (item) => {
//   let favList = JSON.parse(localStorage.getItem('favItems')) || [];
//   const itemExists = favList.some(favItem => favItem.id === item.id);

//   if (!itemExists) {
//     favList.push(item);
//     localStorage.setItem('favItems', JSON.stringify(favList));
//   }
// };

// export const getFavList = () => {
//   const favData = localStorage.getItem('favItems');
//   return favData ? JSON.parse(favData) : [];
// };

// export { addToFavList, getFavList };

const getFavList = () => {
  const favList = localStorage.getItem("favlist");
  if (favList) {
    const send = JSON.parse(favList);
    return send;
  } else {
    return [];
  }
};

const addToFavList = (id) => {
  const favList = getFavList();
  if (favList.includes(id)) {
    console.log("already exists!");
  } else {
    favList.push(id);
    const store = JSON.stringify(favList);
    localStorage.setItem("favlist", store);
  }
};
const setFavList = (favList) => {
  localStorage.setItem("favlist", JSON.stringify(favList));
};
export { addToFavList, getFavList, setFavList };