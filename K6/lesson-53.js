import http from "k6/http";
import { check } from "k6";
 
const loginAPI = "https://test-api.k6.io/auth/token/login/"; // post
const createCro = "https://test-api.k6.io/my/crocodiles/"; // post
 
const credentails = {
  username: "art_123",
  password: "art_123",
};
 
const createCrocodilesBody = {
  name: `name_${Date.now()}`,
  sex: "M",
  date_of_birth: "2023-04-04",
};
 
export function setup() {
  const res = http.post(loginAPI, JSON.stringify(credentails), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const token = res.json().access;
  return token;
}
 
export default function (token) {
  const res = http.post(createCro, JSON.stringify(createCrocodilesBody), {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
 
  check(res, {
    "status is correct": (r) => r.status === 201,
  });
  const a = res.json();
  check(a, {
    "name is correct": (r) => r.name == createCrocodilesBody.name,
  });
}