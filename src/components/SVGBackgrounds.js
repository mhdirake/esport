import React from 'react';

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
            d="
        M-60,-80
        h120
        a20,20 0 0 1 20,20
        v120
        a20,20 0 0 1 -20,20
        h-120
        a20,20 0 0 1 -20,-20
        v-120
        a20,20 0 0 1 20,-20
        z
      "
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
            d="
        M-60,-80
        h120
        a20,20 0 0 1 20,20
        v120
        a20,20 0 0 1 -20,20
        h-120
        a20,20 0 0 1 -20,-20
        v-120
        a20,20 0 0 1 20,-20
        z
      "
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
            d="
        M-60,-80
        h120
        a20,20 0 0 1 20,20
        v120
        a20,20 0 0 1 -20,20
        h-120
        a20,20 0 0 1 -20,-20
        v-120
        a20,20 0 0 1 20,-20
        z
      "
            fill="#ffffff60"
          ></path>
        </g>
      </svg>
    </>
  );
}

export default SVGBackgrounds;
