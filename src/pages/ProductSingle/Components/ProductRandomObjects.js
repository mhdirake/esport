import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

function ProductRandomObjects({ randomObjects, prevObjects }) {
  const [objects, setObjects] = useState();
  const [hideImages, setHideImage] = useState(false);

  useEffect(() => {
    if (prevObjects) {
      setObjects(prevObjects);
      setHideImage(true);
    }

    setTimeout(() => {
      setObjects(randomObjects);
      setHideImage(false);
    }, [300]);
  }, [prevObjects, randomObjects]);

  return (
    <RandomObjectWrapper hideImages={hideImages}>
      <img src={objects?.[0]} className="single-random-object-1" alt="" />
      <img src={objects?.[1]} className="single-random-object-2" alt="" />
      <img src={objects?.[2]} className="single-random-object-3" alt="" />
    </RandomObjectWrapper>
  );
}

const RandomObjectWrapper = styled(Box)(({ hideImages, theme }) => ({
  img: {
    position: "absolute",

    [theme.breakpoints.down("md")]: {
      position: "fixed",
      zIndex: -1,
    },
  },

  ".single-random-object-1": {
    left: "160px",
    top: "90px",
    width: "120px",
    height: "120px",
    objectFit: "contain",
    animation: hideImages ? "hide" : "show-1",
    animationDuration: "0.3s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },

  ".single-random-object-2": {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    left: "60px",
    top: "50%",
    animation: hideImages ? "hide" : "show-2",
    animationDuration: "0.3s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },

  ".single-random-object-3": {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    left: "160px",
    top: "55%",
    animation: hideImages ? "hide" : "show-3",
    animationDuration: "0.3s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },

  "@keyframes hide": {
    "100%": {
      left: "100%",
      top: "100%",
      opacity: "0",
    },
  },

  "@keyframes show-1": {
    "0%": {
      left: "100%",
      top: "100%",
      opacity: "0",
    },
    "100%": {
      left: "160px",
      top: "90px",
      opacity: "1",
    },
  },

  "@keyframes show-2": {
    "0%": {
      left: "100%",
      top: "100%",
      opacity: "0",
    },
    "100%": {
      left: "60px",
      top: "50%",
      opacity: "1",
    },
  },

  "@keyframes show-3": {
    "0%": {
      left: "100%",
      top: "100%",
      opacity: "0",
    },
    "100%": {
      left: "160px",
      top: "55%",
      opacity: "1",
    },
  },
}));

export default ProductRandomObjects;
