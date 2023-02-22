import { BASE_URL } from "../config/config";

export async function getAllUsers() {
  const response = await fetch(`${BASE_URL}/api/user`);
  return await response.json();
}

export async function createUser(data) {
  const response = await fetch(`${BASE_URL}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
