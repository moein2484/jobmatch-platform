"use client";

import { useMutation } from "@tanstack/react-query";
import { ComplateProfile } from "@/services/profile";

export function useComplateProfile() {
  return useMutation({
    mutationFn: ComplateProfile,
  });
}
