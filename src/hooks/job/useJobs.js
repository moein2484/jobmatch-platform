"use client";

import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/services/jobs";

export function useJobs(filters) {
  return useQuery({
    queryKey: ["Jobs", filters],
    queryFn: () => getJobs(filters),
  });
}
