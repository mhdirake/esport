import march from 'assets/pages/shop/march.png';
import mouse from 'assets/pages/shop/mouse.png';
import keyboard from 'assets/pages/shop/keyboard.png';
import pad from 'assets/pages/shop/pad.png';
import headphone from 'assets/pages/shop/headphone.png';

export const Shop = {
  title: 'لباسِ طرفداری؛ آیتم‌هایی که مالِ توست',
  subtitle: 'مرچ رسمی، باندل‌ها و محصولات لیمیتد',
  description: `در فروشگاه محصولات ما شامل پیراهن‌ها، باندل‌ها و اقلام محدود با عکس،
            توضیحات و گزینه‌های سایز/تعداد به‌نمایش در آمده‌اند. بخش پیشنهادات
            ویژه و پیگیری سفارش هم در دسترس شماست تا خرید راحت و قابل‌اطمینانی
            داشته باشید.`,
  bigImage: march,
  link: '/products/lip-balm',
  page: 'shop',
  variants: [
    {
      image: march,
      randomObjects: [keyboard, pad, headphone, mouse],
      color: '#0c0e00ff',
      shadow1: "rgba(234, 205, 199, 0.6)",
      shadow2: "rgba(234, 205, 199, 0.6)",
      shadow3: "rgba(188, 143, 127, 0.6)",
    },
  ],
};
