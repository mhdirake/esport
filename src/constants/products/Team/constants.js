import team from 'assets/pages/team/team.png';
import cs2 from 'assets/pages/team/cs2.png';
import dota2 from 'assets/pages/team/dota2.png';
import ea from 'assets/pages/team/ea.png';
import lol from 'assets/pages/team/lol.png';

export const Team = {
  title: "قهرمانانِ آسمان، چهره های خط مقدم",
  subtitle: "معرفی بازیکنان، اعضا و هایلایت‌ها",
  description: "در این صفحه پروفایل هر بازیکن و کادر فنی به‌همراه نقش، سابقه و هایلایت‌های ویدیویی قابل مشاهده است. امکان فیلتر بر اساس بازی یا نقش وجود دارد تا سریع‌تر به بازیکن موردنظر برسید.",
  bigImage: team,
  link: "/products/team",
  variants: [
    {
      image: team,
      randomObjects: [cs2, dota2, ea, lol],
      color: '#1d0000ff',
      shadow1: "rgba(234, 199, 199, 0.6)",
      shadow2: "rgba(234, 199, 199, 0.6)",
      shadow3: "rgba(188, 127, 127, 0.6)",
    },
  ],
};
