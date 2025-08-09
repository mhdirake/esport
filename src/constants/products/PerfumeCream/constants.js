import leftSideImage from "assets/products/PerfumeCream/left-image.png";
import model from "assets/products/PerfumeCream/model/person.png";
import object1 from "assets/products/PerfumeCream/1.png";
import object3 from "assets/products/PerfumeCream/21.png";
import object6 from "assets/products/PerfumeCream/6.png";
import object16 from "assets/products/PerfumeCream/16.png";
import object17 from "assets/products/PerfumeCream/17.png";
import object15 from "assets/products/PerfumeCream/15.png";
import object10 from "assets/products/PerfumeCream/10.png";
import object14 from "assets/products/PerfumeCream/14.png";
import object12 from "assets/products/PerfumeCream/12.png";
import object18 from "assets/products/PerfumeCream/18.png";
import object22 from "assets/products/PerfumeCream/22.png";
import product1 from "assets/products/PerfumeCream/perfumeCream1.png";
import product2 from "assets/products/PerfumeCream/perfumeCream2.png";
import product3 from "assets/products/PerfumeCream/perfumeCream3.png";
import product4 from "assets/products/PerfumeCream/perfumeCream4.png";
import product5 from "assets/products/PerfumeCream/perfumeCream5.png";
import rightSideImage from "assets/products/PerfumeCream/right-image.png";

export const perfumeCream = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/perfume-cream",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [object3, object1, object3, object1, object1],
      color: "rgb(217, 187, 92,.3)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [object18, object1, object22],
      color: "rgb(225, 204, 227)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [object14, object12, object10],
      color: "rgb(119, 79, 95,.3)",
    },
    {
      image: product4,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [object15, object6, object1],
      color: "rgb(82, 45, 116,.4)",
    },
    {
      image: product5,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [object17, object16, object1],
      color: "rgb(110, 139, 177,.4)",
    },
  ],
};
