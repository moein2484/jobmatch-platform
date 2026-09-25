export async function getJobs({
  search,
  location,
  jobType,
  experience,
}) {
  const params = new URLSearchParams();

  if (search?.trim()) {
    params.set("q", search.trim());
  }

  if (location?.trim()) {
    params.set("location", location.trim());
  }

  if (jobType) {
    params.set("jobType", jobType);
  }

  if (experience !== undefined && experience !== "") {
    params.set("experience", experience);
  }

  const queryString = params.toString();

  const url = queryString
    ? `/api/jobs?${queryString}`
    : "/api/jobs";

  const response = await fetch(url, {
    method: "GET",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در دریافت لیست مشاغل");
  }

  return result;
}