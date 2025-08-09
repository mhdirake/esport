import leftSideImage from "assets/products/WetWipesKissesOnBaby/left-image.png";
import model from "assets/products/WetWipesKissesOnBaby/model/person.png";
import product1 from "assets/products/WetWipesKissesOnBaby/wetWipesKissesOnBaby1.png";
import product2 from "assets/products/WetWipesKissesOnBaby/wetWipesKissesOnBaby2.png";
import rightSideImage from "assets/products/WetWipesKissesOnBaby/right-image.png";
import { wetWipesKissesOnBaby1 } from "assets/products/objects/wetWipesKissesOnBaby";

export const wetWipesKissesOnBaby = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/wet-wipes-kisses-on-baby",
  variants: [
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: wetWipesKissesOnBaby1,
      color: "rgb(250, 249, 236)",
    },
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: wetWipesKissesOnBaby1,
      color: "rgb(0, 105, 178,.3)",
    }
  ],
};
