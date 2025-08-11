import about from 'assets/pages/about/about.png';
import question from 'assets/pages/about/question.png';
import exclamation from 'assets/pages/about/exclamation.png';
import location from 'assets/pages/about/location.png';

export const About = {
    title: "ما گرد هم آمدیم تا بازی را جلو ببریم، نه تکرار کنیم",
  subtitle: "چطور شد این‌جاییم؛ کوتاه و شفاف",
  description: "در این بخش می‌توانید با ماموریت، ارزش‌ها و مسیر شکل‌گیری سازمان آشنا شوید. همچنین معرفی کوتاهی از بنیان‌گذاران و دستاوردهای مهم وجود دارد تا تصویر روشنی از تاریخچه و هدف ما به دست بیاورید",
  bigImage: about,
  link: "/products/about",
  variants: [
    {
      image: about,
      randomObjects: [question, exclamation, location],
      color: '#0b1600ff',
      shadow1: "rgba(206, 234, 199, 0.6)",
      shadow2: "rgba(206, 234, 199, 0.6)",
      shadow3: "rgba(151, 188, 127, 0.6)",
    },
  ],
};
