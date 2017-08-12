import React from "react";
import Responsive from "react-responsive";

export const Large = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
export const ToLarge  = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;