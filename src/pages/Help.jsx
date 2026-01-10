import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

const Help = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 space-y-10">
      <SectionTitle
        title="مساعدة"
        subtitle="فريقنا جاهز لمساعدتك في أي وقت عبر قنوات التواصل المختلفة."
      />

      <div className="section-card p-8 space-y-6">
        <div className="space-y-3 text-sm text-muted">
          <div className="flex items-center gap-2">
            <FiMail className="text-gold" />
            contact@company.com
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-gold" />
            رقم التواصل
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-gold" />
            العنوان
          </div>
        </div>

        <div className="section-card bg-white/60 p-6 text-center space-y-4">
          <h3 className="text-xl">هل لديك أسئلة؟</h3>
          <p>تواصل معنا وسنرد عليك بأسرع وقت ممكن.</p>
          <a
            href="mailto:contact@company.com"
            className="btn-gold inline-flex items-center justify-center"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default Help;
