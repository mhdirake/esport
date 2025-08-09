import leftSideImage from "assets/products/BathClean/left-image.png";
import model from "assets/products/BathClean/model/person.png";
import obj1 from "assets/products/BathClean/objects/1.png";
import obj2 from "assets/products/BathClean/objects/2.png";
import obj3 from "assets/products/BathClean/objects/3.png";
import obj4 from "assets/products/BathClean/objects/4.png";
import obj5 from "assets/products/BathClean/objects/5.png";
import product1 from "assets/products/BathClean/bathClean1.png";
import rightSideImage from "assets/products/BathClean/right-image.png";

export const bathClean = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/bath-clean",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj2, obj3, obj4, obj5],
      color: "rgba(74,126,192, 0.3)",
    },
  ],
};
