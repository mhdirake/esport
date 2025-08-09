import { babyWetWipeSensitiveItem } from "assets/products/objects/babyWetWipeSensitive";
import leftSideImage from "assets/products/BabyWetWipeSensitive/left-image.png";
import model from "assets/products/BabyWetWipeSensitive/model/person.png";
import product1 from "assets/products/BabyWetWipeSensitive/babyWetWipeSensitive1.png";
import product2 from "assets/products/BabyWetWipeSensitive/babyWetWipeSensitive2.png";
import product3 from "assets/products/BabyWetWipeSensitive/babyWetWipeSensitive3.png";
import rightSideImage from "assets/products/BabyWetWipeSensitive/right-image.png";

export const babyWetWipeSensitive = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/baby-wet-wipe-sensitive",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: babyWetWipeSensitiveItem,
      color: "rgb(158, 215, 246,.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: babyWetWipeSensitiveItem,
      color: "rgb(86, 192, 214,.3)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: babyWetWipeSensitiveItem,
      color: "rgb(245, 234, 103,.3)",
    },
  ],
};
