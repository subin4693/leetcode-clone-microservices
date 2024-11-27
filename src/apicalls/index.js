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
    return error.response.data;
  }
};

export const signin = async (data) => {
  try {
    const res = await axios.post(BASE_URL + "/users/signin", data);
    setToken(res?.data?.data?.token);
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const createTodo = async (data) => {
  try {
    const token = getToken();
    const res = await axios.post(BASE_URL + "/todos", data, {
      headers: {
        token: token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const token = getToken();
    const res = await axios.delete(`${BASE_URL}/todos/${todoId}`, {
      headers: {
        token,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = async (todoId, data) => {
  try {
    const token = getToken();
    const res = await axios.put(`${BASE_URL}/todos/${todoId}`, data, {
      headers: {
        token,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const completedTodo = async (todoId) => {
  try {
    const token = getToken();
    const res = await axios.patch(
      `${BASE_URL}/todos/${todoId}`,
      {},
      {
        headers: {
          token: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTodos = async () => {
  try {
    const token = getToken();
    const res = await axios.get(BASE_URL + "/todos", {
      headers: {
        token: token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
