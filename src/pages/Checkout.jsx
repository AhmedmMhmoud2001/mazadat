import UploadBox from "../components/UploadBox";

const Checkout = () => {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="section-card p-8 space-y-6">
        <h2 className="text-2xl">بيانات المشتري</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input className="input-field" placeholder="الاسم الكامل" />
          <input className="input-field" placeholder="البريد الإلكتروني" />
          <input className="input-field" placeholder="رقم الهاتف" />
          <input className="input-field" placeholder="رقم الهوية / جواز السفر" />
        </div>
        <input className="input-field" placeholder="العنوان" />

        <div className="space-y-4">
          <h3 className="text-lg">مستندات مطلوبة</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <UploadBox label="هوية شخصية" />
            <UploadBox label="إثبات سكن" />
            <UploadBox label="صورة البطاقة" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg">التأمين</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <select className="select-field">
              <option>بطاقة بنكية</option>
              <option>تحويل بنكي</option>
            </select>
            <input className="input-field" placeholder="قيمة التأمين" value="10,000 جنيه مصري" readOnly />
          </div>
          <div className="text-xs text-danger">
            قيمة التأمين تسترد بعد نهاية المزاد في حالة عدم الفوز به.
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg">كراسة الشروط</h3>
          <input className="input-field" placeholder="قيمة كراسة الشروط" value="2,000 جنيه مصري" readOnly />
          <div className="text-xs text-danger">قيمة كراسة الشروط لا تسترد أبداً.</div>
        </div>

        <div className="space-y-2 text-sm text-muted">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            الموافقة على الشروط والأحكام
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            تلقي الإشعارات عبر البريد الإلكتروني
          </label>
        </div>

        <button className="btn-gold w-full">الانتقال للدفع</button>
      </div>
    </section>
  );
};

export default Checkout;
