import React from "react";
import "react-bootstrap";
import "./App.js"
import { chars } from "./App.js";
export const SortByWinP = ({x}) => (
chars.sort((a, b) => {
    return b.x - a.x;
  }));

export const SortByName = ({ x }) => (
    chars.sort((a, b) => {
        if (a.x< b.x) {
            return -1;
          }
          if (a.x > b.x) {
            return 1;
          }
        
          // names must be equal
          return 0;
        })
);

export const SortByEliminations = ({x}) => (
    chars.sort((a, b) => {
        return b.x - a.x;
    })
);

export const SortByGamesWon = ({x}) => (
    chars.sort((a, b) => {
        return b.x - a.x;
    })
);