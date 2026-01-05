import api from "./axios";

export async function loginApi({ username, password }) {
  try {
    const res = await api.post("/login.php", {
      username,
      password,
    });

    return res.data; // axios auto parses JSON
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.error);
    }
    throw new Error("Network error");
  }
}
