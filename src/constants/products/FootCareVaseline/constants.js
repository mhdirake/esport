import leftSideImage from "assets/products/FootCareVaseline/left-image.png";
import model from "assets/products/FootCareVaseline/model/person.png";
import obj3 from "assets/products/FootCareVaseline/objects/3.png";
import obj5 from "assets/products/FootCareVaseline/objects/5.png";
import obj6 from "assets/products/FootCareVaseline/objects/6.png";
import obj7 from "assets/products/FootCareVaseline/objects/7.png";
import product2 from "assets/products/FootCareVaseline/footCareVaseline2.png";
import rightSideImage from "assets/products/FootCareVaseline/right-image.png";

export const footCareVaseline = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/foot-care-vaseline",
  variants: [
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj6, obj7, obj3, obj5, obj5],
      color: "rgb(180, 200, 170)",
    },
  ],
};
