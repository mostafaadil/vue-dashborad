// import { getFirebaseBackend } from "../../authUtils.js";

export const state = {
  currentUser: JSON.parse(localStorage.getItem("userData")),
  token: null,
  baseUrl: "http://localhost:5000/api/",
  baseMediaUrl: "http://localhost:5000/api/",
  autoLogin: false,
  user_role: {
    administrator: false,
    cahshier: false,
    accountant: false,
    "Human resources manager": false,
    "Customer Service Agent": false,
    "Human resources officer": false,
    "Financial Manager": false,
  },
};

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue;
    console.log("Setting", newValue);
    localStorage.setItem("userData", JSON.stringify(newValue));
    console.log("Set");
  },
  autoLoginToggle: (state) => {
    state.autoLogin = true;
  },
};

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser;
  },
};

// export const actions = {
//   // This is automatically run in `src/state/store.js` when the app
//   // starts, along with any other actions named `init` in other modules.
//   // eslint-disable-next-line no-unused-vars
//   init({ state, dispatch }) {
//     dispatch("validate");
//   },

//   // Logs in the current user.
//   logIn({ commit, dispatch, getters }, { email, password } = {}) {
//     if (getters.loggedIn) return dispatch("validate");

//     return getFirebaseBackend()
//       .loginUser(email, password)
//       .then((response) => {
//         const user = response;
//         console.log(user);
//         commit("SET_CURRENT_USER", user);
//         return user;
//       });
//   },

//   // Logs out the current user.
//   logOut({ commit }) {
//     // eslint-disable-next-line no-unused-vars
//     commit("SET_CURRENT_USER", null);
//     return new Promise((resolve, reject) => {
//       // eslint-disable-next-line no-unused-vars
//       localStorage.removeItem("userData");
//       resolve(true);
//       console.log(reject);
//     });
//   },

//   // register the user
//   register({ commit, dispatch, getters }, { username, email, password } = {}) {
//     if (getters.loggedIn) return dispatch("validate");

//     return getFirebaseBackend()
//       .registerUser(username, email, password)
//       .then((response) => {
//         const user = response;
//         commit("SET_CURRENT_USER", user);
//         return user;
//       });
//   },

//   // register the user
//   // eslint-disable-next-line no-unused-vars
//   resetPassword({ commit, dispatch, getters }, { email } = {}) {
//     if (getters.loggedIn) return dispatch("validate");

//     return getFirebaseBackend()
//       .forgetPassword(email)
//       .then((response) => {
//         const message = response.data;
//         return message;
//       });
//   },

//   // Validates the current user's token and refreshes it
//   // with new data from the API.
//   // eslint-disable-next-line no-unused-vars
//   validate({ commit, state }) {
//     console.log(commit, state);
//     return new Promise(function (resolve) {
//       // do login using axios or http wrapper
//       // store user data
//       // store token
//       resolve(false);
//     });
//   },
// };

// ===
// Private helpers
// ===
