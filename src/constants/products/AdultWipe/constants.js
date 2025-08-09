import leftSideImage from "assets/products/AdultWipe/left-image.png";
import model from "assets/products/AdultWipe/model/person.png";
import obj2 from "assets/products/AdultWipe/objects/2.png";
import obj4 from "assets/products/AdultWipe/objects/4.png";
import product1 from "assets/products/AdultWipe/AdultWipe.png";
import rightSideImage from "assets/products/AdultWipe/right-image.png";

export const adultWipe = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/adult-wipe",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj4, obj2, obj4, obj2, obj4],
      color: "rgba(45,64,143, 0.3)",
    },
  ],
};
