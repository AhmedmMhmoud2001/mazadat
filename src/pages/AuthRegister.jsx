import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authBg from "../assets/login(2).png";
import logo from "../assets/ChatGPT Image Sep 20, 2025, 12_03_45 PM 1.png";
import { register } from "../data/authStore";

const AuthRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("تأكيد كلمة المرور غير مطابق");
      return;
    }
    const result = register({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    });
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setError("");
    navigate("/", { replace: true });
  };

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
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-4 w-full max-w-md"
            >
              <h2 className="text-2xl">إنشاء حساب</h2>
              <div className="text-sm text-muted">
                هل لديك حساب بالفعل؟{" "}
                <Link to="/auth/login" className="text-gold font-semibold">
                  تسجيل دخول
                </Link>
              </div>
              {error ? (
                <div className="text-sm text-danger font-semibold">{error}</div>
              ) : null}
              <input
                className="input-field"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="الاسم"
              />
              <input
                className="input-field"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="رقم الهاتف"
              />
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
              <input
                className="input-field"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="تأكيد كلمة المرور"
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
                إنشاء حساب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthRegister;
