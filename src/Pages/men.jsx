import React from "react";
import "../Components/Item/Item.css";
import ShopCategory from "./ShopCategory";
import men_banner from "../Components/Assets/banner_mens.png"

const MenItem = () => {
  return <ShopCategory banner={men_banner} category="men" />;
};

export default MenItem;