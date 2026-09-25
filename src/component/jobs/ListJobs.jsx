"use client";
import React from "react";
import JobCard from "./JobCard";
import { useJobs } from "@/hooks/job/useJobs";

export default function ListJobs() {
  const { data: jobs } = useJobs();
  return (
    <div className="space-y-4">
      {jobs?.jobs?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
