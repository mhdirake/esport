import React from "react";

function SVGBackgrounds({ bgColor }) {
  return (
    <>
      <svg
        class="product-svg-one"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="transparent"></rect>
        <g transform="translate(467.92781634340577 285.4350306887479)">
          <path
            d="M82.7 -31.9C93.7 7.1 79.9 49 40 85.2C0 121.4 -66.1 151.7 -98.1 129.7C-130 107.8 -127.8 33.5 -105.7 -20.7C-83.7 -74.9 -41.8 -108.9 -3 -108C35.8 -107 71.6 -70.9 82.7 -31.9"
            fill="#ffffff30"
          ></path>
        </g>
      </svg>

      <svg
        class="product-svg-two"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="transparent"></rect>
        <g transform="translate(467.92781634340577 285.4350306887479)">
          <path
            d="M82.7 -31.9C93.7 7.1 79.9 49 40 85.2C0 121.4 -66.1 151.7 -98.1 129.7C-130 107.8 -127.8 33.5 -105.7 -20.7C-83.7 -74.9 -41.8 -108.9 -3 -108C35.8 -107 71.6 -70.9 82.7 -31.9"
            fill={bgColor}
          ></path>
        </g>
      </svg>

      <svg
        class="product-svg-three"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="transparent"></rect>
        <g transform="translate(467.92781634340577 285.4350306887479)">
          <path
            d="M82.7 -31.9C93.7 7.1 79.9 49 40 85.2C0 121.4 -66.1 151.7 -98.1 129.7C-130 107.8 -127.8 33.5 -105.7 -20.7C-83.7 -74.9 -41.8 -108.9 -3 -108C35.8 -107 71.6 -70.9 82.7 -31.9"
            fill="#ffffff60"
          ></path>
        </g>
      </svg>
    </>
  );
}

export default SVGBackgrounds;
