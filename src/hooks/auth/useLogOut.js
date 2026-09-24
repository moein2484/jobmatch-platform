"use client";

import { useMutation } from "@tanstack/react-query";
import { loginUser, logOut } from "@/services/auth";

export function useLogOut() {
  return useMutation({
    mutationFn: logOut,
  });
}
