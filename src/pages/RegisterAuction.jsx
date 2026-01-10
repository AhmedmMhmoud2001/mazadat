import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

const RegisterAuction = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <div className="mx-auto max-w-5xl px-4">
        <form onSubmit={handleSubmit}>
          <div className="bg-[#F5F2EB] rounded-lg p-5 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] space-y-8">
            
            {/* بيانات المشتري */}
            <div className="space-y-6">
              <div className="flex items-center justify-start p-3">
                <h2 className="text-[22px] font-bold text-[#1C1C28]">بيانات المشتري</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3 order-2 md:order-1">
                <label className="text-[18px] font-bold text-[#1C1C28] text-right block">الاسم الكامل</label>
                  <input 
                    type="text"
                    className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                    required
                  />
                  
                </div>
                <div className="space-y-3 order-1 md:order-2">
                <label className="text-[18px] font-bold text-[#1C1C28] text-right block">البريد الإليكتروني</label>
                  <input 
                    type="email"
                    className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3 order-2 md:order-1">
                  
                  <label className="text-[18px] font-bold text-[#1C1C28] text-right block">رقم الهوية / جواز السفر</label>
                  <input 
                    type="text"
                    className="w-full  border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                    required
                  />
                </div>
                <div className="space-y-3 order-1 md:order-2">
                <label className="text-[18px] font-bold text-[#1C1C28] text-right block">رقم الهاتف</label>
                  <input 
                    type="tel"
                    className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[18px] font-bold text-[#1C1C28] text-right block">العنوان</label>
                <input 
                  type="text"
                  className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                  required
                />
              </div>
            </div>

            {/* مستندات مطلوبة */}
            <div className="space-y-6">
              <div className="flex items-center justify-center p-3">
                <h3 className="flex-1 text-[22px] font-bold text-[#1C1C28] text-right">مستندات مطلوبة</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <UploadBox label="هوية شخصية" />
                <UploadBox label="إثبات سكن" />
                <UploadBox label="صورة البطاقة" />
              </div>
            </div>

            {/* التأمين */}
            <div className="space-y-6">
              <div className="flex items-start justify-start p-3">
                <h3 className="text-[22px] font-bold text-[#1C1C28]">التأمين</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_612px] gap-4">
              <div className="space-y-3 order-2 md:order-1">
                  <label className="text-[18px] font-bold text-[#1C1C28] text-right block">قيمة التأمين</label>
                  <div className="w-full bg-[#1C1C28] rounded-lg px-4 py-3 h-[50px] flex items-center justify-start">
                    <span className="text-[18px] font-bold text-[#F5F2EB]">10,000 جنيه مصري</span>
                  </div>
                </div>
                <div className="space-y-3 order-1 md:order-2">
                  <label className="text-[18px] font-bold text-[#1C1C28] text-right block">طريقة الدفع</label>
                  <div className="relative">
                    <select className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white appearance-none">
                      <option>بطاقة بنكية</option>
                      <option>تحويل بنكي</option>
                    </select>
                  </div>
                </div>
                
              </div>
              
              <div className="flex items-center gap-3 justify-start">
              <input type="checkbox" className="w-5 h-5 accent-[#9E7731]" />
                <p className="text-[16px] text-[#D94B4B] text-right">
                  قيمة الالتأمين تسترد بعد نهاية المزاد في حالة عدم الفوز به.
                </p>
               
              </div>
            </div>

            {/* كراسة الشروط */}
            <div className="space-y-6">
              <div className="flex items-start justify-start p-3">
                <h3 className="text-[22px] font-bold text-[#1C1C28]">كراسة الشروط</h3>
              </div>
              
              <div className="space-y-3">
                <label className="text-[18px] font-bold text-[#1C1C28] text-right block">قيمة كراسة الشروط</label>
                <div className="w-full bg-[#1C1C28] rounded-lg px-4 py-3 h-[50px] flex items-center justify-start">
                  <span className="text-[18px] font-bold text-[#F5F2EB]">2,000 جنيه مصري</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 justify-start">
              <input type="checkbox" required className="w-5 h-5 accent-[#9E7731]" />
                <p className="text-[16px] text-[#D94B4B] text-right">
                  قيمة كراسة الشروط لا تسترد ابدا.
                </p>
                
              </div>
            </div>

            {/* الشروط والأحكام */}
            <div className="space-y-4">
              <div className="flex items-center justify-center p-3">
                <h3 className="flex-1 text-[22px] font-bold text-black text-right">الشروط و الأحكام</h3>
              </div>
              <div className="space-y-3">
                {[
                  "لوريم ايبسوم دولار سيت أميت ميو أيوتي بيريتيتيس. إكس توب",
                  "لوريم ايبسوم دولار سيت أميت ميو أيوتي بيريتيتيس. إكس توب",
                  "لوريم ايبسوم دولار سيت أميت ميو أيوتي بيريتيتيس. إكس توب"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 justify-start">
                    <input type="checkbox" required className="w-4 h-4 accent-[#9E7731]" />
                    <p className="text-[14px] text-[#1C1C28] text-right">{text}</p>
                    
                  </div>
                ))}
              </div>
            </div>

            {/* الإشعارات */}
            <div className="space-y-4">
              <div className="flex items-center justify-center p-3">
                <h3 className="flex-1 text-[22px] font-bold text-black text-right">الإشعارات</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-start">
                <input type="checkbox" className="w-4 h-4 accent-[#9E7731]" />
                  <p className="text-[14px] text-[#1C1C28] text-right">تنبيه عند بداية المزاد</p>
                 
                </div>
                <div className="flex items-center gap-3 justify-start">
                <input type="checkbox" className="w-4 h-4 accent-[#9E7731]" />
                  <p className="text-[14px] text-[#1C1C28] text-right">تنبيه عند تجاوز مشاركتي</p>
                 
                </div>
                <div className="flex items-center gap-3 justify-start">
                <input type="checkbox" className="w-4 h-4 accent-[#9E7731]" />
                  <p className="text-[14px] text-[#1C1C28] text-right">ملخص المشاركات بالبريد الإلكتروني</p>
                 
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button 
                type="submit"
                className="bg-[#9E7731] hover:bg-[#8A6629] text-[#F5F2EB] font-bold text-[18px] px-8 py-4 rounded-lg transition-all"
              >
                الانتقال للدفع
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Upload Box Component
const UploadBox = ({ label }) => (
  <div className="space-y-4">
    <label className="text-[18px] font-bold text-black text-right block">{label}</label>
    <div className="border-[0.5px] border-dashed border-[#1C1C28] rounded-lg p-6 text-center hover:border-[#9E7731] transition-colors cursor-pointer bg-white h-[140px] flex flex-col items-center justify-center">
      <FiUpload className="w-11 h-11 mx-auto mb-2 text-gray-400" />
      <p className="text-[16px] font-bold text-[#1C1C28]">اسحب الصور هنا أو انقر للتحديد</p>
      <p className="text-[16px] font-bold text-[#1C1C28] mt-1">حتي 10MB</p>
    </div>
  </div>
);

export default RegisterAuction;
