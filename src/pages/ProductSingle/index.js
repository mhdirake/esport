import { Box, Button, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ALL_PAGES } from "constants/products";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Mousewheel } from "swiper";
import ProductRandomObjects from "./Components/ProductRandomObjects";
import ProductSingleVariant from "./Components/ProductSingleVariant";
import SVGBackgroundsNoBg from "components/SVGBackgroundsNoBg";
import eggShape from "assets/images/egg-shape.svg";
import useIsMobileView from "hooks/useIsMobileView";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ProductSingle() {
  const location = useLocation();
  const { t } = useTranslation();
  const isMobileView = useIsMobileView();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);
  const [bgColor, setBgColor] = useState(ALL_PAGES[slug]?.variants[0].color);

  const [randomObjects, setRandomObjects] = useState(
    ALL_PAGES[slug]?.variants[0].randomObjects
  );
  const [prevObjects, setPrevObjects] = useState(null);

  const [showBackgroundTransition, setShowBackgroundTransition] =
    useState(false);

  const thumbnailSwiperParams = {
    spaceBetween: isMobileView ? 60 : 20,
    slidesPerView: 5,
    centeredSlides: true,
    slideToClickedSlide: true,
  };

  return (
    <ProductSinglePageWrapper
      bgColor={bgColor}
      showBackgroundTransition={showBackgroundTransition}
    >
      <ButtonStyle
        onClick={() => {
          const path = location.pathname?.split("/");
          navigate(`/${path?.[1]}`);
        }}
      >
        <ChevronLeftIcon /> {t("back")}
      </ButtonStyle>

      {isMobileView && (
        <>
          <ProductThumbnails>
            {ALL_PAGES[slug]?.variants.length > 1 && (
              <Swiper
                onSwiper={setThumbSlider}
                onSlideChange={(e) => {
                  mainSlider?.slideTo(e.activeIndex);
                }}
                {...thumbnailSwiperParams}
              >
                {ALL_PAGES[slug]?.variants?.map((slider) => (
                  <SwiperSlide>
                    <img
                      className="gallery-thumb-item"
                      src={slider.image}
                      alt="product"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </ProductThumbnails>
        </>
      )}

      <ContentWrapper>
        <MainSliderWrapper>
          <Swiper
            modules={[Mousewheel]}
            slidesPerView={1}
            mousewheel={true}
            onTouchStart={() => {
              setShowBackgroundTransition(true);
            }}
            onTouchEnd={(e) => {
              setBgColor(ALL_PAGES[slug]?.variants[e.activeIndex]?.color);

              setPrevObjects(randomObjects);
              setRandomObjects(
                ALL_PAGES[slug]?.variants[e.activeIndex]?.randomObjects
              );

              setShowBackgroundTransition(false);
            }}
            onScroll={() => {
              setShowBackgroundTransition(true);
            }}
            onTransitionEnd={() => {
              setShowBackgroundTransition(false);
            }}
            onSlideChange={(e) => {
              setBgColor(ALL_PAGES[slug]?.variants[e.activeIndex]?.color);
              setPrevObjects(randomObjects);
              setRandomObjects(
                ALL_PAGES[slug]?.variants[e.activeIndex].randomObjects
              );
              setShowBackgroundTransition(false);
              thumbSlider?.slideTo(e.activeIndex);
            }}
            onSwiper={setMainSlider}
            scrollbar={{ draggable: true }}
          >
            {ALL_PAGES[slug]?.variants?.map((slider, index) => (
              <SwiperSlide>
                {(slide) => (
                  <ProductSingleVariant
                    {...slider}
                    bgColor={bgColor}
                    title={`variant.${index}.title`}
                    description={`variant.${index}.description`}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </MainSliderWrapper>

        {!isMobileView && (
          <>
            {ALL_PAGES[slug]?.variants.length > 1 && (
              <ProductThumbnails>
                <Swiper
                  onSwiper={setThumbSlider}
                  onSlideChange={(e) => {
                    mainSlider?.slideTo(e.activeIndex);
                  }}
                  {...thumbnailSwiperParams}
                >
                  {ALL_PAGES[slug]?.variants?.map((slider) => (
                    <SwiperSlide>
                      <img
                        className="gallery-thumb-item"
                        src={slider.image}
                        alt="product"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ProductThumbnails>
            )}
          </>
        )}
      </ContentWrapper>

      <BehindImagesWrapper>
        <ProductImageCenter>
          {!isMobileView && (
            <ProductRandomObjects
              randomObjects={randomObjects}
              prevObjects={prevObjects}
            />
          )}

          <img class="big-image" src={ALL_PAGES[slug].bigImage} alt="" />
          <ProductBigImageDetails>
            <img
              class="big-image-extra-title"
              src={ALL_PAGES[slug].bigImageTitle}
              alt=""
            />
          </ProductBigImageDetails>

          <SVGBackgroundsNoBg bgColor={bgColor} />
        </ProductImageCenter>
      </BehindImagesWrapper>
    </ProductSinglePageWrapper>
  );
}

const ButtonStyle = styled(Button)(() => ({
  color: "#ffffff",
  textTransform: "none",
  position: "fixed",
  left: "20px",
  top: "20px",
  fontSize: "16px",
  fontWeight: 400,
  zIndex: 9999,
}));

const MainSliderWrapper = styled(Box)(({ theme }) => ({
  ".swiper-slide": {
    display: "flex",
    alignItems: "center",
    minHeight: "calc(100vh - 100px)",

    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      minHeight: "100%",
    },

    ".MuiBox-root": {
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  },
}));

export const ProductSinglePageWrapper = styled(Box)(
  ({ bgColor, showBackgroundTransition }) => ({
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",

    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      left: 0,
      top: 0,
      height: "100%",
      background: `radial-gradient(circle, rgba(135,33,135,0) 20%, ${bgColor} 69%)`,
      transition: "all 0.6s",
      zIndex: "-1",
    },

    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "#ffffff",
      transition: "all 0.6s",
      opacity: showBackgroundTransition ? 1 : 0,
      zIndex: "-1",
    },
  })
);

export const BehindImagesWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  minHeight: "100vh",
  minWidth: "700px",
  right: 0,
  top: 0,

  [theme.breakpoints.down("md")]: {
    zIndex: "-1",
  },
}));

export const ProductImageCenter = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",

  [theme.breakpoints.down("md")]: {
    minHeight: "0",
  },

  ".big-image": {
    position: "absolute",
    height: "max-content",
    maxHeight: "90%",
    width: "max-content",
    right: "0",
    bottom: "0",
    objectFit: "contain",
    zIndex: 0,
    animation: "move-left",
    animationDuration: "10s",
    animationFillMode: "forwards",
    animationDirection: "alternate",
    minHeight: "700px",
    [theme.breakpoints.down("lg")]: {
      minHeight: "auto",
      width: "100%",
    },

    [theme.breakpoints.down("md")]: {
      opacity: 0.4,
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      right: "initial",
      zIndex: -3,
      animation: "move-left-responsive",
      animationDuration: "10s",
      animationDelay: "0",
      animationFillMode: "forwards",
      animationDirection: "alternate",
    },
  },

  svg: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      position: "fixed",
      top: "0",
      right: "0",
      bottom: "initial",
      zIndex: -2,
    },

    "&.first-svg": {
      position: "absolute",
      zIndex: -1,
      animation: "rotate-bg-1",
      animationDuration: "30s",
      animationTimingFunction: "linear",
      animationFillMode: "forwards",
      animationIterationCount: "infinite",
      animationDirection: "alternate",

      [theme.breakpoints.down("md")]: {
        animation: "rotate-bg-1-responsive",
        animationDuration: "30s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
      },
    },

    "&.second-svg": {
      position: "absolute",
      zIndex: -1,
      animation: "rotate-bg-2",
      animationDuration: "40s",
      animationTimingFunction: "linear",
      animationFillMode: "forwards",
      animationIterationCount: "infinite",
      animationDirection: "alternate",

      [theme.breakpoints.down("md")]: {
        animation: "rotate-bg-2-responsive",
        animationDuration: "40s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        display: "none",
      },
    },
  },

  "@keyframes rotate-bg-1": {
    "0%": {
      transform: "rotateZ(0deg) scale(2)",
    },
    "100%": {
      transform: "rotateZ(120deg) scale(2)",
    },
  },

  "@keyframes rotate-bg-1-responsive": {
    "0%": {
      transform: "rotateZ(0deg) scale(4)",
    },
    "100%": {
      transform: "rotateZ(120deg) scale(4)",
    },
  },

  "@keyframes move-left": {
    "0%": {
      right: "-100px",
    },
    "100%": {
      right: 0,
    },
  },

  "@keyframes move-left-responsive": {
    "0%": {
      left: "calc(50% - 100px)",
    },
    "100%": {
      left: "50%",
    },
  },

  "@keyframes rotate-bg-2": {
    "0%": {
      transform: "rotateZ(-45deg)",
    },
    "100%": {
      transform: "rotateZ(-120deg)",
    },
  },

  "@keyframes rotate-bg-2-responsive": {
    "0%": {
      transform: "rotateZ(-45deg) scale(3)",
    },
    "100%": {
      transform: "rotateZ(-120deg) scale(3)",
    },
  },

  "@keyframes rotate-bg-3": {
    "0%": {
      transform: "rotateZ(45deg)",
    },
    "100%": {
      transform: "rotateZ(120deg)",
    },
  },
}));

const ProductThumbnails = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "0",
  width: "50%",

  [theme.breakpoints.down("md")]: {
    paddingTop: "80px",
    width: "100%",
    position: "relative",
    bottom: "initial",
  },

  ".swiper-slide": {
    position: "relative",
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      height: "110px",
    },

    "&:before": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${eggShape})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "200px",
      height: "200px",
      backdropFilter: "blur( 4.5px )",
      zIndex: -1,

      [theme.breakpoints.down("md")]: {
        width: "150px",
        height: "150px",
        backdropFilter: "initial",
      },
    },
  },

  img: {
    margin: "auto",
    height: "80px",
    width: "80px",
    objectFit: "contain",

    [theme.breakpoints.down("md")]: {
      height: "60px",
      width: "60px",
    },
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: "60px 20px 30px 80px",

  [theme.breakpoints.down("md")]: {
    padding: "16px 16px 16px",
  },
}));

const ProductBigImageDetails = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "60px",
  right: "0",
  padding: "20px",
  paddingRight: "90px",
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
  maxWidth: "90%",
  background: "rgba( 255, 255, 255, 0.5 )",
  backdropFilter: "blur( 4.5px )",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  borderRadius: "25px 0 0 25px",

  img: {
    maxWidth: "90%",
    width: "auto",
    height: "100px",
    objectFit: "contain",
    margin: "0 15px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default ProductSingle;
