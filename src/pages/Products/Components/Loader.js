import { Box, styled } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import logo from 'assets/logo/logo.png';

export default function Loader({ loading }) {
  const [gradientPercent, setGradientPercent] = useState(1);
  const [hideLoading, setHideLoading] = useState(false);

  function count() {
    let number = 1;
    setGradientPercent(1);

    var count = setInterval(function () {
      if (number >= 130) {
        clearInterval(count);
      }

      number = number + 2;
      setGradientPercent((number) => number + 2);
    }, 1);
  }

  var hexValues = useMemo(
    () => [
      "rgb(43, 6, 14)",
    ],
    []
  );

  const randomHex = useMemo(
    () => hexValues[Math.floor(Math.random() * 1)],
    [hexValues]
  );

  const gradient = useMemo(() => {
    if (loading) {
      return `radial-gradient(circle, ${randomHex} 10%, rgba(0, 0, 0) 70%)`;
    } else {
      if (gradientPercent) {
        setTimeout(() => {
          setHideLoading(true);
        }, 1500);
      }
      return `radial-gradient(circle, ${randomHex} ${gradientPercent}%, rgba(0, 0, 0) 100%)`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, gradientPercent]);

  useEffect(() => {
    if (!loading) count();
  }, [loading]);

  return (
    <>
      {!hideLoading && (
        <Loading color={gradient} gradientPercent={gradientPercent}>
          <img src={logo} />
        </Loading>
      )}
    </>
  );
}

const Loading = styled(Box)(({ color, gradientPercent }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `${color}`,
  zIndex: 99999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  strokeDasharray: 487,
  strokeDashoffset: 487,
  animation: gradientPercent >= 130 ? "hide-page 1s ease forwards" : "",

  "&:before": {
    content: "''",
    position: "fixed",
    top: 0,
    left: 0,
    background: "#000000",
    zIndex: 1,
    width: "100%",
    height: "100%",
    animation: "hide-page 0.4s linear forwards",
  },

  img: {
    maxWidth: "150px",
    height: "auto"
  },

  svg: {
    zIndex: 1,
    position: "relative",
    maxWidth: "100%",
    animation: "complete-big-line 3.5s linear forwards",
  },

  "@keyframes complete-big-line": {
    "0%": {
      strokeDashoffset: 487,
      fill: "transparent",
    },
    "90%": {
      strokeDashoffset: 0,
      fill: "transparent",
    },
    "100%": {
      strokeDashoffset: 0,
      fill: "#ffffff",
    },
  },

  "@keyframes hide-page": {
    "0%": {
      opacity: 1,
    },
    "99%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
      display: "none !important",
    },
  },
}));
