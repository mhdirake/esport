import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { styled } from '@mui/material';
import ProductItem from './Components/ProductItem';
import SVGBackgrounds from 'components/SVGBackgrounds';
import { SwiperWrapper } from './Styles';
import { mainSliders } from './constants';

function Products() {
  const swiperRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  const slidePages = useMemo(
    () => mainSliders.map((s) => s.page), // ensure each slider has "page" in constants
    []
  );

  const initialSlideIndex = currentPage
    ? slidePages.indexOf(currentPage)
    : parseInt(sessionStorage.getItem('slide') || '0', 10);

  const [bgColor, setBgColor] = useState(
    mainSliders[initialSlideIndex]?.variants[0].color
  );
  const [showBackgroundTransition, setShowBackgroundTransition] =
    useState(false);

  // 🔹 Update swiper when query param changes
  useEffect(() => {
    if (swiperRef.current && currentPage && slidePages.includes(currentPage)) {
      const newIndex = slidePages.indexOf(currentPage);
      swiperRef.current.slideTo(newIndex);
      setBgColor(mainSliders[newIndex].variants[0].color);
    }
  }, [currentPage, slidePages]);

  return (
    <SwiperWrapper
      bgColor={bgColor}
      showBackgroundTransition={showBackgroundTransition}
    >
      <SVGBackgrounds bgColor={bgColor} />

      <ProductOverviewSwiper
        modules={[Mousewheel, Keyboard, Pagination]}
        slidesPerView={1}
        mousewheel
        keyboard
        initialSlide={initialSlideIndex}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // save swiper instance
        }}
        onSlideChange={(e) => {
          sessionStorage.setItem('slide', e.activeIndex);
          setBgColor(mainSliders[e.activeIndex].variants[0].color);
          setShowBackgroundTransition(false);
          setSearchParams({ page: slidePages[e.activeIndex] });
        }}
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
      >
        {mainSliders?.map((slider, index) => (
          <ProductSwiperSlide key={slider.page} {...slider}>
            {(slide) => (
              <ProductItem
                link={slider.link}
                index={index}
                color={slider.variants[0].color}
                randomObjects={slider.variants[0].randomObjects}
                productImage={slider.variants[0].image}
                productLeftImage={slider.bigImageTitle}
                productRightImage={slider.bigImageDescription}
                title={slider.title}
                subtitle={slider.subtitle}
                description={slider.description}
                shadow1={slider.variants[0].shadow1}
                shadow2={slider.variants[0].shadow2}
                shadow3={slider.variants[0].shadow3}
                {...slide}
              />
            )}
          </ProductSwiperSlide>
        ))}
      </ProductOverviewSwiper>
    </SwiperWrapper>
  );
}

const ProductOverviewSwiper = styled(Swiper)(({ theme }) => ({
  '.swiper-pagination': {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '10',
    color: '#ffffff',
  },
}));

const ProductSwiperSlide = styled(SwiperSlide)(() => ({}));

export default Products;
