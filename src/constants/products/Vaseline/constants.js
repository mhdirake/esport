import leftSideImage from "assets/products/Vaseline/left-image.png"
import model from "assets/products/Vaseline/model/person.png"
import obj1 from "assets/products/Vaseline/objects/1.png"
import obj3 from "assets/products/Vaseline/objects/3.png"
import obj4 from "assets/products/Vaseline/objects/4.png"
import obj5 from "assets/products/Vaseline/objects/5.png"
import product1 from "assets/products/Vaseline/footCareVaseline1.png"
import rightSideImage from "assets/products/Vaseline/right-image.png"

export const vaseline =  {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/vaseline",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: [obj1, obj3, obj3, obj4, obj5],
      color: "rgb(255, 212, 209,1)",
    },

  ],
}