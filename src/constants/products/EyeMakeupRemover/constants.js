import leftSideImage from "assets/products/EyeMakeupRemover/left-image.png";
import model from "assets/products/EyeMakeupRemover/model/person.png";
import obj1 from "assets/products/EyeMakeupRemover/objects/1.png";
import obj3 from "assets/products/EyeMakeupRemover/objects/3.png";
import product1 from "assets/products/EyeMakeupRemover/eyeMakeupRemover1.png";
import rightSideImage from "assets/products/EyeMakeupRemover/right-image.png";

export const eyeMakeupRemover = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/eye-make-up-remover",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj1, obj3, obj3, obj1],
      color: "rgb(239, 130, 161,.3)",
    },
  ],
};
