<template>
  <div>

    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">

      <div class="login-wrapper">
        <div class="container">
          <img class="img-fluid logo-dark mb-2" src="../../../assets/admin-img/logo-01.png" alt="Logo">
          <div class="loginbox">

            <div class="login-right">
              <div class="login-right-wrap">
                <h1>Welcome Back</h1>
                <p class="account-subtitle">Don't miss your next opportunity. Sign in to stay updated on your professional
                  world.</p>

                <form class="login" @submit.prevent="tryToLogIn()">
                  <div class="form-group">
                    <input v-model="user.name" type="text" class="form-control floating mt-2" />

                    <div class="emailshow text-danger" id="email"></div>
                  </div>
                  <div class="form-group">
                    <div class="pass-group">
                      <input v-model="user.pass" type="password" class="form-control floating pass-input mt-2" /><span
                        class="fa fa-eye-slash toggle-password pt-4"></span>
                      <div class="emailshow text-danger" id="password"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="custom_check">
                      <input type="checkbox" name="rem_password">
                      <span class="checkmark"></span> Remember password
                    </label>
                  </div>
                  <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                  <div class="login-or">
                    <p>Or login with</p>
                  </div>
                  <!-- Social Login -->
                  <div class="row form-row social-login">
                    <div class="col-lg-4">
                      <a href="javascript:void(0);" class="btn btn-twitter btn-block mb-1"> Twitter</a>
                    </div>
                    <div class="col-lg-4">
                      <a href="javascript:void(0);" class="btn btn-facebook btn-block mb-1"> Facebook</a>
                    </div>
                    <div class="col-lg-4">
                      <a href="javascript:void(0);" class="btn btn-google btn-block mb-1"> Google</a>
                    </div>
                  </div>
                  <!-- /Social Login -->
                  <div class="row form-row login-foot">
                    <div class="col-lg-6 login-forgot">
                      <router-link class="forgot-link" to="/admin/forgot-password">Forgot Password ?</router-link>
                    </div>
                    <div class="col-lg-6 dont-have">New to Kofejob? <router-link to="/admin/register">Click
                        here</router-link></div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>

export default {
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
},
  methods: {
    tryToLogIn() {
      this.submitted = true;
      console.log("working")
      console.log(this.user);
      this.http
        .post("users/login", { user: this.user, lang: "en" })
        .then((res) => {
          console.log(res.status);
          if (res.status == true) {
            localStorage.setItem("currentUser", JSON.stringify(res.data))
            console.log(res.data.id);
            if (res.data.type == "admin") {
              this.$router.push("/admin/index")
            }
            if (res.data.type == "poster") {

              this.$router.push("/dashboard")
            }

          }
        });
      // }
    },
  },
  data() {
    return ({
      hasReloaded: false, // Flag to track reload status,
      user: {},
    })
  },
}
</script>
    