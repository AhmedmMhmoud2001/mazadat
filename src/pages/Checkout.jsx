import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { SiVisa, SiMastercard } from "react-icons/si";

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" or "bank"

  const handlePayment = () => {
    alert("تم الدفع بنجاح!");
    navigate("/dashboard");
  };

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_473px] gap-8">
          
          {/* Main Content - على اليسار في RTL */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#F5F2EB] rounded-lg p-5 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] space-y-6">
              
              {/* Payment Method Toggle */}
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  className={`px-6 py-2 rounded-lg text-[20px] font-normal transition-all ${
                    paymentMethod === "bank"
                      ? "bg-[#1C1C28] text-[#F5F2EB]"
                      : "text-[#1C1C28] hover:bg-gray-100"
                  }`}
                >
                  تحويل بنكي
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`px-6 py-2 rounded-lg text-[20px] font-bold transition-all ${
                    paymentMethod === "card"
                      ? "bg-[#1C1C28] text-[#F5F2EB]"
                      : "text-[#1C1C28] hover:bg-gray-100"
                  }`}
                >
                  بطاقة بنكية
                </button>
              </div>

              {/* Card Payment */}
              {paymentMethod === "card" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 justify-end">
                    <SiMastercard className="w-10 h-10" />
                    <SiVisa className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[18px] font-bold text-[#1C1C28] text-right block">رقم البطاقة</label>
                    <input 
                      type="text" 
                      placeholder="1234 1234 1234 1234"
                      className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[18px] font-bold text-[#1C1C28] text-right block">العنوان</label>
                    <input 
                      type="text"
                      placeholder="___"
                      className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <label className="text-[18px] font-bold text-[#1C1C28] text-right block">Postal code</label>
                      <input 
                        type="text"
                        placeholder="90210"
                        className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[18px] font-bold text-[#1C1C28] text-right block">CVC</label>
                      <input 
                        type="text"
                        placeholder="CVC"
                        className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[18px] font-bold text-[#1C1C28] text-right block">تاريخ الانتهاء</label>
                      <input 
                        type="text"
                        placeholder="MM / YY"
                        className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[18px] font-bold text-[#1C1C28] text-right block">الدولة</label>
                    <select className="w-full border-[0.5px] border-[#1C1C28] rounded-lg px-4 py-3 h-[50px] text-right bg-white">
                      <option>United States</option>
                      <option>مصر</option>
                      <option>الإمارات</option>
                    </select>
                  </div>

                  <div className="flex justify-start">
                    <button 
                      onClick={handlePayment}
                      className="bg-[#9E7731] hover:bg-[#8A6629] text-[#F5F2EB] font-bold text-[18px] px-8 py-4 rounded-lg h-[57px] w-[300px] transition-all"
                    >
                      دفع
                    </button>
                  </div>
                </div>
              )}

              {/* Bank Transfer */}
              {paymentMethod === "bank" && (
                <div className="space-y-6">
                  <div className="bg-[#F5F2EB] rounded-lg p-3 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_1px_0px_rgba(0,0,0,0.1)]">
                    <div className="text-[20px] text-black text-right space-y-2 leading-normal">
                      <p>البنك: FAB</p>
                      <p>رقم الحساب (IBAN): AE12 3456 7890 1234 5678 901</p>
                      <p>المستفيد: Mazadat Abu Dhabi LLC</p>
                      <p>المبلغ: 10,000 جنيه مصري</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[18px] font-bold text-[#1C1C28] text-right">قم برفع صورة الإيصال</h4>
                    <div className="border-[0.5px] border-dashed border-[#1C1C28] rounded-lg p-8 text-center hover:border-[#9E7731] transition-colors cursor-pointer bg-white w-[264px]">
                      <FiUpload className="w-11 h-11 mx-auto mb-3 text-gray-400" />
                      <p className="text-[16px] font-bold text-[#1C1C28]">اسحب الصور هنا أو انقر للتحديد</p>
                      <p className="text-[16px] font-bold text-[#1C1C28] mt-1">حتي 10MB</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <button 
                      onClick={handlePayment}
                      className="bg-[#9E7731] hover:bg-[#8A6629] text-[#F5F2EB] font-bold text-[18px] px-8 py-4 rounded-lg h-[57px] w-[324px] transition-all"
                    >
                      دفع
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Summary - على اليمين في RTL */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#F5F2EB] rounded-lg p-5 shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] space-y-8 sticky top-32">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-black">جنيه مصري</span>
                  <span className="text-[18px] font-bold text-black">10,000</span>
                </div>
                <div className="text-right">
                  <span className="text-[18px] font-bold text-[#1C1C28]">التأمين </span>
                  <span className="text-[20px] text-[#1C1C28]">(قابل للإسترداد)</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-black">جنيه مصري</span>
                  <span className="text-[18px] font-bold text-black">10,000</span>
                </div>
                <div className="text-right">
                  <span className="text-[18px] font-bold text-[#1C1C28]">كراسة الشروط </span>
                  <span className="text-[14px] text-[#1C1C28]">(غير قابلة للإسترداد)</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-[#1C1C28]">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-black">جنيه مصري</span>
                  <span className="text-[20px] font-bold text-black">20,000</span>
                </div>
                <p className="text-[18px] font-bold text-[#1C1C28] text-right">إجمالي الدفع الآن</p>
              </div>

              <div className="bg-[#F0E8D5] border border-[#F0E8D5] rounded-lg p-3">
                <p className="text-[14px] text-black text-right leading-normal">
                  يسترد التأمين تلقائيا بعد نهاية المزاد في نفس اليوم في حالة عدم الفوز به
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
