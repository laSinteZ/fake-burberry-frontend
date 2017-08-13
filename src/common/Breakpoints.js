import React from "react";
import Responsive from "react-responsive";

export const Lg = ({ children }) =>
  <Responsive minWidth="62rem" children={children} />;
export const ToMd = ({ children }) =>
  <Responsive maxWidth={992 - 1} children={children} />;
