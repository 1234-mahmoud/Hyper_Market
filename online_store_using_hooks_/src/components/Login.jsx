import React from "react";
import '../style/header.css'
export default function Login() {
  return (
    <div>
      <form
        action=""
        className="bg-slate-100 p-8 rounded-md w-[400px] max-w-full mx-auto my-9 flex flex-col justify-center items-center gap-10"
      >
        <h1 className="text-4xl font-bold">تسجيل الدخول</h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <label htmlFor="">البريد الالكتروني او رقم الهاتف</label>
          <input
            type="text"
            placeholder="ادخل البريد الإلكتروني أو رقم الهاتف"
            className="bg-stone-300 w-[300px] max-w-full indent-4 p-1"
          required
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <label htmlFor="">الرقم السري</label>
          <input
            type="password"
            placeholder="ادخل الرقم السري"
            className="bg-stone-300 w-[300px] max-w-full indent-4 p-1"
          required
          />
        </div>
        <div className="fr_btn flex justify-between items-center gap-4">
          <button className="bg-green-600 rounded-sm text-white w-[150px] p-1">تسجيل الدخول</button>
          أو
          <button className="bg-blue-600 rounded-sm text-white w-[150px] p-1">أنشئ حساب جديد</button>
        </div>
      </form>
    </div>
  );
}
