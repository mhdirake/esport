import leftSideImage from "assets/products/HairMask/left-image.png";
import model from "assets/products/HairMask/model/person.png";
import obj1 from "assets/products/HairMask/objects/1.png";
import obj2 from "assets/products/HairMask/objects/2.png";
import obj3 from "assets/products/HairMask/objects/3.png";
import obj4 from "assets/products/HairMask/objects/4.png";
import obj5 from "assets/products/HairMask/objects/5.png";
import product1 from "assets/products/HairMask/hairMask1.png";
import product2 from "assets/products/HairMask/hairMask2.png";
import rightSideImage from "assets/products/HairMask/right-image.png";

export const hairMask = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/hair-mask",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj4, obj5, obj4, obj5, obj4],
      color: "rgba(163,31,54, 0.6)",
    },

    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj2, obj3, obj4, obj5],
      color: "rgba(109,169,220, 0.6)",
    },
  ],
};
