import {
  ContentWrapper,
  ImageWrapper,
  ProductName,
  ProductSubtitle,
  ProductWrapper,
} from "pages/Products/Styles";
import DetailItem from "./DetailItem";

const productDetails = [
  {
    title: "This is ali testing",
    description: "This is what you get for your hard work :))))))))))))",
    left: 0,
    bottom: "-90px",
  },
  {
    title: "This is ali testing",
    description: "This is what you get for your hard work :))))))))))))",
    left: "calc(100% + 90px)",
    bottom: "-120px",
  },
  {
    title: "This is ali testing",
    description: "This is what you get for your hard work :))))))))))))",
    left: "-90px",
    bottom: "calc(100% + 120px)",
  },
  {
    title: "This is ali testing",
    description: "This is what you get for your hard work :))))))))))))",
    left: "90px",
    bottom: "calc(100% + 120px)",
  },
];

function ProductItem({
  isActive,
  isPrev,
  isNext,
  randomObjects,
  productImage,
}) {
  return (
    <ProductWrapper isActive={isActive}>
      <img class="random-object-1" src={randomObjects?.[0]} alt="product" />
      <img class="random-object-2" src={randomObjects?.[1]} alt="product" />
      <img class="random-object-3" src={randomObjects?.[2]} alt="product" />
      <img class="random-object-4" src={randomObjects?.[3]} alt="product" />
      <img class="random-object-5" src={randomObjects?.[4]} alt="product" />

      <ContentWrapper isActive={isActive} isPrev={isPrev} isNext={isNext}>
        <ImageWrapper isActive={isActive}>
          <img class="product-image" src={productImage} alt="product" />

          {productDetails?.map((item, index) => (
            <DetailItem isActive={isActive} item={item} index={index} />
          ))}
        </ImageWrapper>

        <ProductSubtitle isActive={isActive}>
          Q10 Plus - Make-Up Remover
        </ProductSubtitle>
      </ContentWrapper>

      <ProductName isActive={isActive}>Q10 Plus</ProductName>
    </ProductWrapper>
  );
}

export default ProductItem;
