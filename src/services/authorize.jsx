import axios from "axios";

//store token ==> session storage

export const authenicate = (response, next) => {
  if (window !== undefined) {
    //save data to session storage
    localStorage.setItem("tokenbo", response.data.data);
    console.log("sessionStroage was stored");
    // getUserDataApi(response.data);
  }
  setTimeout(() => {
    next();
  }, 500);
};

//get user data after login

export const getUserDataApi = (tokenbo) => {
  console.log("called getuserDataAPI");
  if (window !== undefined) {
    if (localStorage.getItem("tokenbo")) {
      if (tokenbo) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${tokenbo}`;

        axios.get(`https://api.adoppix.com/api/User/user-info`).then((res) => {
          console.log(res.data);
          localStorage.setItem("userbo", JSON.stringify(res.data.data));
          console.log("saved user data");
        });
      } else {
        axios.defaults.headers.common["Authorization"] = null;
      }
    } else {
      return false;
    }
  }
};

//logout
export const logout = (next) => {
  if (window !== undefined) {
    localStorage.removeItem("tokenbo");
    localStorage.removeItem("userbo");
  }
  next();
};

//bring data token

export const getToken = () => {
  if (window !== undefined) {
    if (localStorage.getItem("tokenbo")) {
      console.log(localStorage.getItem("tokenbo"))
      return localStorage.getItem("tokenbo");
    } else {
      return false;
    }
  }
};

//bring data user

export const getUser = () => {
  if (window !== undefined) {
    if (localStorage.getItem("userbo")) {
      console.log(localStorage.getItem("userbo"));
      return JSON.parse(localStorage.getItem("userbo"));
    } else {
      return false;
    }
  }
};
