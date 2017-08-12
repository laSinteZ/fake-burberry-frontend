import React from "react";
import Responsive from "react-responsive";

export const LgOnly = ({ children }) =>
  <Responsive minWidth="62rem" children={children} />;
export const Md = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;
