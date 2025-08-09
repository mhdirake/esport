import { antioxidantMakeupRemover1 } from "assets/products/objects/antioxidantMakeupRemover";
import leftSideImage from "assets/products/AntioxidantMakeupRemover/left-image.png";
import model from "assets/products/AntioxidantMakeupRemover/model/person.png";
import product1 from "assets/products/AntioxidantMakeupRemover/antioxidantMakeupRemover1.png";
import product2 from "assets/products/AntioxidantMakeupRemover/antioxidantMakeupRemover2.png";
import product3 from "assets/products/AntioxidantMakeupRemover/antioxidantMakeupRemover3.png";
import product4 from "assets/products/AntioxidantMakeupRemover/antioxidantMakeupRemover4.png";
import rightSideImage from "assets/products/AntioxidantMakeupRemover/right-image.png";

export const antioxidantMakeupRemover = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/antioxidant-make-up-remover",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: antioxidantMakeupRemover1,
      color: "rgb(215, 134, 183,.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: antioxidantMakeupRemover1,
      color: "rgb(147, 24, 21,.3)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: antioxidantMakeupRemover1,
      color: "rgb(74, 177, 185,.3)",
    },
    {
      image: product4,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: antioxidantMakeupRemover1,
      color: "rgb(91, 46, 135,.3)",
    },
  ],
};
