import { Box, Button, styled, Typography } from '@mui/material';
import { ContentWrapper, ProductWrapper } from '../Styles';

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
  index,
  title,
  subtitle,
  description,
  shadow1,
  shadow2,
  shadow3,
}) {
  return (
    <ProductWrapper isActive={isActive} color={color}>
      <img class="random-object-1" src={randomObjects?.[0]} alt="product" />
      <img class="random-object-2" src={randomObjects?.[1]} alt="product" />
      <img class="random-object-3" src={randomObjects?.[2]} alt="product" />
      {randomObjects?.[3] && (
        <img class="random-object-4" src={randomObjects?.[3]} alt="product" />
      )}
      {randomObjects?.[4] && (
        <img class="random-object-5" src={randomObjects?.[4]} alt="product" />
      )}

      <ContentWrapper isActive={isActive} isPrev={isPrev} isNext={isNext}>
        <ImageWrapper isActive={isActive} index={index}>
          <img
            class="left-side-image"
            style={{ display: isActive ? 'block' : 'none' }}
            src={productLeftImage}
            alt=""
          />

          <img
            class={`product-image ${index === 4 ? 'home' : ''}`}
            src={productImage}
            alt="product"
          />

          <img
            class="right-side-image"
            style={{ display: isActive ? 'block' : 'none' }}
            src={productRightImage}
            alt=""
          />
        </ImageWrapper>

        <TextWrapper shadow1={shadow1} shadow3={shadow3} shadow2={shadow2}>
          {isActive && (
            <>
              <Title fontWeight={500} color={'primary.contrastText'}>
                {title}
              </Title>
              <Subtitle
                variant="subtitle1"
                fontWeight={300}
                color={'primary.contrastText'}
                mt={2}
              >
                {subtitle}
              </Subtitle>
              <Description
                variant="subtitle2"
                fontWeight={300}
                color={'primary.contrastText'}
                mt={2}
                dir={'rtl'}
              >
                {description}
              </Description>
            </>
          )}
          {/* {index !== 4 && (
            <Button variant={'text'} color={'primary'} sx={{ mt: 3 }}>
              مشاهده صفحه
            </Button>
          )} */}
        </TextWrapper>
      </ContentWrapper>
    </ProductWrapper>
  );
}

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  animation: 'fadeIn',
  animationDuration: '0.5s',
  animationDelay: '0.5s',
  animationFillMode: 'forwards',
  opacity: 0,
  textShadow: '0px -1px 4px black',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },

  '@keyframes fadeIn': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  animation: 'fadeIn',
  animationDuration: '0.5s',
  animationDelay: '0.8s',
  animationFillMode: 'forwards',
  opacity: 0,
  textShadow: '0px -1px 4px black',

  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  maxWidth: `600px !important`,
  animation: 'fadeIn',
  animationDuration: '0.5s',
  animationDelay: '1.1s',
  animationFillMode: 'forwards',
  opacity: 0,
  textShadow: '0px -1px 4px black',

  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
}));
const ImageWrapper = styled(Box)(({ isActive, theme, index }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1000px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },

  '.product-image.home': {
    [theme.breakpoints.down('md')]: {
      width: isActive ? '350px' : '80px',
      height: 'auto',
      transform: 'translateY(26%)',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(-5%)',
    },
  },
  '.product-image': {
    maxWidth: '600px',
    maxHeight: '600px',
    objectFit: 'contain',
    height: 'auto',
    transition: 'opacity 1s',
    position: 'absolute',
    zIndex: '-1',
    cursor: 'pointer',
    opacity: isActive ? 1 : 0,
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      width: isActive ? '350px' : '80px',
      height: 'auto',
      transform: 'translateY(26%)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(20%)',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(0%)',
    },
    [theme.breakpoints.up('xl')]: {
      transform: 'translateY(5%)',
    },
  },

  '.left-side-image': {
    flex: '0 0 40%',
    maxHeight: '170px',
    maxWidth: index === 24 ? '350px' : '250px',
    width: '100%',
    objectFit: 'contain',
    marginLeft: 'auto',
    animation: 'rotateRight',
    animationDuration: '10s',
    animationDelay: '0',
    animationFillMode: 'forwards',

    [theme.breakpoints.down('md')]: {
      margin: 'auto',
      marginBottom: '16px',
      animation: 'none',
      maxHeight: '90px',
    },
  },

  '.right-side-image': {
    flex: '0 0 40%',
    maxHeight: '170px',
    maxWidth: '300px',
    objectFit: 'contain',
    marginLeft: 'auto',

    [theme.breakpoints.down('md')]: {
      maxHeight: '130px',
      margin: '30px auto 0',
      maxWidth: '100%',
    },
  },

  '@keyframes rotateRight': {
    '0%': {
      transform: 'perspective( 200px ) rotateY( 20deg )',
    },
    '100%': {
      transform: 'perspective( 400px ) rotateY( 20deg )',
    },
  },
}));

export const ProductNameLeft = styled(Box)(() => ({
  fontSize: '60px',
  color: '#333333',
  animation: 'appear',
  animationDuration: '2s',
  animationDelay: '1s',
  animationFillMode: 'forwards',
  zIndex: '-1',
  opacity: '0',
  width: '100%',
  textAlign: 'right',

  '@keyframes appear': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
}));

export const ProductNameRight = styled(Box)(() => ({
  fontSize: '60px',
  color: '#333333',
  animation: 'appear',
  animationDuration: '2s',
  animationDelay: '1s',
  animationFillMode: 'forwards',
  zIndex: '-1',
  opacity: '0',
  width: '100%',
  textAlign: 'left',

  '@keyframes appear': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
}));

export const TextWrapper = styled(Box)(
  ({ theme, shadow1, shadow2, shadow3 }) => ({
    width: '100%',
    padding: theme.spacing(12, 4, 4),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    height: '50vh',
    position: 'relative',

    '.MuiTypography-root': {
      zIndex: 1,
    },

    ':before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      opacity: 1,
      zIndex: 0,
      boxShadow: '0px -243px 175px -32px black inset',
      transform: 'none',
      [theme.breakpoints.down('md')]: {
        boxShadow: '0px -213px 123px -70px black inset',
      },
    },

    ':after': {
      content: "''",
      position: 'absolute',
      width: '100dvh',
      height: '100dvh',
      background:
        'url(https://img2.cgtrader.com/items/702173/682fad2a11/92k-moon-color-map-3d-model.jpg)',
      top: '30%',
      borderRadius: '50%',
      zIndex: '-1',
      animation: 'scrollBg 100s linear infinite',
      boxShadow: `0 0px 130px 40px ${shadow1} inset,0 0px 23px 4px ${shadow2} inset,0 -10px 130px ${shadow3}`,
      transform: 'rotateX(20.4deg)',
    },

    '@keyframes scrollBg': {
      '0%': {
        backgroundPositionY: '0px',
      },
      '100%': {
        backgroundPositionY: '-1000px',
      },
    },
  })
);

export default ProductItem;
