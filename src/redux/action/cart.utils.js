export const CheckCartItems = (CartItems, CartAddItems) => {
  const exist = CartItems.find((CartItem) => CartItem.id === CartAddItems.id);

  if (exist) {
    return CartItems.map((CartItem) =>
      CartItem.id === CartAddItems.id
        ? { ...CartItem, quantity: CartItem.quantity + 1 }
        : CartItem
    );
  }
  return [...CartItems, { ...CartAddItems, quantity: 1 }];
};

export const decreaseCart = (CartItems, CartIncreaseItems) => {
  const exist = CartItems.find((CartItem) => CartItem.id === CartIncreaseItems.id);

  if (exist) {
    return CartItems.map((CartItem) =>
      CartItem.id === CartIncreaseItems.id
        ? CartItem.quantity > 1
          ? { ...CartItem, quantity: CartItem.quantity - 1 }
          : CartItem
        : CartItem
    );
  }
  return CartItems;
};


export const removeCart = (CartItems, CartRemoveItems) => {
  const exist = CartItems.find((CartItem) => CartItem.id === CartRemoveItems.id);

  if (exist) {
    return CartItems.filter(items => items.id !== CartRemoveItems.id)
  }
  return CartItems;
};

