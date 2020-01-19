import React from "react";
import { MovingBorder } from "./components/MovingBorder";
import { HomeContainer } from "./components/HomeContainer";

export const Home = () => {
  return (
    <HomeContainer>
      <MovingBorder>
        <h1 className="text">Gilli's Dashboard</h1>
        <svg height="120" width="600" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="120" width="600" />
        </svg>
      </MovingBorder>
    </HomeContainer>
  );
};
