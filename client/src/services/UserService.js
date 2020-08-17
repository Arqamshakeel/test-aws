import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }

  UserLogin = (data) =>
    new Promise((resolve, reject) => {
      this.post("users/login", data)
        .then((res) => {
          resolve(res.token);
          localStorage.setItem("token", res.token);
        })
        .catch((err) => {
          //console.log("in try of user login");
          reject(err.response.data);
        });
    });

  isLoggedin = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      return true;
    } else {
      return false;
    }
  };
  getloggedinuser = () => {
    try {
      const jwt = localStorage.getItem("token");
      // console.log("getLoggedinData");
      // console.log(jwtDecode(jwt));
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedin()) {
      if (this.getloggedinuser().role == "admin") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  UserReg = (data) => this.post("users/register", data);
}

let userService = new UserService();
export default userService;
