import "swiper/css";
import "swiper/css/mousewheel";

import { Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductItem from "./Components/ProductItem";
import SVGBackgrounds from "components/SVGBackgrounds";
import { SwiperWrapper } from "./Styles";
import { mainSliders } from "./constants";
import { styled } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Products() {
  const initialSlide = sessionStorage.getItem("slide") || "0";

  // eslint-disable-next-line no-unused-vars
  const t = useTranslation([
    "lip-balm",
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
  ]);

  const [bgColor, setBgColor] = useState(mainSliders[0].variants[0].color);
  const [showBackgroundTransition, setShowBackgroundTransition] =
    useState(false);

  return (
    <>
      <SwiperWrapper
        bgColor={bgColor}
        showBackgroundTransition={showBackgroundTransition}
      >
        <SVGBackgrounds bgColor={bgColor} />

        <ProductOverviewSwiper
          modules={[Mousewheel, Keyboard, Pagination]}
          slidesPerView={1}
          mousewheel={true}
          pagination={{ type: "fraction" }}
          keyboard={true}
          scrollbar={{ draggable: true }}
          initialSlide={initialSlide}
          onTouchStart={() => {
            setShowBackgroundTransition(true);
          }}
          onTouchEnd={(e) => {
            setBgColor(mainSliders[e.activeIndex].variants[0].color);
            setShowBackgroundTransition(false);
          }}
          onScroll={() => {
            setShowBackgroundTransition(true);
          }}
          onTransitionEnd={() => {
            setShowBackgroundTransition(false);
          }}
          onSlideChange={(e) => {
            sessionStorage.setItem("slide", e.activeIndex);
            setBgColor(mainSliders[e.activeIndex].variants[0].color);
            setShowBackgroundTransition(false);
          }}
        >
          {mainSliders?.map((slider, index) => (
            <ProductSwiperSlide {...slider}>
              {(slide) => (
                <ProductItem
                  link={slider.link}
                  index={index}
                  color={slider.variants[0].color}
                  randomObjects={slider.variants[0].randomObjects}
                  productImage={slider.variants[0].image}
                  productLeftImage={slider.bigImageTitle}
                  productRightImage={slider.bigImageDescription}
                  {...slide}
                />
              )}
            </ProductSwiperSlide>
          ))}
        </ProductOverviewSwiper>
      </SwiperWrapper>
    </>
  );
}

const ProductOverviewSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-pagination": {
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "10",
    color: "#ffffff",
  },
}));

const ProductSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  [theme.breakpoints.between(900, 1024)]: {
    padding: "0 96px",
  },

  [theme.breakpoints.between(1024, 1200)]: {
    padding: "0 72px",
  },
}));

export default Products;
