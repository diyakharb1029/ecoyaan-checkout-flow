export type CartItem = {
  product_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  image: string;
};

export type CartData = {
  cartItems: CartItem[];
  shipping_fee: number;
  discount_applied: number;
};

export type ShippingAddress = {
  fullName: string;
  email: string;
  phoneNumber: string;
  pinCode: string;
  city: string;
  state: string;
};