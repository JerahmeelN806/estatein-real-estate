import request from "./client";

export async function getProperties(filters = {}) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, value);
    }
  });

  const query = params.toString();
  const data = await request(`/properties${query ? `?${query}` : ""}`);

  return Array.isArray(data) ? data : data.properties || [];
}
