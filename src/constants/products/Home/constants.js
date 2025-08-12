import home from 'assets/pages/home/home.png';
import academy from 'assets/pages/home/academy.png';
import news from 'assets/pages/home/news.png';
import shop from 'assets/pages/home/shop.png';
import tournament from 'assets/pages/home/tournament.png';
import sponsorship from 'assets/pages/home/sponsorship.png';

export const Home = {
  title: "جایی که افسانه ها زنده می شوند",
  subtitle: "همین‌جا، همه چیز شروع می‌شود",
  description: "باشگاه ورزش‌های الکترونیک سیمرغ با الهام از پرنده اسطوره‌ای فرهنگ ایران، مأموریت دارد استعدادها را شناسایی و پرورش دهد، تیم‌های حرفه‌ای را به میدان رقابت‌های ملی و بین‌المللی بفرستد و رویدادهایی برگزار کند که استانداردهای جدیدی برای ای‌اسپورت ایران تعریف می‌کند.ما ترکیبی از رقابت، آموزش، تولید محتوای تخصصی و ساخت جامعه‌ای پویا از گیمرها را در یک مسیر واحد جمع کرده‌ایم: پرواز به سمت قله‌های جهانی.در سیمرغ، هر بازیکن یک قهرمان بالقوه است و هر رویا، فرصتی برای نوشتن افسانه‌ای تازه",
  bigImage: home,
  link: "/products/team",
  page: "home",
  variants: [
    {
      image: home,
      randomObjects: [academy, news, shop, tournament, sponsorship],
      color: '#181400ff',
      shadow1: "rgba(234, 228, 199, 0.6)",
      shadow2: "rgba(234, 228, 199, 0.6)",
      shadow3: "rgba(188, 127, 127, 0.6)",
    },
  ],
};
