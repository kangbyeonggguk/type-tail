import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void; //리턴이 없어서 void
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
