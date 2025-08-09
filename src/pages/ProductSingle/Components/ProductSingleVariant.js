import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";

import { formatNumbers } from "helpers/formatNumbers";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProductSingleVariant({ image, description, title, bgColor }) {
  const { t, i18n } = useTranslation([
    "adult-wipe",
    "antioxidant-make-up-remover",
    "baby-wet-wipe",
    "baby-wet-wipe-sensitive",
    "bath-clean",
    "deep-nourishing-cream",
    "eye-make-up-remover",
    "face-wash",
    "foot-care-vaseline",
    "hair-mask",
    "hand-body-lotion",
    "herbal-deodorant",
    "household-cleansing",
    "intimate-wipe",
    "make-up-remover",
    "micellar-cleansing-water",
    "perfume-cream",
    "q10-flower",
    "q10-fruit",
    "quick-polish-remover",
    "royal-beauty",
    "water-wipes-antibacterial",
    "wet-wipes-kisses-on-baby",
    "vaseline",
    "lip-balm"
  ]);

  const { slug } = useParams();

  const formattedTitle = useMemo(
    () => formatNumbers(t(title, { ns: slug }), i18n.language),
    [t, slug, title, i18n]
  );
  const formattedDescription = useMemo(
    () => formatNumbers(t(description, { ns: slug }), i18n.language),
    [t, slug, description, i18n]
  );

  return (
    <ProductSingleVariantWrapper lang={i18n.language}>
      <img src={image} alt="" />

      <ContentWrapper>
        <ProductTitle bgColor={bgColor} variant="h4" lang={i18n.language}>
          {formattedTitle}
        </ProductTitle>

        <ProductDescription
          lang={i18n.language}
          dangerouslySetInnerHTML={{
            __html: formattedDescription,
          }}
        />
      </ContentWrapper>
    </ProductSingleVariantWrapper>
  );
}

const ProductDescription = styled(Box)(({ lang }) => ({
  direction: lang === "fa" || lang === "ar" ? "rtl" : "ltr",
  textAlign: lang === "fa" || lang === "ar" ? "right" : "left",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  background: "rgba( 255, 255, 255, 0.3 )",
  backdropFilter: "blur( 4.5px )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  padding: "16px",
  borderRadius: "25px",
  [theme.breakpoints.down("xl")]: {
    maxHeight: "400px",
    overflowY: "auto",
  },

  [theme.breakpoints.down("lg")]: {
    maxHeight: "300px",
    overflowY: "auto",
  },

  [theme.breakpoints.down("md")]: {
    padding: "8px",
    maxHeight: "500px",
  },
}));

const ProductTitle = styled(Box)(({ lang, theme }) => ({
  fontSize: "30px",
  color: "#444",
  textTransform: "capitalize",
  paddingLeft: "4px",
  lineHeight: "2.5rem",
  zIndex: -1,
  direction: lang === "fa" || lang === "ar" ? "rtl" : "ltr",
  fontWeight: 400,
  marginBottom: "24px",
  "-webkit-text-stroke": "1px #333",

  "&:first-letter": {
    fontSize: lang === "fa" || lang === "ar" ? "30px" : "50px",
    [theme.breakpoints.down("lg")]: {
      fontSize: lang === "fa" || lang === "ar" ? "20px" : "40px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    lineHeight: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "5px",
    fontSize: "20px",
    lineHeight: "2rem",
  },
}));

const ProductSingleVariantWrapper = styled(Box)(({ theme, lang }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
  minHeight: "100%",
  paddingRight: "65%",
  fontFamily: "'Comfortaa', 'sans-serif','IRANSans' !important",

  [theme.breakpoints.down("md")]: {
    paddingRight: "0",
    flexDirection: "column",
    justifyContent: "flex-start",
    background: "rgba( 255, 255, 255, 0.03 )",
    backdropFilter: "blur( 4.5px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    padding: "16px",
    borderRadius: "25px",
    height: "100%",
    overflow: "auto",
    maxHeight: "calc(100vh - 230px)",
  },

  h4: {
    marginTop: 0,
    fontSize: "18px",
    fontWeight: 500,
    marginBottom: theme.spacing(1.5),
    paddingLeft: 0,
  },

  ul: {
    marginTop: 0,
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),

    li: {
      fontSize: "13px",
      lineHeight: "1.2rem",
      fontWeight: 700,
      marginBottom: theme.spacing(1.5),
      textTransform: "capitalize",
      color: "#333333",
    },
  },

  img: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    maxWidth: "400px",
    height: "auto",
    maxHeight: "400px",
    objectFit: "contain",
    margin: "auto",

    [theme.breakpoints.down("lg")]: {
      maxWidth: "300px",
    },

    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "initial",
      left: "initial",
      transform: "initial",
      maxWidth: "200px",
      maxHeight: "200px",
      marginBottom: "16px",
    },
  },
}));

export default ProductSingleVariant;
