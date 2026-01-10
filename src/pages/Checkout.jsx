import { Link } from "react-router-dom";
import UploadBox from "../components/UploadBox";

const Checkout = () => {
  return (
    <section className="bg-[#FDFCF9] min-h-screen py-10 text-[#1D1D1D]">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-[#F8F8F8] border border-[#EBEBEB] rounded-3xl p-8 space-y-8 shadow-sm">

          {/* Buyer Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">بيانات المشتري</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold block">الاسم الكامل</label>
                <input className="w-full bg-transparent border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">البريد الإلكتروني</label>
                <input className="w-full bg-transparent border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">رقم الهاتف</label>
                <input className="w-full bg-transparent border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">رقم الهوية / جواز السفر</label>
                <input className="w-full bg-transparent border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F]" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold block">العنوان</label>
              <input className="w-full bg-transparent border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F]" />
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">مستندات مطلوبة</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <UploadBox label="هوية شخصية" />
              <UploadBox label="إثبات سكن" />
              <UploadBox label="صورة البطاقة" />
            </div>
          </div>

          {/* Insurance */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">التأمين</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm font-bold mb-1">
                <span>قيمة التأمين</span>
                <span>طريقة الدفع</span>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                <div className="bg-[#242424] text-white rounded-xl flex items-center justify-center px-4 font-bold">
                  10,000 جنيه مصري
                </div>
                <div className="relative">
                  <select className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 appearance-none outline-none focus:border-[#B3985F]">
                    <option>بطاقة بنكية</option>
                    <option>تحويل بنكي</option>
                  </select>
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="text-xs text-[#E57373]">
                قيمة التأمين تسترد بعد نهاية المزاد في حالة عدم الفوز به.
              </div>
            </div>
          </div>

          {/* Terms Book */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">كراسة الشروط</h3>
            <div className="space-y-2">
              <div className="text-sm font-bold">قيمة كراسة الشروط</div>
              <div className="bg-[#242424] text-white rounded-xl p-4 text-center font-bold">
                2,000 جنيه مصري
              </div>
              <div className="text-xs text-[#E57373]">قيمة كراسة الشروط لا تسترد ابداً.</div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-6 pt-4">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">الشروط والأحكام</h3>
              {[1, 2, 3].map((i) => (
                <label key={i} className="flex items-start gap-3 cursor-pointer group">
                  <div className="mt-1 relative flex items-center justify-center w-5 h-5 border-2 border-[#C4C4C4] rounded-md transition-colors group-hover:border-[#B3985F]">
                    <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                    <div className="w-3 h-3 bg-[#B3985F] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-[#666]">لوريم إيبسوم دولار سيت أميت ميو إيواني بيرتينيتس إكس توب</span>
                </label>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">الإشعارات</h3>
              {[
                "تنبيه عند بداية المزاد",
                "تنبيه عند تجاوز مشاركتي",
                "ملخص المشاركات بالبريد الإلكتروني"
              ].map((label, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className="mt-1 relative flex items-center justify-center w-5 h-5 border-2 border-[#C4C4C4] rounded-md transition-colors group-hover:border-[#B3985F]">
                    <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                    <div className="w-3 h-3 bg-[#B3985F] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-[#666]">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <Link to="/payments" className="block w-full bg-[#B3985F] hover:bg-[#967d46] text-white font-bold py-4 rounded-xl text-center transition-colors shadow-sm">
            الانتقال للدفع
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
