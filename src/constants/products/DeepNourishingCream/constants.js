import leftSideImage from "assets/products/DeepNourishingCream/left-image.png";
import model from "assets/products/DeepNourishingCream/model/person.png";
import obj1 from "assets/products/DeepNourishingCream/objects/1.png";
import obj13 from "assets/products/DeepNourishingCream/objects/13.png";
import obj14 from "assets/products/DeepNourishingCream/objects/14.png";
import obj15 from "assets/products/DeepNourishingCream/objects/15.png";
import obj2 from "assets/products/DeepNourishingCream/objects/2.png";
import obj3 from "assets/products/DeepNourishingCream/objects/3.png";
import obj4 from "assets/products/DeepNourishingCream/objects/4.png";
import obj5 from "assets/products/DeepNourishingCream/objects/5.png";
import obj6 from "assets/products/DeepNourishingCream/objects/6.png";
import obj7 from "assets/products/DeepNourishingCream/objects/7.png";
import obj8 from "assets/products/DeepNourishingCream/objects/8.png";
import obj9 from "assets/products/DeepNourishingCream/objects/9.png";
import product1 from "assets/products/DeepNourishingCream/deepNourishingCream1.png";
import product2 from "assets/products/DeepNourishingCream/deepNourishingCream2.png";
import product3 from "assets/products/DeepNourishingCream/deepNourishingCream3.png";
import rightSideImage from "assets/products/DeepNourishingCream/right-image.png";

export const deepNourishingCream = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/deep-nourishing-cream",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj13, obj14, obj15, obj14, obj14],
      color: "rgb(155, 157, 205)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj2, obj3, obj4, obj5],
      color: "rgb(180, 200, 170)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj6, obj7, obj9, obj8, obj6],
      color: "rgb(250, 205, 220)",
    },
  ],
};
