import leftSideImage from "assets/products/WaterWipesAntibacterial/left-image.png";
import model from "assets/products/WaterWipesAntibacterial/model/person.png";
import product1 from "assets/products/WaterWipesAntibacterial/waterWipesAntibacterial1.png";
import product2 from "assets/products/WaterWipesAntibacterial/waterWipesAntibacterial2.png";
import rightSideImage from "assets/products/WaterWipesAntibacterial/right-image.png";
import { waterWipesAntibacterial1 } from "assets/products/objects/waterWipesAntibacterial";

export const waterWipesAntibacterial = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/water-wipes-antibacterial",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: waterWipesAntibacterial1,
      color: "rgb(89, 197, 199,.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: waterWipesAntibacterial1,
      color: "rgb(173, 42, 38,.3)",
    },
  ],
};
