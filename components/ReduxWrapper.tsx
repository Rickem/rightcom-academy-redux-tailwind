"use client";
import { store } from "@/lib/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};
const ReduxWrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
