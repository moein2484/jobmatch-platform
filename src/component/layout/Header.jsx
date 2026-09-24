"use client";

import { useMe } from "@/hooks/auth/useMe";
import { useState } from "react";
import Link from "next/link";
import { logOut } from "@/services/auth";
import { useLogOut } from "@/hooks/auth/useLogOut";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Header({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useMe();
  const user = data?.data;

  const { mutate: logout, isPending } = useLogOut();

  const handlerSubmit = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.setQueryData(["me"], null);

        setIsOpen(false);

        router.push("/login");
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white">
            J
          </div>

          <span className="text-lg font-bold text-slate-900">JobMatch</span>
        </div>

        {isAuthenticated ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50 flex-row-reverse"
            >
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  {user?.user?.first_name} {user?.user?.last_name}
                </p>

                <p className="text-xs text-slate-500">
                  {user?.profile?.jobTitle || "پروفایل شما"}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                {user?.user?.first_name?.[0] || "U"}
              </div>
            </button>

            {isOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                <Link
                  href="/profile"
                  className="block rounded-lg px-3 py-2 text-right text-sm hover:bg-slate-50"
                >
                  ویرایش پروفایل
                </Link>

                <button
                  onClick={() => handlerSubmit()}
                  className="w-full rounded-lg px-3 py-2 text-right text-sm text-red-600 hover:bg-red-50"
                >
                  خروج از حساب
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              ورود
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
            >
              ثبت نام
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
