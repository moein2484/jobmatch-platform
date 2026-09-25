export async function getJobs() {
  const response = await fetch("/api/jobs", {
    method: "GET",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در دریافت اطلاعات کاربر");
  }

  return result;
}
