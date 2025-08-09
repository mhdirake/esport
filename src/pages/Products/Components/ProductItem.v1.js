import { Box, Typography, styled } from "@mui/material";

import behindImage from "assets/products/q10/behind-image.png";
import frontImage from "assets/products/q10/front-image.png";
import productImage from "assets/products/q10/q10.png";
import productName from "assets/products/q10/name.png";

function ProductItem({ isActive }) {
  return (
    <ProductWrapper isActive={isActive}>
      <ImageWrapper>
        <img className="product-name" src={productName} alt="product-name" />
        <img className="product-behind-image" src={behindImage} alt="behind" />
        <img className="product-image" src={productImage} alt="q10" />
        <img className="product-front-image" src={frontImage} alt="front" />

        <ProductMetaTop>
          <Typography
            lineHeight={"2.1rem"}
            mb={0}
            color="#834D63"
            fontSize="40px"
            fontWeight="500"
          >
            BE YOUNG
          </Typography>

          <Typography
            lineHeight={"2.1rem"}
            color="#834D63"
            fontSize="30px"
            fontWeight="500"
          >
            ANTI WRINKLE
          </Typography>

          <Badge>Stop the signs of aging</Badge>

          <Typography fontSize="48px" fontWeight="500" color="#834D63">
            STOP ACNE
          </Typography>

          <Typography fontSize="20px" fontWeight="400" color="#834D63">
            Even Water Proof Make-Up Remover
          </Typography>
        </ProductMetaTop>

        <ProductMetaBottom>
          <Typography fontSize="100px" color="#000000" fontWeight={500}>
            99%
          </Typography>

          <Typography
            fontSize="36px"
            color="#00000050"
            fontWeight={500}
            lineHeight={"2.1rem"}
          >
            Deep Clean & <br /> Moisturizer
          </Typography>

          <Typography fontSize="26px" color="#1E1E1E" fontWeight={500}>
            Make-Up Remover
          </Typography>

          <Typography>0% PARABEN & ALCOHOL</Typography>
        </ProductMetaBottom>
      </ImageWrapper>
    </ProductWrapper>
  );
}

const ProductWrapper = styled(Box)(({ isActive }) => ({
  background: "#FAEDE8",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ".product-image": {
    width: isActive ? "100%" : "0",
    transition: "width 1s ease-in-out",
  },

  ".product-name": {
    top: isActive ? "calc(50% - 240px)" : "300px",
    opacity: isActive ? "1" : "0",
    transition: "all 1s",
    transitionDelay: "1s",
  },

  ".product-behind-image": {
    left: isActive ? "calc(50% - 250px)" : "600px",
    transition: "all 1s",
  },
}));

const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  maxWidth: "600px",
  maxHeight: "600px",
  width: "100%",
  height: "100%",

  ".product-image": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
  },

  ".product-name": {
    position: "absolute",
    top: "calc(50% - 240px)",
    left: "calc(50% - 155px)",
    transform: "translate(-50%, -50%)",
    maxWidth: "300px",
  },

  ".product-behind-image": {
    position: "absolute",
    top: "calc(50% - 120px)",
    left: "calc(50% - 250px)",
    transform: "translate(-50%, -50%)",
    maxWidth: "150px",
  },

  ".product-front-image": {
    position: "absolute",
    bottom: "calc(50% - 150px)",
    right: "-30px",
    maxWidth: "200px",
    transform: "translateY(50%)",
  },
}));

const ProductMetaTop = styled(Box)(() => ({
  position: "absolute",
  top: "-30px",
  right: "-120px",
  transform: "translate(50%)",
}));

const ProductMetaBottom = styled(Box)(() => ({
  position: "absolute",
  bottom: "-30px",
  left: "-120px",
  transform: "translate(-50%)",
}));

const Badge = styled(Box)(() => ({
  backgroundColor: "#C53089",
  color: "#ffffff",
  borderRadius: "25px",
  fontSize: "16px",
  fontWeight: "500",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 18px",
}));

export default ProductItem;
