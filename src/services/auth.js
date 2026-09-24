export async function loginUser(data) {
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در ورود");
  }

  return result;
}

export async function registerUser(data) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در ثبت نام");
  }

  return result;
}
export async function logOut() {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در خروج از حساب کاربری");
  }

  return result;
}
export async function getMe() {
  const response = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "خطا در دریافت اطلاعات کاربر");
  }

  return result;
}
