"use client";

import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "@/services/profile";

export function useUpdateProfile() {
  return useMutation({
    mutationFn: updateProfile,
  });
}
