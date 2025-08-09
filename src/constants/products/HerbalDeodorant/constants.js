import {
  herbalDeodorantObject1,
  herbalDeodorantObject2,
  herbalDeodorantObject3,
  herbalDeodorantObject4,
} from "assets/products/objects/herbalDeodorant";

import leftSideImage from "assets/products/HerbalDeodorant/left-image.png";
import model from "assets/products/HerbalDeodorant/model/person.png";
import product1 from "assets/products/HerbalDeodorant/herbalDeodorant1.png";
import product2 from "assets/products/HerbalDeodorant/herbalDeodorant2.png";
import product3 from "assets/products/HerbalDeodorant/herbalDeodorant3.png";
import product4 from "assets/products/HerbalDeodorant/herbalDeodorant4.png";
import rightSideImage from "assets/products/HerbalDeodorant/right-image.png";

export const herbalDeodorant = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/herbal-deodorant",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: herbalDeodorantObject1,
      color: "rgb(197, 139, 110,.3)",
    },

    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: herbalDeodorantObject2,
      color: "rgb(120, 142, 181,.3)",
    },
    {
      image: product3,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: herbalDeodorantObject3,
      color: "rgb(250, 205, 220)",
    },
    {
      image: product4,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: herbalDeodorantObject4,
      color: "rgb(119, 94, 168,.3)",
    },
  ],
};
