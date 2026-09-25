"use client";

import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/services/jobs";

export function useJobs(search) {
  return useQuery({
    queryKey: ["Jobs", search],
    queryFn: ({ queryKey }) => {
      const search = queryKey[1];

      return getJobs({ search });
    },
  });
}
