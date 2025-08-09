import leftSideImage from "assets/products/BabyWetWipe/left-image.png";
import model from "assets/products/BabyWetWipe/model/person.png";
import obj1 from "assets/products/BabyWetWipe/objects/1.png";
import obj10 from "assets/products/BabyWetWipe/objects/10.png";
import obj11 from "assets/products/BabyWetWipe/objects/11.png";
import obj12 from "assets/products/BabyWetWipe/objects/12.png";
import obj13 from "assets/products/BabyWetWipe/objects/13.png";
import obj14 from "assets/products/BabyWetWipe/objects/14.png";
import obj2 from "assets/products/BabyWetWipe/objects/2.png";
import obj3 from "assets/products/BabyWetWipe/objects/3.png";
import obj4 from "assets/products/BabyWetWipe/objects/4.png";
import obj5 from "assets/products/BabyWetWipe/objects/5.png";
import obj6 from "assets/products/BabyWetWipe/objects/6.png";
import obj7 from "assets/products/BabyWetWipe/objects/7.png";
import obj8 from "assets/products/BabyWetWipe/objects/8.png";
import obj9 from "assets/products/BabyWetWipe/objects/9.png";
import product1 from "assets/products/BabyWetWipe/babyWetWipe1.png";
import product2 from "assets/products/BabyWetWipe/babyWetWipe2.png";
import product3 from "assets/products/BabyWetWipe/babyWetWipe3.png";
import product4 from "assets/products/BabyWetWipe/babyWetWipe4.png";
import rightSideImage from "assets/products/BabyWetWipe/right-image.png";

export const babyWetWipe = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/baby-wet-wipe",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj2, obj3, obj4, obj5],
      color: "rgba(175,198,95, 0.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj11, obj12, obj13, obj14],
      color: "rgb(239, 194, 197)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj5, obj6, obj7, obj8, obj9],
      color: "rgb(248, 219, 157)",
    },
    {
      image: product4,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj10, obj11, obj12, obj13, obj14],
      color: "rgb(199, 232, 235)",
    },
  ],
};
