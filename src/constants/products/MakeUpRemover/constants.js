import leftSideImage from "assets/products/MakeUpRemover/left-image.png";
import { makeUpRemover1 } from "assets/products/objects/makeUpRemover";
import model from "assets/products/MakeUpRemover/model/person.png";
import product1 from "assets/products/MakeUpRemover/makeUpRemover1.png";
import product2 from "assets/products/MakeUpRemover/makeUpRemover2.png";
import rightSideImage from "assets/products/MakeUpRemover/right-image.png";

export const makeUpRemover = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/make-up-remover",
  variants: [
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: makeUpRemover1,
      color: "rgb(225, 204, 227)",
    },
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: makeUpRemover1,
      color: "rgb(212, 71, 149,.3)",
    }
  ],
};
