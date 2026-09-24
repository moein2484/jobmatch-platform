export async function ComplateProfile(data) {
  const res = await fetch("api/profile/complate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) {
    throw new Error(result.message || "خطا در ثبت نام");
  }
  return result;
}
