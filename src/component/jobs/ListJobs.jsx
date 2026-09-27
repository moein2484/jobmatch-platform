"use client";
import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useJobs } from "@/hooks/job/useJobs";
import { useGlobalContext } from "../context/GlobalContext";
import JobCardSkeleton from "./JobCardSkeleton";

export default function ListJobs() {
  const { jobs, setJobs, filters } = useGlobalContext();
  const { data, isLoading } = useJobs(filters);
  useEffect(() => {
    if (data?.jobs) {
      setJobs(data?.jobs);
    }
  }, [jobs, data]);
  console.log({data})
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-slate-900">همه مشاغل</h2>

        <p className="mt-1 text-xs text-slate-500">
          {jobs.length} فرصت شغلی پیدا شد
        </p>
      </div>
      <div className="space-y-4">
        {isLoading
          ? [1, 2, 3, 4, 5]?.map(() => <JobCardSkeleton />)
          : jobs?.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  );
}
