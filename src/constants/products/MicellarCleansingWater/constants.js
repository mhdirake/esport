import {
  micellarCleansingWater1,
  micellarCleansingWater2,
} from "assets/products/objects/micellarCleansingWater";

import leftSideImage from "assets/products/MicellarCleansingWater/left-image.png";
import model from "assets/products/MicellarCleansingWater/model/person.png";
import product1 from "assets/products/MicellarCleansingWater/micellarCleansingWater1.png";
import product2 from "assets/products/MicellarCleansingWater/micellarCleansingWater2.png";
import rightSideImage from "assets/products/MicellarCleansingWater/right-image.png";

export const micellarCleansingWater = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/micellar-cleansing-water",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: micellarCleansingWater2,
      color: "rgb(154, 215, 217)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: micellarCleansingWater1,
      color: "rgb(225, 204, 227)",
    },
  ],
};
