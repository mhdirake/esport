import leftImage from "assets/products/FaceWash/left-image.png";
import model from "assets/products/FaceWash/model/person.png";
import obj1 from "assets/products/FaceWash/objects/1.png";
import obj3 from "assets/products/FaceWash/objects/3.png";
import obj4 from "assets/products/FaceWash/objects/4.png";
import obj5 from "assets/products/FaceWash/objects/5.png";
import product1 from "assets/products/FaceWash/faceWash1.png";
import product2 from "assets/products/FaceWash/faceWash2.png";
import rightImage from "assets/products/FaceWash/right-image.png";

export const faceWash = {
  title: "",
  description: "",
  bigImageTitle: leftImage,
  bigImageDescription: rightImage,
  bigImage: model,
  link: "/products/face-wash",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj1, obj3, obj4, obj3],
      color: "rgb(250, 205, 220)",
    },

    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj3, obj3, obj5, obj4, obj5],
      color: "rgb(180, 200, 170)",
    },
  ],
};
