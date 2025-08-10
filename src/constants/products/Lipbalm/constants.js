import leftSideImage from 'assets/products/Lipbalm/leftslider.webp';
import rightSideImage from 'assets/products/Lipbalm/rightslide.webp';
import product1 from 'assets/products/Lipbalm/LimeStrawberry.png';
import product2 from 'assets/products/Lipbalm/PineappleCoconut.png';
import product3 from 'assets/products/Lipbalm/Vanilla.png';
import product4 from 'assets/products/Lipbalm/WildBerry.png';
import march from 'assets/pages/shop/march.png';
import mouse from 'assets/pages/shop/mouse.png';
import keyboard from 'assets/pages/shop/keyboard.png';
import pad from 'assets/pages/shop/pad.png';
import headphone from 'assets/pages/shop/headphone.png';
import march2 from 'assets/pages/shop/march2.png';
import strawberryobject from 'assets/products/objects/Lipbalm/strawberry-two.png';
import strawberryobjecttwo from 'assets/products/objects/Lipbalm/strawberry-one.png';
import limeobject from 'assets/products/objects/Lipbalm/fresh-lime.png';
import pineappleobject from 'assets/products/objects/Lipbalm/pineapple.png';
import pineappleobjecttwo from 'assets/products/objects/Lipbalm/pineapple-piece.png';
import coconutobject from 'assets/products/objects/Lipbalm/coconuts.png';
import halfcoconutobject from 'assets/products/objects/Lipbalm/half-of-coconut.png';
import vanllaobject from 'assets/products/objects/Lipbalm/flowers-with-vanilla.png';
import vanillacake from 'assets/products/objects/Lipbalm/cupcake.png';
import raspberryobject from 'assets/products/objects/Lipbalm/raspberry.png';
import ripeberries from 'assets/products/AntioxidantMakeupRemover/antioxidantMakeupRemover1.png';

export const Lipbalm = {
  title: '',
  description: '',
  // bigImageTitle: leftSideImage,
  // bigImageDescription: rightSideImage,
  bigImage: march,
  link: '/products/lip-balm',
  variants: [
    {
      image: march,
      text: 'Lip Balm',
      description: 'Lip Balm - LimeStrawberry',
      randomObjects: [keyboard, pad, headphone, march2, mouse],
      color: '#0c0e00ff',
    },
    // {
    //   image: product2,
    //   text: "Lip Balm",
    //   description: "Lip Balm - PineappleCoconut",
    //   randomObjects: [coconutobject, halfcoconutobject, pineappleobjecttwo,],
    //   color: "rgb(224, 217, 150)",
    // },
    // {
    //   image: product3,
    //   text: "Lip Balm",
    //   description: "Lip Balm - Vanilla",
    //   randomObjects: [vanllaobject, vanillacake, vanllaobject],
    //   color: "rgb(213, 234, 240)",
    // },
    // {
    //   image: product4,
    //   text: "Lip Balm",
    //   description: "Lip Balm - WildBerry",
    //   randomObjects: [raspberryobject, ripeberries, raspberryobject],
    //   color: "rgb(169, 174, 232)",
    // },
  ],
};
