import { householdCleansing1 } from "assets/products/objects/householdCleansing";
import leftSideImage from "assets/products/HouseholdCleansing/left-image.png";
import model from "assets/products/HouseholdCleansing/model/person.png";
import product1 from "assets/products/HouseholdCleansing/householdCleansing1.png";
import product2 from "assets/products/HouseholdCleansing/householdCleansing2.png";
import rightSideImage from "assets/products/HouseholdCleansing/right-image.png";

export const householdCleansing = {
  title: "",
  description: "",
  bigImageTitle: leftSideImage,
  bigImageDescription: rightSideImage,
  bigImage: model,
  link: "/products/household-cleansing",
  variants: [
    {
      image: product1,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: householdCleansing1,
      color: "rgb(211, 222, 187)",
    },
    {
      image: product2,
      text: "Q10 Plus",
      description: "Q10 Plus - Make-Up Remover",
      randomObjects: householdCleansing1,
      color: "rgb(22, 173, 223,.3)",
    },
  ],
};
