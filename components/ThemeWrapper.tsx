"use client";

import { RootState } from "@/lib/store";
import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  children: ReactNode;
};
export const ThemeWrapper = ({ children }: Props) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <div
      className={
        darkMode
          ? "dark:bg-gray-900 text-orange-500"
          : "bg-gray-100 text-teal-600"
      }
    >
      {children}
    </div>
  );
};
