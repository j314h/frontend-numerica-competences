import axios from "axios";

//send cookie default
axios.defaults.withCredentials = true;

//interceptor request serve
axios.interceptors.request.use((req) => {
  console.log("Interceptor req", req);
  //if cookie in headers , not send cookie for navigator
  if (req.headers.Authorization) {
    req.withCredentials = false;
  }
  return req;
});

//interceptor response server
axios.interceptors.response.use((res) => {
  console.log("Interceptor res", res);
  return res;
});

export const headers = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
