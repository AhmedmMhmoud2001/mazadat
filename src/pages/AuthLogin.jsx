import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/right-bg-overlay (1).png";
import { login } from "../data/authStore";

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
    <section
      className="min-h-screen w-full bg-cover bg-center"
      
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={logo}
              alt="مزادات أبوظبي"
              className="w-56 md:w-72 object-contain"
            />
          </div>

          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-4 w-full max-w-md"
            >
              <h2 className="text-2xl">تسجيل الدخول</h2>
              <div className="text-sm text-muted">
                ليس لديك حساب؟{" "}
                <Link to="/auth/register" className="text-gold font-semibold">
                  إنشاء حساب
                </Link>
              </div>
              {error ? (
                <div className="text-sm text-danger font-semibold">{error}</div>
              ) : null}
              <input
                className="input-field"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
              />
              <input
                className="input-field"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="كلمة المرور"
              />
              <div className="flex items-center justify-between text-sm text-muted">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  تذكرني
                </label>
                <button type="button" className="text-gold">
                  نسيت كلمة المرور؟
                </button>
              </div>
              <button type="submit" className="btn-primary w-full">
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
