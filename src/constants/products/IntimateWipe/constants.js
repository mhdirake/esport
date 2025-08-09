import leftSideImage from "assets/products/IntimateWipe/left-image.png";
import model from "assets/products/IntimateWipe/model/person.png";
import obj1 from "assets/products/IntimateWipe/objects/1.png";
import obj2 from "assets/products/IntimateWipe/objects/2.png";
import obj3 from "assets/products/IntimateWipe/objects/3.png";
import obj4 from "assets/products/IntimateWipe/objects/4.png";
import product1 from "assets/products/IntimateWipe/intimateWipe1.png";
import rightSideImage from "assets/products/IntimateWipe/right-image.png";

export const intimateWipe = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/intimate-wipe",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj2, obj3, obj4, obj2],
      color: "rgb(212, 71, 149,.3)",
    },
  ],
};
