import { Link } from "react-router-dom";
import authBg from "../assets/login(2).png";
import logo from "../assets/ChatGPT Image Sep 20, 2025, 12_03_45 PM 1.png";

const AuthRegister = () => {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div
        className="relative overflow-hidden rounded-[2.5rem] bg-cover bg-center shadow-soft p-10 md:p-14"
        style={{ backgroundImage: `url(${authBg})` }}
      >
        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={logo}
              alt="مزادات أبوظبي"
              className="w-56 md:w-72 object-contain"
            />
          </div>

          <div className="flex-1">
            <div className="glass-card p-8 space-y-4 max-w-md">
              <h2 className="text-2xl">إنشاء حساب</h2>
              <div className="text-sm text-muted">
                هل لديك حساب بالفعل؟{" "}
                <Link to="/auth/login" className="text-gold font-semibold">
                  تسجيل دخول
                </Link>
              </div>
              <input className="input-field" placeholder="الاسم" />
              <input className="input-field" placeholder="رقم الهاتف" />
              <input className="input-field" placeholder="البريد الإلكتروني" />
              <input className="input-field" placeholder="كلمة المرور" />
              <input className="input-field" placeholder="تأكيد كلمة المرور" />
              <div className="flex items-center justify-between text-sm text-muted">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  تذكرني
                </label>
                <button className="text-gold">نسيت كلمة المرور؟</button>
              </div>
              <button className="btn-primary w-full">إنشاء حساب</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthRegister;
