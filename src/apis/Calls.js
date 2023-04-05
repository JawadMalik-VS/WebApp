import axios from "axios";

//start call
export async function StartCall(payload) {
  const result = await axios.post(
    "http://localhost:4500/api/v1/admin/start",
    {
      ...payload,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
}
//exit call
export async function ExitCall(payload) {
  const result = await axios.post(
    "http://localhost:4500/api/v1/admin/exit-call",
    {
      ...payload,
    }
  );
  return result;
}
