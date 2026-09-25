export async function getJobs({ search }) {
  let urlEndPoint;
  if (search) {
    urlEndPoint = `/api/jobs?q=${search}`;
  } else {
    urlEndPoint = `/api/jobs`;
  }
  const response = await fetch(urlEndPoint, {
    method: "GET",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در دریافت اطلاعات کاربر");
  }

  return result;
}
