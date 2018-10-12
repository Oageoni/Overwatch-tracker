import React from "react";
export const Border = ({ width, height, image1, image2, }) => (
  <svg width={width} height={height} viewBox="0 0 254 254">
    <image xlinkHref={image1} height="254" width="254" />
    <image xlinkHref={image2} height="254" width="254" />
    
  </svg>
);
