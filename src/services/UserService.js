import { BASE_URL } from "../config/config";

export async function getAllUsers() {
  console.log("base URL ",BASE_URL)
  const response = await fetch(`${BASE_URL}/api/user`);
  console.log("response",response)
  return await response.json();
}

export async function createUser(data) {
  console.log("dadadada",data)
  const response = await fetch(`${BASE_URL}/api/user`, {
 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( data ),
  });
console.log("response",response.json())

  return await response.json();
}
