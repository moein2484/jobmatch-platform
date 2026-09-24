"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import Swal from "sweetalert2";
import { Form, FormInput, FormSubmit, FormPassword } from "@/component/myForm";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "ایمیل را وارد کنید")
    .email("فرمت ایمیل صحیح نیست"),

  password: z
    .string()
    .min(1, "رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

export default function LoginPage() {


  const router = useRouter();
  const { mutate, isPending } = useLogin();
  const handleSubmit = async (data) => {
    mutate(data, {
      onSuccess: (result) => {
        Swal.fire({
          icon: "success",
          title: "شما با موفقیت وارد شدید",
          text: result.message,
          confirmButtonText: "متوجه شدم",
        });
        router?.push("/profile");
      },
      onError: (err) => {
        Swal.fire({
          icon: "error",
          title: "خطا در تکمیل پروفایل",
          text: err.message,
          confirmButtonText: "متوجه شدم",
        });
      },
    });
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
                خوش آمدی 👋
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                برای ادامه وارد حساب کاربری خودت شو.
              </p>
            </div>

            {/* Form */}
            <Form
              schema={loginSchema}
              defaultValues={{
                email: "",
                password: "",
                remember: false,
              }}
              onSubmit={handleSubmit}
              validationMode="onSubmit"
            >
              <div className="space-y-5">
                {/* Email */}
                <FormInput
                  name="email"
                  label="ایمیل"
                  type="email"
                  placeholder="example@email.com"
                  dir="ltr"
                />

                {/* Password */}
                <div>
                  <div className="relative">
                    <FormPassword
                      name="password"
                      label="رمز عبور"
                      placeholder="رمز عبور را وارد کنید"
                      required
                      minLength={6}
                      minLengthMessage="حداقل ۶ کاراکتر"
                    />
                  </div>
                </div>

                <FormSubmit className="h-11 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99]">
                  {isPending ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDots height={20} width={40} color="#fff" />
                    </div>
                  ) : (
                    " ورود به حساب"
                  )}
                </FormSubmit>
              </div>
            </Form>

            {/* Register */}
            <div className="mt-6 border-t border-slate-100 pt-6 text-center">
              <p className="text-sm text-slate-500">
                هنوز حساب کاربری نداری؟
                <Link
                  href="/register"
                  className="mr-1 font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  ثبت نام کن
                </Link>
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            JobMatch — مسیرت به سمت شغل مناسب
          </p>
        </div>
      </div>
    </main>
  );
}
