import { Link } from "react-router-dom";
import { FiShield, FiZap, FiCheckCircle } from "react-icons/fi";
import heroBg from "../assets/login2.png";
import heroMan from "../assets/arab-business-man-with-emotion-transparent-background 1.png";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import CategoryCard from "../components/CategoryCard";
import AuctionCard from "../components/AuctionCard";

const stats = [
  { value: "24/7", label: "دعم العملاء" },
  { value: "200", label: "مزاد شهرياً" },
  { value: "95%", label: "نسبة الرضا" },
  { value: "20,000", label: "عضو نشط" },
];

const categories = [
  { title: "سيارات", subtitle: "مزادات السيارات الفاخرة" },
  { title: "هواتف", subtitle: "هواتف وأجهزة ذكية" },
  { title: "أثاث", subtitle: "قطع منزلية نادرة" },
];

const featuredAuctions = [
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "01:25:20",
    status: { key: "live", label: "مباشر" },
    cta: "شارك",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "17,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
];

const upcomingAuctions = [
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "15,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "15,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
  {
    title: "اسم المنتج",
    category: "سيارات",
    location: "أبو ظبي",
    price: "15,000,000 جنيه مصري",
    date: "15 فبراير 2024",
    status: { key: "upcoming", label: "قادم" },
    cta: "التفاصيل",
  },
];

const Home = () => {
  return (
    <div className="">
      <section className="w-full">
        <div
          className="relative w-full bg-cover bg-center  pt-32"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(246,236,217,0.9)_0%,_rgba(246,236,217,0.55)_55%,_rgba(246,236,217,0.25)_100%)]" />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <span className="text-gold font-semibold text-sm">
                  اكتشف أفضل المزادات في أبوظبي
                </span>
                <h1 className="text-3xl sm:text-4xl leading-snug">
                  منصة موثوقة للمزادات العقارية والسيارات والمقتنيات المميزة
                </h1>
                <p className="text-ink/80">
                  نوفر تجربة مزايدة شفافة ومرنة مع أدوات متابعة مباشرة ودعم متكامل
                  حتى إتمام الصفقة.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/auctions" className="btn-primary">
                    تصفح المزادات
                  </Link>
                  <Link to="/auth/login" className="btn-gold">
                    سجل الآن
                  </Link>
                </div>
              </div>

              <div className="flex justify-center  md:justify-end">
                <img
                  src={heroMan}
                  alt="رجل أعمال"
                  className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 space-y-8">
        <SectionTitle
          title="تصنيفات شائعة"
          subtitle="استكشف أحدث المزادات حسب الفئات الأكثر طلباً."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 space-y-8">
        <SectionTitle title="مزادات مميزة" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredAuctions.map((auction, index) => (
            <AuctionCard key={`${auction.title}-${index}`} {...auction} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-center">
          <div className="flex flex-col items-center gap-3">
            <FiCheckCircle className="text-3xl text-gold" />
            <div className="font-semibold">منتجات أصلية</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FiShield className="text-3xl text-gold" />
            <div className="font-semibold">آمن وموثوق</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FiZap className="text-3xl text-gold" />
            <div className="font-semibold">تحديثات فورية ومباشرة</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 space-y-8">
        <SectionTitle title="المزادات القادمة" />
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingAuctions.map((auction, index) => (
            <AuctionCard key={`${auction.title}-up-${index}`} {...auction} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
