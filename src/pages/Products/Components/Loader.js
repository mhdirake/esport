import { Box, styled } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export default function Loader({ loading }) {
  const [gradientPercent, setGradientPercent] = useState(10);
  const [hideLoading, setHideLoading] = useState(false);

  function count() {
    let number = 10;
    setGradientPercent(10);

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
      "rgba(45,64,143)",
      "rgb(215, 134, 183)",
      "rgb(147, 24, 21)",
      "rgb(74, 177, 185)",
      "rgb(91, 46, 135)",
      "rgba(175,198,95)",
      "rgb(239, 194, 197)",
      "rgb(248, 219, 157)",
      "rgb(199, 232, 235)",
      "rgba(74,126,192)",
    ],
    []
  );

  const randomHex = useMemo(
    () => hexValues[Math.floor(Math.random() * 10)],
    [hexValues]
  );

  const gradient = useMemo(() => {
    if (loading) {
      return `radial-gradient(circle, ${randomHex} 10%, rgba(250, 250, 250) 70%)`;
    } else {
      if (gradientPercent) {
        setTimeout(() => {
          setHideLoading(true);
        }, 1500);
      }
      return `radial-gradient(circle, ${randomHex} ${gradientPercent}%, rgba(250, 250, 250) 100%)`;
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
          {" "}
          <svg
            width="155"
            height="80"
            viewBox="0 0 155 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.5 6.6254C63.8947 3.07306 69.9425 1.99995 73 1.99995C63.4 5.99995 60.6667 8.33329 60.5 8.99996C68.5 18.6 67.5 30.6666 66 35.5C62 46.7 47 53.8333 40 56C34 58 17.8333 56.8333 10.5 56C-1.50003 54 -0.166693 52.8333 1.99997 52.5H12C26.4 50.9 32 40.3333 33 37C34 33.6666 38.3 24.5 47.5 14.5C49.7203 12.0865 52.0824 10.11 54.4541 8.49996M57.5 6.6254C50.6667 2.25025 33.3 -3.50004 18.5 8.49996C0 23.5 1.5 48 23.5 42.5C27.5 41.1721 35.5 34.813 35.5 20C35.3333 18.5644 34.6 17.7545 33 26C31 36.3069 20 46.7705 13.5 35.5C7 24.2294 25.9081 -9.00008 54.4541 8.49996M57.5 6.6254C56.4899 7.18654 55.4711 7.80955 54.4541 8.49996M121 31C102.2 66.6 95.5 73.5 83 77.5C64 82 57.6667 75.1667 57.5 71.5C57.5 59.5 67.8333 59.5 73 61C61.4 67.8 64.1667 72.5 67 74C85 80 97.5 61.1667 101.5 51C89.1 62.2 84.6667 56.6667 84 52.5C69 64.5 59.5 51 73 35.5C83.8 23.0999 91.1667 28 93.5 32L96 30H103.5C102.5 37 83 53.2686 92 54.5C99.2 55.4851 108.333 39.2438 112 31H106.5V28.5H113.5C138.5 -10 155 4.5 151.5 11.5C148.7 17.0999 144.667 15.8333 143 14.5C148.415 15.9769 144.621 -12.6004 122.07 29M121 31H134.5C128.667 38.6667 119.2 54.5 128 56.5C136.8 58.5 149.333 43.3333 154.5 35.5C154.5 35.1666 154.1 34.6999 152.5 35.5C142.667 47 125.3 65 134.5 45C135.833 41.8333 139.8 34.2 145 29H122.07M121 31C121.361 30.316 121.718 29.6494 122.07 29M57.5 11.5C55 13.6666 48.4 21.4 42 35C35.6 48.6 24.3333 53.6666 19.5 54.5C27.6667 55.8333 46.1 54.9 54.5 40.5C62.9 26.1 60 15.1666 57.5 11.5ZM86 30C81.8333 31.5 74.1 38.0999 74.5 52.5C74.5 55 77.1 57 87.5 45C90.8333 40 95 28 86 30ZM144 19C142.667 19 140 19.8 140 23C140 26.2 142.667 27 144 27C145.5 27 148 26.2 148 23C148 19.8 145.5 19 144 19Z"
              stroke="white"
            />
          </svg>
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
    background: "#ffffff",
    zIndex: 1,
    width: "100%",
    height: "100%",
    animation: "hide-page 0.4s linear forwards",
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
