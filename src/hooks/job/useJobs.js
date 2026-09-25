"use client";

import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/services/jobs";

export function useJobs() {
  return useQuery({
    queryKey: ["Jobs"],
    queryFn: getJobs,
  });
}
