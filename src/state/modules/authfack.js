import { userService } from "../../helpers/authservice/user.service";
// import router from "../../router/index";
import axios from "../../services/axios";

const user = localStorage["user"] && JSON.parse(localStorage["user"]);
export const state = {
  imgUrl: "http://localhost:3030/",
  status: { loggeduser: user && true },
  user,
  permissions: null,
  selected_company: "",
  companies: [],
};

export const getters = {
  getPermittedCompanies(state) {
    return Object.keys(state?.permissions);
  },
};

export const actions = {
  // Logs in the user.
  // eslint-disable-next-line no-unused-vars
  async login(_, { username, pass }) {
    const res = await axios.post("users/login", { username, pass });
    if (res.status) {
      localStorage["kassala_farm_cms_token)"] = res.data?.token;
      return true;
    } else return false;
  },
  // Logout the user
  logout({ commit }) {
    userService.logout();
    commit("logout");
  },
  // register the user
  // registeruser({ dispatch, commit }, user) {
  //   commit("registerRequest", user);
  //   userService.register(user).then(
  //     (user) => {
  //       commit("registerSuccess", user);
  //       dispatch("notification/success", "Registration successful", {
  //         root: true,
  //       });
  //       router.push("/login");
  //     },
  //     (error) => {
  //       commit("registerFailure", error);
  //       dispatch("notification/error", error, { root: true });
  //     }
  //   );
  // },
};

export const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggeduser: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state) {
    state.status = { registering: true };
  },
  registerSuccess(state) {
    state.status = {};
  },
  registerFailure(state) {
    state.status = {};
  },
  setSelectedCompany(state, payload) {
    state.selected_company = payload;
    console.log({ selected_company: state.selected_company });
  },
  setCompanies(state, payload) {
    state.companies = payload;
  },
  setPermissionsFromLocalStorage(state) {
    state.permissions = JSON.parse(localStorage["permissions"]);
    console.log({ permissions: state.permissions });
  },
  setPermissionsToLocalStorage(_, payload) {
    localStorage["permissions"] = JSON.stringify(payload);
  },
};
