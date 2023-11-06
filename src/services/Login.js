import store from "../state/store";
import router from "@/router";
export default {
  install(Vue) {
    var self = Vue.config.globalProperties;
    Vue.config.globalProperties.login = {
      login(tel, pass) {
        window.$loading.show();
        /* pass = self.$e.decrypt(  this.pass);*/
        self.http.post("users/login", { name: tel, pass: pass }).then((resp) => {
          window.$loading.hide();
          if (resp) {
            console.log("name :", tel);
            resp.data.pass = self.$e.encrypt(pass);
            localStorage.currentUser = JSON.stringify(resp.data);
            store.commit("addUserData", resp.data);
            store.commit("autoLoginToggle");
            console.log(" after logging : ", store.state.currentUser);

            // eslint-disable-next-line no-undef
            router.push("/");
            console.log(" x auth : ", resp);
          }
        });
      },
      autoLogin(user) {
        if (!store.state.autoLogin) {
          user.pass = self.$e.decrypt(user.pass);
          self.http
            .post("users/login", { name: user.name, pass: user.pass })
            .then((res) => {
              if (!res) {
                router.push("/login");
              }
              console.log("base url :", store.state.baseUrl);
              console.log("res body :", res);
              store.commit("addUserData", res.data);

              console.log("state currentUser : --> ", store.state.currentUser);

              console.log("token :", store.state.token);

              console.log(user);
              console.log(" auto login");
            });
        } else {
          console.log("no auto login");
        }
      },
    };
  },
};
