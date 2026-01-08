import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa";
import { FiShield, FiZap, FiAward, FiTruck, FiCheckCircle } from "react-icons/fi";
import heroBg from "../assets/login(2).png";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import CategoryCard from "../components/CategoryCard";
import AuctionCard from "../components/AuctionCard";
import FeatureCard from "../components/FeatureCard";

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
    date: "15 فبراير 2024",
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

const services = [
  {
    title: "تقييم الأصول",
    description: "خبراء لتقييم السيارات والعقارات والمقتنيات قبل الطرح.",
    icon: FiAward,
  },
  {
    title: "شحن وتسليم",
    description: "تجهيز أوراق التسليم وخيارات الشحن السريعة.",
    icon: FiTruck,
  },
  {
    title: "مزادات مباشرة",
    description: "تجربة تفاعلية مع عداد حي وتسجيل عطاءات لحظي.",
    icon: FaGavel,
  },
];

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="mx-auto max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-sand-dark bg-cover bg-center shadow-soft p-10 md:p-14"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(29,31,43,0.75)_0%,_rgba(29,31,43,0.35)_55%,_rgba(29,31,43,0.15)_100%)]" />
          <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute left-10 bottom-0 h-48 w-48 rounded-full bg-ink/10 blur-3xl" />
          <div className="relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <span className="text-gold font-semibold text-sm">
                اكتشف أفضل المزادات في أبوظبي
              </span>
              <h1 className="text-3xl sm:text-4xl leading-snug">
                منصة موثوقة للمزادات العقارية والسيارات والمقتنيات المميزة
              </h1>
              <p>
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

            <div className="glass-card p-8 text-center space-y-4">
              <div className="mx-auto h-20 w-20 rounded-full bg-ink text-white flex items-center justify-center text-3xl">
                <FaGavel />
              </div>
              <h3 className="text-xl">مزادات أبوظبي</h3>
              <p className="text-sm">
                مزادات احترافية بإجراءات واضحة وحماية كاملة للبيانات والمعاملات.
              </p>
              <Link to="/dashboard" className="btn-outline w-full">
                لوحة التحكم
              </Link>
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

      <section id="services" className="mx-auto max-w-6xl px-4 space-y-8">
        <SectionTitle
          title="خدماتنا"
          subtitle="منصة متكاملة تغطي كل مراحل المزاد من التقييم حتى التسليم."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 space-y-6">
        <SectionTitle title="من نحن" />
        <div className="section-card p-8">
          <p>
            نحن منصة مزادات رقمية تساعد البائعين والمشترين على إتمام صفقات شفافة
            وبأسلوب احترافي مع إجراءات حماية واضحة.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="section-card p-6">
            <h3 className="text-lg mb-2">رؤيتنا</h3>
            <p>
              تقديم تجربة مزايدة ذكية ترفع من قيمة الأصول وتبني ثقة طويلة الأمد.
            </p>
          </div>
          <div className="section-card p-6">
            <h3 className="text-lg mb-2">رسالتنا</h3>
            <p>
              تمكين الجميع من الوصول لمزادات موثوقة بخيارات دفع آمنة ودعم متواصل.
            </p>
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-6xl px-4">
        <div className="section-card p-8 text-center space-y-4">
          <h3 className="text-2xl">هل لديك أسئلة؟</h3>
          <p>فريقنا جاهز لمساعدتك على مدار الساعة.</p>
          <button className="btn-gold">تواصل معنا</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
