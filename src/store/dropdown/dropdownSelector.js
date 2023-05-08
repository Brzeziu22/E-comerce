import { createSelector } from "reselect";

const selectDropdownReducer=state=>state.dropdown;


export const selectCartItems=createSelector(
    [selectDropdownReducer],
    (dropdown)=> dropdown.products
)


export const selectIsCartOpen=createSelector(
   [selectDropdownReducer],
   (dropdown)=>dropdown.isCartOpen
)

export const selectCartCount=createSelector(
    [selectCartItems],
    (products)=>products.reduce(
        (cartCount, cartItem) => cartCount + cartItem.quantity,
        0
      )
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    (products)=>products.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      )
)

/*const newCartCount = products.reduce(
    (cartCount, cartItem) => cartCount + cartItem.quantity,
    0
  );

  const newCartTotal = products.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );*/