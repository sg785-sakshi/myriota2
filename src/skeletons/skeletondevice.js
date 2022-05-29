import React from "react";
import SkeletonElement from "./SkeletonElement";

const Skeletondevice = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-device"></div>
      {/* <SkeletonElement type="header" /> */}
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
    </div>
  );
};

export default Skeletondevice;
