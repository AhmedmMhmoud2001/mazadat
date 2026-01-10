import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiShield, FiZap, FiCheckCircle } from "react-icons/fi";
import heroBg from "../assets/login2.png";
import heroMan from "../assets/arab-business-man-with-emotion-transparent-background 1.png";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import CategoryCard from "../components/CategoryCard";
import AuctionCard from "../components/AuctionCard";
import imgcategory1 from "../assets/freepik__the-style-is-candid-image-photography-with-natural__91675 1.png";
// import imgcategory2 from "../assets/phone.png";
// import imgcategory3 from "../assets/furniture.png";
const stats = [
  { value: "20,000", label: "عضو نشط" },
  { value: "95%", label: "نسبة الرضا" },
  { value: "200", label: "مزاد شهرياً" },
  { value: "24/7", label: "دعم العملاء" },
];

const categories = [
  { title: "سيارات", subtitle: "مزادات السيارات الفاخرة", img: imgcategory1 },
  { title: "هواتف", subtitle: "هواتف وأجهزة ذكية", img: imgcategory1 },
  { title: "أثاث", subtitle: "قطع منزلية نادرة", img: imgcategory1 },
  { title: "سيارات", subtitle: "مزادات السيارات الفاخرة", img: imgcategory1 },
  { title: "هواتف", subtitle: "هواتف وأجهزة ذكية", img: imgcategory1 },
  { title: "أثاث", subtitle: "قطع منزلية نادرة", img: imgcategory1 },
];

const featuredAuctions = [
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
              <div className="space-y-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-ink">
                  اكتشف أفضل المزادات <br className="hidden md:block" /> في أبوظبي
                </h1>
                <p className="text-ink/70 text-md sm:text-lg font-medium max-w-lg leading-relaxed">
                  شارك في مزادات موثوقة وآمنة على السيارات، العقارات، والمقتنيات الثمينة - كل ذلك من مكان واحد.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/auth/login"
                    className="bg-ink text-white px-8 py-3 text-base font-bold rounded-md hover:bg-ink/90 transition shadow-lg"
                  >
                    سجل الآن
                  </Link>
                  <Link
                    to="/auctions"
                    className="bg-[#C5A572] text-white px-8 py-3 text-base font-bold rounded-md hover:bg-[#b09360] transition shadow-lg"
                  >
                    تصفح المزادات
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

      <section className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-20">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 space-y-8 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-12"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mx-auto max-w-6xl px-4 space-y-8 my-20">
        <SectionTitle title="مزادات مميزة" />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-12"
        >
          {featuredAuctions.map((auction, index) => (
            <SwiperSlide key={`${auction.title}-${index}`}>
              <AuctionCard {...auction} />
            </SwiperSlide>
          ))}
        </Swiper>
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

      <section className="mx-auto max-w-6xl px-4 space-y-8 my-20">
        <SectionTitle title="المزادات القادمة" />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-12"
        >
          {upcomingAuctions.map((auction, index) => (
            <SwiperSlide key={`${auction.title}-up-${index}`}>
              <AuctionCard {...auction} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </div>
  );
};

export default Home;
