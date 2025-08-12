import stream from 'assets/pages/stream/stream.png';
import twitch from 'assets/pages/stream/twitch.png';
import kick from 'assets/pages/stream/kick.png';
import spotify from 'assets/pages/stream/spotify.png';
import youtube from 'assets/pages/stream/youtube.png';

export const Stream = {
  title: "نبض رقابت؛ هر ثانیه‌اش زنده و نزدیک است",
  subtitle: "استریم‌ها، VOD و هایلایت‌ها — همه در یک‌جا",
  description: "هاب پخش شامل استریم‌های جاری، برنامهٔ پخش آینده، ویدیوهای ضبط‌شده و هایلایت‌هاست. پلیر، لینک چت و اطلاعات مسابقه کنار ویدیو قرار دارد تا تجربهٔ تماشای شما کامل باشد",
  bigImage: stream,
  link: "/products/stream",
  page: "stream",
  variants: [
    {
      image: stream,
      randomObjects: [twitch, kick, spotify, youtube],
      color: '#000e1dff',
      shadow1: "rgba(199, 211, 234, 0.6)",
      shadow2: "rgba(199, 211, 234, 0.6)",
      shadow3: "rgba(127, 136, 188, 0.6)",
    },
  ],
};
