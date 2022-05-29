import React from "react";
import "./skeleton.css";

const SkeletonElement = ({ type }) => {
  // template literal to have variable inside it
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default SkeletonElement;
