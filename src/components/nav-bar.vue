<script>
  // import axios from "axios";

  import { authComputed } from "@/state/helpers";

  /**
   * Nav-bar Component
   */
  export default {
    name: "nav-bar",
    data() {
      return {
        lang: "",
        text: null,
        flag: null,
        value: null,
        sideNavHide: false,
        languages: [
          {
            flag: require("@/assets/images/flags/us.jpg"),
            language: "en",
            title: "English",
          },
          {
            flag: require("@/assets/images/flags/arabic.png"),
            language: "ar",
            title: "عربي",
          },
        ],
      };
    },
    created() {
      if (!localStorage.lang) return (this.lang = "ar");
      this.lang = "en";
    },
    methods: {
      toggleMenu() {
        this.$parent.toggleMenu();
        // var main_content = document.querySelector(".main-content")
        // var side_menu = document.getElementById("sidebar-menu")
        if (this.sideNavHide == false && this.$i18n.locale == "ar") {
          // main_content.style.marginRight = "70px"
          this.sideNavHide = true;
          console.log(this.sideNavHide);
          // side_menu.style.position = "relative !important"
          // side_menu.style.left = "38px"
        } else if (this.sideNavHide == true && this.$i18n.locale == "ar") {
          console.log(this.$i18n.locale);
          // main_content.style.marginRight = "250px"
          this.sideNavHide = false;
        } else if (this.sideNavHide == false && this.$i18n.locale == "en") {
          // main_content.style.marginLeft = "70px"
          this.sideNavHide = true;
          console.log(this.sideNavHide);
        } else if (this.sideNavHide == true && this.$i18n.locale == "en") {
          console.log(this.$i18n.locale);
          // main_content.style.marginLeft = "250px"
          this.sideNavHide = false;
        }
      },
      toggleRightSidebar() {
        this.$parent.toggleRightSidebar();
      },
      initFullScreen() {
        document.body.classList.toggle("fullscreen-enable");
        if (
          !document.fullscreenElement &&
          /* alternative standard method */ !document.mozFullScreenElement &&
          !document.webkitFullscreenElement
        ) {
          // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      },

      // logoutUser() {
      //   // eslint-disable-next-line no-unused-vars
      //   axios.get("http://127.0.0.1:8000/api/logout").then((res) => {
      //     this.$router.push({
      //       name: "default",
      //     });
      //   });
      // },
    },
    computed: {
      ...authComputed,
    },
  };
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header" style="padding: 0">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box"></div>

        <button
          id="vertical-menu-btn"
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <!-- App Search-->
      </div>

      <div
        class="d-flex"
        style="
          margin-inline-end: 1rem;
          justify-content: space-between;
          align-items: center;
        "
      >
        <select
          v-model="$i18n.locale"
          style="color: #2a3042"
          class="lang-dropdown border-0 m-0"
        >
          <option
            @click="changeLanguage(locale)"
            v-for="(locale, i) in languages"
            :key="`locale-${i}`"
            :value="locale.language"
          >
            {{
              locale.title ? locale.title : lang == "en" ? "English" : "Arabic"
            }}
          </option>
        </select>
        <div class="d-none d-lg-inline-block ms-1">
          <button
            type="button"
            class="btn header-item noti-icon"
            @click="logout"
          >
            <i
              :class="$i18n.locale == 'en' ? 'bx-log-in' : 'bx-log-out'"
              class="bx text-danger fa-2xl"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { watch, ref, onMounted } from "vue";
  import { useI18n } from "vue-i18n";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const store = useStore();

  onMounted(() => {
    companies.value = store.state.authfack.companies;
    selected_company.value = store.state.authfack.selected_company;
    selected_company.value = filterComps()[0];
  });

  const i18n = useI18n();
  watch(
    () => i18n.locale.value,
    (newVal) => {
      localStorage.lang = newVal;
      if (localStorage.lang == "ar") {
        document.querySelector("html").setAttribute("dir", "rtl");
        document.querySelector("html").setAttribute("lang", "ar");
        // document.body.classList.add("ar")
      } else {
        document.querySelector("html").setAttribute("dir", "ltr");
        document.querySelector("html").setAttribute("lang", "en");
        // document.body.classList.remove("ar")
      }
    }
  );

  const logout = () => {
    localStorage.removeItem("kassala_farm_cms_token");
    router.replace("/login");
  };

  const companies = ref([]);

  const filterComps = () => {
    return companies.value.filter((c) => {
      if (
        store?.state?.authfack?.permissions[c] &&
        Object.keys(store?.state?.authfack?.permissions[c]).length > 0
      )
        return c;
    });
  };
  const selected_company = ref("");

  watch(
    () => selected_company.value,
    (newVal) => {
      store.commit("authfack/setSelectedCompany", newVal);
      console.log({
        selected_company: store.state.authfack.selected_company,
      });
    }
  );
</script>
