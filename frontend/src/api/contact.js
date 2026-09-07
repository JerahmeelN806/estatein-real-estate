import request from "./client";

export function submitContactMessage(data) {
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
