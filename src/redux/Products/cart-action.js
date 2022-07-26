// const cart = (state = {}, action) => {
//   switch (action.type) {
//     case 'incrementQuantityInCart':
//       const currentQuantity = state[action.itemId] || 0;
//       return {
//         ...state,
//         [action.itemId]: currentQuantity + 1
//       };
//     case 'decrementQuantityInCart':
//       const currentQuantity = state[action.itemId] || 0;
//       return {
//         ...state,
//         [action.itemId]: Math.max(currentQuantity - 1, 0)
//       };
//     case 'removeItemFromCart':
//       return {
//         ...state,
//         [action.itemId]: 0
//       };
//     default:
//       return state;
//   }
// };
