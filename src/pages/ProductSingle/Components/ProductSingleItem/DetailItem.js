import { Box, styled } from "@mui/material";
import React, { useState } from "react";

function DetailItem({ item, index, isActive }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      <DotButton
        onClick={() => setShowFullDescription((v) => !v)}
        isActive={isActive}
        left={item.left}
        bottom={item.bottom}
        index={index}
        open={showFullDescription}
      ></DotButton>
    </>
  );
}

const DotButton = styled(Box)(({ isActive, left, bottom }) => {
  return {
    background: "#333333",
    width: isActive ? "40px" : "0",
    height: isActive ? "40px" : "0",
    borderRadius: "50%",
    padding: 0,
    position: "absolute",
    left: isActive ? left : "50%",
    transform: "translateX(-50%)",
    bottom: isActive ? bottom : "50%",
    transition: "left 1s ease-in 1s, bottom 1s ease-in 1s, border-radius 0.2s",
    animation: "blinking 0.4s infinite alternate",
    cursor: "pointer",
    "&:hover": {
      borderRadius: "8px",
    },

    "@keyframes blinking": {
      "0%": {
        backgroundColor: "#999999",
      },
      "100%": {
        backgroundColor: "#333333",
      },
    },
  };
});

export default DetailItem;
