import {
  q10FlowerAvocado,
  q10FlowerBlueberry,
  q10FlowerFig,
} from "assets/products/objects/q10Fruit";

import leftSideImage from "assets/products/q10/left-image.png";
import model from "assets/products/q10/model/person.png";
import product1 from "assets/products/q10/q10.png";
import product2 from "assets/products/q10/q10a.png";
import product3 from "assets/products/q10/q10b.png";
import rightSideImage from "assets/products/q10/right-image.png";

export const q10fruits = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/q10-fruit",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: q10FlowerFig,
      color: "rgba(137,37,128,0.2)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: q10FlowerAvocado,
      color: "rgb(211, 222, 187, 0.6)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: q10FlowerBlueberry,
      color: "rgb(172, 190, 224, 0.6)",
    },
  ],
};
