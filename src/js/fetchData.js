import { showLoder } from "./looder.js";
export const getData = async (url1) => {
  const res = await fetch(url1);
  showLoder(true);
  if (!res.ok) {
    showLoder(false);
    throw new Error("hatolik");
  }
  const data = await res.json();
  showLoder(false);
  return data;
};
