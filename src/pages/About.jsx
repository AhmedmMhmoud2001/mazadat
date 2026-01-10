import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 space-y-8">
      <SectionTitle
        title="من نحن"
        subtitle="نعمل على بناء تجربة مزايدة آمنة وشفافة بأسلوب احترافي."
      />

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
  );
};

export default About;
