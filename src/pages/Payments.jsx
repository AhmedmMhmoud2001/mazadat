import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUpload, FiCreditCard } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Payments = () => {
  const [method, setMethod] = useState("card"); // 'card' or 'bank'

  return (
    <section className="bg-[#FDFCF9] min-h-screen py-32 text-[#1D1D1D]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1fr_44rem] gap-8">
          
          {/* Right Column (Summary) */}
          <div className="order-2 lg:order-1 h-fit space-y-4">
            <div className="bg-[#F8F8F8] border border-[#EBEBEB] rounded-3xl p-6 space-y-5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">التأمين (قابل للإسترداد)</span>
                <span className="font-bold">10,000 جنيه مصري</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">كراسة الشروط (غير قابلة للإسترداد)</span>
                <span className="font-bold">2,000 جنيه مصري</span>
              </div>
              <div className="border-t border-[#E0E0E0] pt-4 flex justify-between items-center text-lg">
                <span className="font-bold">إجمالي الدفع الآن</span>
                <span className="font-bold">12,000 جنيه مصري</span>
              </div>

              <div className="bg-[#F3EAD8] text-[#977D48] rounded-xl p-4 text-xs font-bold leading-relaxed">
                يسترد التأمين تلقائياً بعد نهاية المزاد في نفس اليوم في حالة عدم الفوز به
              </div>
            </div>
          </div>
          {/* Main Content (Payment Form) */}
          <div className="order-1 lg:order-2 bg-[#F8F8F8] border border-[#EBEBEB] rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold hidden md:block">وبوابة الدفع</h2>
              <div className="bg-[#EBEBEB] p-1 rounded-xl flex items-center w-full md:w-auto">
                <button
                  onClick={() => setMethod('bank')}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${method === 'bank' ? 'bg-[#1D1D1D] text-white shadow-md' : 'text-[#828282] hover:text-[#1D1D1D]'}`}
                >
                  تحويل بنكي
                </button>
                <button
                  onClick={() => setMethod('card')}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${method === 'card' ? 'bg-[#1D1D1D] text-white shadow-md' : 'text-[#828282] hover:text-[#1D1D1D]'}`}
                >
                  بطاقة بنكية
                </button>
              </div>
            </div>

            {method === 'card' ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold">رقم البطاقة</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl pl-4 pr-14 py-3 outline-none focus:border-[#B3985F] text-left ltr"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 flex gap-2">
                    <FaCcVisa className="text-2xl text-[#1a1f71]" />
                    <FaCcMastercard className="text-2xl text-[#eb001b]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold block">العنوان</label>
                  <input className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F]" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold block">تاريخ الإنتهاء</label>
                    <input placeholder="MM / YY" className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F] text-left" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold block">CVC</label>
                    <input placeholder="CVC" className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F] text-left" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold block">الدولة</label>
                    <div className="relative">
                      <select className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 appearance-none outline-none focus:border-[#B3985F] text-left">
                        <option>United States</option>
                        <option>United Arab Emirates</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold block">Postal code</label>
                    <input placeholder="90210" className="w-full bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl px-4 py-3 outline-none focus:border-[#B3985F] text-left" />
                  </div>
                </div>

                <button className="w-full bg-[#B3985F] hover:bg-[#967d46] text-white font-bold py-4 rounded-xl text-center transition-colors shadow-sm mt-4">
                  دفع
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Bank Info Box */}
                <div className="bg-[#F5F5F5] rounded-xl p-6 space-y-3 border border-[#E0E0E0]">
                  <div className="flex justify-between">
                    <span className="text-[#828282]">البنك:</span>
                    <span className="font-bold">FAB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#828282]">رقم الحساب (IBAN):</span>
                    <span className="font-bold font-mono">AE12 3456 7890 1234 5678 901</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#828282]">المستفيد:</span>
                    <span className="font-bold">Mazadat Abu Dhabi LLC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#828282]">المبلغ:</span>
                    <span className="font-bold text-[#B3985F]">10,000 جنيه مصري</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold block">قم برفع صورة الإيصال</label>
                  <div className="border border-dashed border-[#C4C4C4] rounded-xl p-8 hover:bg-gray-50 cursor-pointer transition-colors text-center group">
                    <div className="flex flex-col items-center gap-3">
                      <FiUpload className="text-2xl text-[#B3985F] group-hover:scale-110 transition-transform" />
                      <div className="font-bold text-sm">اسحب الصور هنا أو انقر للتحديد</div>
                      <div className="text-xs text-[#828282]">10MB حتى</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#B3985F] hover:bg-[#967d46] text-white font-bold py-4 rounded-xl text-center transition-colors shadow-sm mt-4">
                  دفع
                </button>
              </div>
            )}
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Payments;
