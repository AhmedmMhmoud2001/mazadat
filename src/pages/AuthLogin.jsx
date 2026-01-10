import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/right-bg-overlay (1).png";
import { login } from "../data/authStore";
import heroBg from "../assets/login2.png";
const AuthLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login({ email: form.email, password: form.password });
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setError("");
    navigate("/", { replace: true });
  };

  return (
    <section className="relative w-full min-h-[73vh] flex items-center bg-cover bg-center py-20 lg:py-0"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(246,236,217,0.9)_0%,_rgba(246,236,217,0.55)_55%,_rgba(246,236,217,0.25)_100%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-32">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
          {/* Logo / Text Side */}
          <div className="flex-1 flex items-center justify-center md:justify-end">
            <img
              src={logo}
              alt="مزادات أبوظبي"
              className="w-48 md:w-64 lg:w-80 object-contain drop-shadow-md"
            />
          </div>

          {/* Form Side */}
          <div className="flex-1 flex justify-center md:justify-start">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5 w-full max-w-md shadow-xl border border-white/40"
            >
              <div className="space-y-2 text-center md:text-right">
                <h2 className="text-2xl font-bold text-ink">تسجيل الدخول</h2>
                <div className="text-sm text-muted">
                  ليس لديك حساب؟{" "}
                  <Link to="/auth/register" className="text-gold font-bold hover:underline">
                    إنشاء حساب
                  </Link>
                </div>
              </div>

              {error ? (
                <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg font-semibold border border-red-100">{error}</div>
              ) : null}

              <div className="space-y-4">
                <input
                  className="input-field bg-white/50 focus:bg-white transition-colors"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="البريد الإلكتروني"
                />
                <input
                  className="input-field bg-white/50 focus:bg-white transition-colors"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="كلمة المرور"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-muted">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-gold h-4 w-4" />
                  <span>تذكرني</span>
                </label>
                <button type="button" className="text-gold hover:text-gold-dark transition-colors font-medium">
                  نسيت كلمة المرور؟
                </button>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                تسجيل الدخول
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLogin;
