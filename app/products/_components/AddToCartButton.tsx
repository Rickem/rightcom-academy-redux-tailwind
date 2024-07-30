"use client";
import { addItem, CartItem } from "@/lib/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  cartItem: CartItem;
};
const AddToCartButton = ({ cartItem }: Props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-emerald-500 text-white rounded-md px-3 py-2"
        onClick={() => dispatch(addItem(cartItem))}
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default AddToCartButton;
