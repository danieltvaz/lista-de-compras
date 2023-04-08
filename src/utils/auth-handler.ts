import { deleteData, getData, saveData } from "./local-storage-handler";

import axiosInstance from "../services/axios";

export default function authHandler() {
  function saveAuthData(payload: { name: string; email: string; jwt: string }) {
    saveData("user", payload);
  }

  async function login(email: string, password: string, callback: (...args: any) => any | void = () => {}) {
    try {
      const request = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });

      const data = await request.data;

      if (request.status !== 200) {
        throw new Error(JSON.stringify(data));
      } else {
        saveAuthData(data);
        callback();
      }
    } catch (e: any) {
      alert("Email ou senha incorreto");
      throw new Error(e);
    }
  }

  async function signup(
    email: string,
    password: string,
    name: string,
    callback: (...args: any) => any | void = () => {}
  ) {
    try {
      const request = await axiosInstance.post("/auth/signup", {
        email,
        password,
        name,
      });

      const data = await request.data;

      if (request.status !== 200) {
        throw new Error(JSON.stringify(data));
      } else {
        callback();
      }
    } catch (e: any) {
      alert(e.response.data.message);
      throw new Error(e);
    }
  }

  function logout() {
    deleteData("user");
  }

  function getJwt() {
    const userToken = getData("user")?.jwt as string | null;
    if (userToken) {
      return userToken;
    }
    return null;
  }

  function getUserData() {
    const userData = getData("user") as { email: string; jwt: string; name: string } | undefined;
    return userData;
  }

  function isAutenticated() {
    const jwt = getJwt();

    if (jwt) return true;
    return false;
  }

  return { login, logout, getJwt, isAutenticated, getUserData, signup };
}
