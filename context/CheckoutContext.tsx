"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartData, ShippingAddress } from "@/types";

type CheckoutContextType = {
  cartData: CartData | null;
  setCartData: (data: CartData) => void;
  shippingAddress: ShippingAddress;
  setShippingAddress: (data: ShippingAddress) => void;
  isHydrated: boolean;
  resetCheckout: () => void;
};

const defaultShippingAddress: ShippingAddress = {
  fullName: "",
  email: "",
  phoneNumber: "",
  pinCode: "",
  city: "",
  state: "",
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [cartData, setCartDataState] = useState<CartData | null>(null);
  const [shippingAddress, setShippingAddressState] =
    useState<ShippingAddress>(defaultShippingAddress);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("ecoyaan-cart-data");
      const savedAddress = localStorage.getItem("ecoyaan-shipping-address");

      if (savedCart) {
        setCartDataState(JSON.parse(savedCart));
      }

      if (savedAddress) {
        setShippingAddressState(JSON.parse(savedAddress));
      }
    } catch (error) {
      console.error("Failed to load checkout state:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const setCartData = (data: CartData) => {
    setCartDataState(data);
    try {
      localStorage.setItem("ecoyaan-cart-data", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save cart data:", error);
    }
  };

  const setShippingAddress = (data: ShippingAddress) => {
    setShippingAddressState(data);
    try {
      localStorage.setItem("ecoyaan-shipping-address", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save shipping address:", error);
    }
  };

  const resetCheckout = () => {
    setCartDataState(null);
    setShippingAddressState(defaultShippingAddress);

    try {
      localStorage.removeItem("ecoyaan-cart-data");
      localStorage.removeItem("ecoyaan-shipping-address");
    } catch (error) {
      console.error("Failed to reset checkout:", error);
    }
  };

  const value = useMemo(
    () => ({
      cartData,
      setCartData,
      shippingAddress,
      setShippingAddress,
      isHydrated,
      resetCheckout,
    }),
    [cartData, shippingAddress, isHydrated]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }

  return context;
}