import { FaGavel } from "react-icons/fa";
import { FiAward, FiTruck } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";

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

const Services = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 space-y-10">
      <SectionTitle
        title="خدماتنا"
        subtitle="منصة متكاملة تغطي كل مراحل المزاد من التقييم حتى التسليم."
      />

      <div className="section-card p-6">
        <p>
          نوفر منظومة خدمات متكاملة تساعد البائعين والمشترين على اتخاذ قرارات
          واضحة وموثوقة، من تقييم الأصول وحتى إنهاء الصفقة.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <FeatureCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
