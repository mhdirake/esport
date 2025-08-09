import { AnimatePresence, motion } from "framer-motion";
import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";

import { isVisible } from "@testing-library/user-event/dist/utils";

function ProductItem({ isActive }) {
  const animationValues = useMemo(() => {
    if (isActive) {
      return {
        redBox: {
          x: 0,
        },
        pinkBox: {
          x: 0,
        },
      };
    } else {
      return {
        redBox: {
          x: -500,
        },
        pinkBox: {
          x: -500,
        },
      };
    }
  }, [isActive]);

  return (
    <Box position="relative" height="100vh" overflow="hidden">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              style={{
                position: "absolute",
                background: "red",
                width: "60px",
                height: "60px",
                top: "60px",
                left: "70px",
              }}
              animate={animationValues.redBox}
              transition={{ ease: "easeIn", duration: 1 }}
            ></motion.div>
            <motion.div
              style={{
                position: "absolute",
                background: "blue",
                width: "60px",
                height: "60px",
                top: "90px",
                left: "100px",
              }}
              animate={animationValues.redBox}
              transition={{ ease: "easeIn", duration: 0.6 }}
            ></motion.div>
            <motion.div
              style={{
                position: "absolute",
                background: "pink",
                width: "60px",
                height: "120px",
                top: "300px",
                right: 0,
              }}
              animate={animationValues.pinkBox}
              transition={{ ease: "easeInOut", duration: 3 }}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}

const BoxRed = styled(Box)(({ color, left, top }) => ({
  position: "absolute",
  background: color,
  width: "60px",
  height: "60px",
  top,
  left,
}));

export default ProductItem;
