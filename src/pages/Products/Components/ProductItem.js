import { Box, styled } from "@mui/material";
import { ContentWrapper, ProductWrapper } from "../Styles";
import { useLocation, useNavigate } from "react-router-dom";

function ProductItem({
  isActive,
  isPrev,
  isNext,
  productImage,
  link,
  randomObjects,
  productLeftImage,
  productRightImage,
  color,
  index
}) {

  console.log(index);
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <ProductWrapper isActive={isActive} color={color}>
      <img class="random-object-1" src={randomObjects?.[0]} alt="product" />
      <img class="random-object-2" src={randomObjects?.[1]} alt="product" />
      <img class="random-object-3" src={randomObjects?.[2]} alt="product" />
      <img class="random-object-4" src={randomObjects?.[3]} alt="product" />
      <img class="random-object-5" src={randomObjects?.[4]} alt="product" />

      <ContentWrapper isActive={isActive} isPrev={isPrev} isNext={isNext}>
        <ImageWrapper isActive={isActive} index={index} >
          <img
            class="left-side-image"
            style={{ display: isActive ? "block" : "none" }}
            src={productLeftImage}
            alt=""
          />

          <img
            class="product-image"
            onClick={() => navigate(`${location.pathname}${link}`)}
            src={productImage}
            alt="product"
          />

          <img
            class="right-side-image"
            style={{ display: isActive ? "block" : "none" }}
            src={productRightImage}
            alt=""
          />
        </ImageWrapper>
      </ContentWrapper>
    </ProductWrapper>
  );
}

const ImageWrapper = styled(Box)(({ isActive, theme, index }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1000px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },

  ".product-image": {
    flex: "0 0 40%",
    maxWidth: isActive ? "400px" : "200px",
    maxHeight: "400px",
    objectFit: "contain",
    height: "auto",
    transition: "width 0.2s",
    zIndex: "1",
    position: "relative",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      width: isActive ? "200px" : "80px",
      maxHeight: "200px",
    },
  },

  ".left-side-image": {
    flex: "0 0 40%",
    maxHeight: "170px",
    maxWidth: index === 24 ? "350px" : "250px",
    width: "100%",
    objectFit: "contain",
    marginLeft: "auto",
    animation: "rotateRight",
    animationDuration: "10s",
    animationDelay: "0",
    animationFillMode: "forwards",

    [theme.breakpoints.down("md")]: {
      margin: "auto",
      marginBottom: "16px",
      animation: "none",
      maxHeight: "90px",
    },
  },

  ".right-side-image": {
    flex: "0 0 40%",
    maxHeight: "170px",
    maxWidth: "300px",
    objectFit: "contain",
    marginLeft: "auto",

    [theme.breakpoints.down("md")]: {
      maxHeight: "130px",
      margin: "30px auto 0",
      maxWidth: "100%",
    },
  },

  "@keyframes rotateRight": {
    "0%": {
      transform: "perspective( 200px ) rotateY( 20deg )",
    },
    "100%": {
      transform: "perspective( 400px ) rotateY( 20deg )",
    },
  },
}));

export const ProductNameLeft = styled(Box)(() => ({
  fontSize: "60px",
  color: "#333333",
  animation: "appear",
  animationDuration: "2s",
  animationDelay: "1s",
  animationFillMode: "forwards",
  zIndex: "-1",
  opacity: "0",
  width: "100%",
  textAlign: "right",

  "@keyframes appear": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },
}));

export const ProductNameRight = styled(Box)(() => ({
  fontSize: "60px",
  color: "#333333",
  animation: "appear",
  animationDuration: "2s",
  animationDelay: "1s",
  animationFillMode: "forwards",
  zIndex: "-1",
  opacity: "0",
  width: "100%",
  textAlign: "left",

  "@keyframes appear": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },
}));

export default ProductItem;
