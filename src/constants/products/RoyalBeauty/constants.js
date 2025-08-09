import leftSideImage from "assets/products/RoyalBeauty/left-image.png";
import model from "assets/products/RoyalBeauty/model/person.png";
import product1 from "assets/products/RoyalBeauty/royalBeauty1.png";
import product2 from "assets/products/RoyalBeauty/royalBeauty2.png";
import rightSideImage from "assets/products/RoyalBeauty/right-image.png";
import { royalBeauty1 } from "assets/products/objects/royalBeauty";

export const royalBeauty = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/royal-beauty",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: royalBeauty1,
      color: "rgb(244, 223, 103,.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: royalBeauty1,
      color: "rgb(173, 42, 38,.3)",
    },
  ],
};
