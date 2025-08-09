import leftSideImage from "assets/products/QuickPolishRemover/left-image.png";
import model from "assets/products/QuickPolishRemover/model/person.png";
import product1 from "assets/products/QuickPolishRemover/quickPolishRemover1.png";
import { quickPolishRemover1 } from "assets/products/objects/quickPolishRemover";
import rightSideImage from "assets/products/QuickPolishRemover/right-image.png";

export const quickPolishRemover = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/quick-polish-remover",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: quickPolishRemover1,
      color: "rgb(154, 215, 217)",
    },
  ],
};
