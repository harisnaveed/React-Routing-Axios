import { redirect } from "react-router-dom";
import api from "../api/axios";

export default function RequireAuth(allowedRoles) {
  return async () => {
    try {
      const res = await api.get("/me.php");
      const user = res.data.user;

      if (allowedRoles && !allowedRoles.includes(user.role)) {
        throw redirect("/unauthorized");
      }

      return user;
    } catch (err) {
      if (err.response?.status === 401) {
        throw redirect("/login");
      }

      throw redirect("/login");
    }
  };
}
