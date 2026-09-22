"use client";

import Link from "next/link";
import { z } from "zod";

import { Form, FormCheckbox, FormInput, FormSubmit } from "@/component/myForm";

const registerSchema = z.object({
  first_name: z.string().min(1, "نام  را وارد کنید"),
  last_name: z.string().min(1, "نام خانوادگی را وارد کنید"),

  email: z
    .string()
    .min(1, "ایمیل را وارد کنید")
    .email("ایمیل وارد شده معتبر نیست"),

  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),

  terms: z.boolean().refine((value) => value === true, {
    message: "پذیرش قوانین و شرایط الزامی است",
  }),
});

export default function RegisterPage() {
  const handleSubmit = (data) => {
    console.log("Register data:", data);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center justify-center">
        <div className="w-full">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                J
              </span>

              <span>
                Job<span className="text-indigo-600">Match</span>
              </span>
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="mb-7">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                ساخت حساب کاربری
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                حساب خودت را بساز و فرصت‌های شغلی مناسب خودت را پیدا کن.
              </p>
            </div>

            {/* Form */}
            <Form
              // id="register-form"
              schema={registerSchema}
              onSubmit={handleSubmit}
              defaultValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: false,
              }}
              validationMode="onBlur"
              className="space-y-5"
            >
              {/* Name */}
              <FormInput
                name="first_name"
                label="نام "
                placeholder="مثلاً محمد "
                required
                requiredMessage="نام  را وارد کنید"
              />
              <FormInput
                name="last_name"
                label=" نام خانوادگی"
                placeholder="مثلاً دهقان"
                required
                requiredMessage=" نام خانوادگی را وارد کنید"
              />

              {/* Email */}
              <FormInput
                name="email"
                label="ایمیل"
                type="email"
                placeholder="example@email.com"
                required
                requiredMessage="ایمیل را وارد کنید"
                dir="ltr"
              />

              {/* Password */}
              <FormInput
                name="password"
                label="رمز عبور"
                type="password"
                placeholder="حداقل ۸ کاراکتر"
                required
                requiredMessage="رمز عبور را وارد کنید"
                dir="ltr"
              />

              {/* Terms */}
              <div className="pt-1">
                <FormCheckbox
                  name="terms"
                  label={
                    <>
                      با{" "}
                      <Link
                        href="/terms"
                        className="font-medium text-indigo-600 hover:text-indigo-700"
                      >
                        قوانین و شرایط
                      </Link>{" "}
                      استفاده از JobMatch موافقم.
                    </>
                  }
                />
              </div>

              {/* Submit */}
              <FormSubmit
                // form="register-form"
                className="h-11 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                ساخت حساب
              </FormSubmit>
            </Form>

            {/* Login */}
            <div className="mt-6 border-t border-slate-100 pt-6 text-center">
              <p className="text-sm text-slate-500">
                قبلاً حساب ساخته‌ای؟
                <Link
                  href="/login"
                  className="mr-1 font-semibold text-indigo-600 transition hover:text-indigo-700"
                >
                  ورود به حساب
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-400">
            با ساخت حساب، مسیر پیدا کردن شغل مناسب را شروع کن.
          </p>
        </div>
      </div>
    </main>
  );
}
