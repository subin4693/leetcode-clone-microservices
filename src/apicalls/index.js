const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const signup = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/users/signup", data);
    setToken(res?.data?.data?.token);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signin = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/users/signin", data);
    setToken(res?.data?.data?.token);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createProblem = async (data) => {
  try {
    const token = getToken();
    const res = await axios.post(BASE_URL + "/problems", data, {
      headers: {
        token: token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProblem = async (problemId) => {
  try {
    const token = getToken();
    const res = await axios.get(`${BASE_URL}/problems/${problemId}`, {
      headers: {
        token,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllProblems = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/problems`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const submitProblem = async (problemId, code) => {
  try {
    const token = getToken();
    const res = await axios.post(
      `${BASE_URL}/problems/${problemId}`,
      { code },
      {
        headers: {
          token: token,
        },
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
