import { Box, styled } from "@mui/material";

const imagePlacement = ({ isActive, isPrev, isNext }) => {
  if (isActive) return "50%";
  if (isPrev) return "50%";
  if (isNext) return "50%";
};

export const SwiperWrapper = styled(Box)(
  ({ bgColor, showBackgroundTransition }) => ({
    position: "relative",

    "> svg": {
      position: "fixed",
      top: "60%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      width: "100%",
      height: "100%",

      "&.product-svg-one": {
        zIndex: "1",
        transform: "translate(-50%, -50%) rotateZ(0deg) scale(1.9)",
        animation: "rotate-bg-product-1",
        animationDuration: "30s",
        animationTimingFunction: "linear",
        animationDelay: "0",
        animationFillMode: "",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      },

      "&.product-svg-two": {
        zIndex: "0",
        transform: "translate(-50%, -50%) rotateZ(-45deg) scale(2.4)",
        animation: "rotate-bg-product-2",
        animationDuration: "40s",
        animationTimingFunction: "linear",
        animationDelay: "0",
        animationFillMode: "",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      },

      "&.product-svg-three": {
        zIndex: "1",
        transform: "translate(-50%, -50%) rotateZ(45deg)",
        animation: "rotate-bg-product-3",
        animationDuration: "20s",
        animationTimingFunction: "linear",
        animationDelay: "0",
        animationFillMode: "",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      },
    },

    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      left: 0,
      top: 0,
      height: "100%",
      background: `radial-gradient(circle, rgba(226, 85, 226, 0) 20%, ${bgColor} 69%)`,
      transition: "all 1s",
    },

    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "#ffffff",
      transition: "all 1s",
      opacity: showBackgroundTransition ? 1 : 0,
    },

    "@keyframes rotate-bg-product-1": {
      "0%": {
        transform: "translate(-50%, -50%) rotateZ(0deg) scale(3)",
      },
      "100%": {
        transform: "translate(-50%, -50%) rotateZ(120deg) scale(2.4)",
      },
    },
    "@keyframes rotate-bg-product-2": {
      "0%": {
        transform: "translate(-50%, -50%) rotateZ(-45deg) scale(3.5)",
      },
      "100%": {
        transform: "translate(-50%, -50%) rotateZ(-120deg) scale(3.5)",
      },
    },
    "@keyframes rotate-bg-product-3": {
      "0%": {
        transform: "translate(-50%, -50%) rotateZ(45deg)",
      },
      "100%": {
        transform: "translate(-50%, -50%) rotateZ(120deg) scale(2.7)",
      },
    },
  })
);

export const ProductWrapper = styled(Box)(({ isActive, theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  position: "relative",

  ".random-object-1": {
    position: "absolute",
    top: isActive ? "calc(50% - 120px)" : "50%",
    left: isActive ? "calc(50% - 300px)" : "50%",
    width: "150px",
    transform: "translate(-50%, -50%) rotateY(180deg)",
    animation: "easy-motion-1",
    animationDuration: "50s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationFillMode: "both",
    zIndex: "-1",
    transition: "all 3s",
    opacity: isActive ? 1 : 0,

    [theme.breakpoints.down("md")]: {
      top: isActive ? "calc(50% - 60px)" : "50%",
      left: isActive ? "calc(50% - 120px)" : "50%",
      width: "60px",
    },
  },

  ".random-object-2": {
    position: "absolute",
    bottom: isActive ? "60px" : "50%",
    right: isActive ? "90px" : "50%",
    width: "100px",
    transform: "rotateY(180deg)",
    zIndex: "-1",
    animation: "easy-motion-2",
    animationDuration: "50s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationFillMode: "both",
    transition: "all 5s",
    transitionDelay: "2s",
    opacity: isActive ? 1 : 0,

    [theme.breakpoints.down("md")]: {
      transform: "transform(-50%) rotateY(180deg)",
      bottom: isActive ? "calc(50% - 120px)" : "50%",
      right: isActive ? "calc(50% - 150px)" : "50%",
      width: "70px",
    },
  },

  ".random-object-3": {
    position: "absolute",
    top: isActive ? "90px" : "50%",
    right: isActive ? "90px" : "50%",
    width: "70px",
    zIndex: "-1",
    animation: "easy-motion-2 200s infinite alternate",
    transition: "all 3s",
    opacity: isActive ? 1 : 0,
  },

  ".random-object-4": {
    position: "absolute",
    bottom: isActive ? "120px" : "50%",
    left: isActive ? "140px" : "50%",
    width: "90px",
    zIndex: "-1",
    transition: "all 3s",
    opacity: isActive ? 1 : 0,

    [theme.breakpoints.down("md")]: {
      transform: "transform(-50%)",
      bottom: isActive ? "calc(50% - 120px)" : "50%",
      left: isActive ? "calc(50% - 140px)" : "50%",
    },
  },

  ".random-object-5": {
    position: "absolute",
    top: isActive ? "90px" : "50%",
    left: isActive ? "calc(50% - 60px)" : "50%",
    transform: "translateX(-50%)",
    width: "120px",
    zIndex: "-1",
    transition: "all 3s ease-in-out",
    opacity: isActive ? 1 : 0,
  },

  ".random-object-6": {
    position: "absolute",
    top: isActive ? "6px" : "50%",
    left: isActive ? "10px" : "50%",
    zIndex: "-1",
    transition: "all 3s ease-in-out",
    transitionDelay: "2s",
    opacity: isActive ? 1 : 0,
  },

  "@keyframes easy-motion-1": {
    "0%": {
      transform: "translate(-50%, -50%) rotateY(180deg)",
    },
    "100%": {
      transform: "translate(-50%, -50%) rotateY(180deg) rotateZ(180deg)",
    },
  },

  "@keyframes easy-motion-2": {
    "0%": {
      transform: "rotateY(180deg)",

      [theme.breakpoints.down("md")]: {
        transform: "transform(-50%, -50%) rotateY(180deg)",
      },
    },
    "100%": {
      transform: "rotateY(180deg) rotateZ(-180deg)",

      [theme.breakpoints.down("md")]: {
        transform: "transform(-50%, -50%) rotateY(180deg) rotateZ(-180deg)",
      },
    },
  },
}));

export const ImageWrapper = styled(Box)(({ isActive, theme }) => ({
  position: "relative",

  ".product-image": {
    width: isActive ? "400px" : "200px",
    maxHeight: "500px",
    objectFit: "contain",
    height: "auto",
    transition: "width 1s",
    zIndex: "1",
    position: "relative",
  },
}));

export const ContentWrapper = styled(Box)(({ isActive, isPrev, isNext }) => ({
  top: "50%",
  left: imagePlacement({ isActive, isPrev, isNext }),
  position: "absolute",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  flexDirection: "column",
  width: "100%",
  height: "100%"
}));

export const ProductName = styled(Box)(({ isActive }) => ({
  fontSize: "200px",
  color: "#333333",
  transition: "all 2s",

  opacity: isActive ? "1" : "0",
  zIndex: "-1",
}));

export const ProductSubtitle = styled(Box)(({ isActive }) => ({
  position: "relative",
  zIndex: "3",
  fontSize: "30px",
  color: "#333333",
  opacity: isActive ? "1" : "0",
  transition: "opacity 3s",
}));

export const ThumbnailWrapper = styled(Box)(() => ({
  position: "fixed",
  zIndex: "9999",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",

  ".gallery-thumb-item": {
    transition: "all 0.6s",
    maxWidth: "100px",
  },

  ".swiper-slide": {
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    "&.swiper-slide-next": {
      ".gallery-thumb-item": {
        maxWidth: "150px",
        margin: "auto",
      },
    },
    "&.swiper-slide-active": {
      ".gallery-thumb-item": {
        maxWidth: "200px",
        margin: "auto",
      },
    },
    "&.swiper-slide-prev": {
      ".gallery-thumb-item": {
        maxWidth: "150px",
        margin: "auto",
      },
    },
  },
}));
