import {
  q10FlowerColorful,
  q10FlowerPink,
  q10FlowerPurple,
} from "assets/products/objects/q10Flower";

import leftSideImage from "assets/products/q10Flower/left-image.png";
import model from "assets/products/q10Flower/model/person.png";
import product1 from "assets/products/q10Flower/flower1.png";
import product2 from "assets/products/q10Flower/flower2.png";
import product3 from "assets/products/q10Flower/flower3.png";
import rightSideImage from "assets/products/q10Flower/right-image.png";

export const q10Flower = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/q10-flower",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: q10FlowerPink,
      color: "rgba(104,186,182, 0.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: q10FlowerPurple,
      color: "rgb(178, 198, 227)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: q10FlowerColorful,
      color: "rgb(169, 174, 232)",
    },
  ],
};
