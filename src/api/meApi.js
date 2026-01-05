import api from "./axios";

export async function getMe() {
  const res = await api.get("/me.php");
  return res.data;
}
