
<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import store from "@/state/store";
var state = store._modules.root._children.auth.state;
export default {
  page: {
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      poster_awareds: [],
      unvarsecites: [],
      Users: [],
      countries: [],
      page: 1,
      limit: 20,
      tot_pages: 0,
      searchUsers: null,
      UsersSearchMode: false,
      searchModel: "",
      state: state,
    };
  },
  methods: {
    addUsers() {
      console.log("**********####", this.state);
      var data = {
        title: "popups.addUsers",
        inputs: [
          {
            model: "country_id",
            type: "select",
            options: (() => {
              return this.countries.map((data) => {
                return { value: data.id, label: data.name };
              });
            })(),
            label: "country",
          },
          {
            "model": "name",
            "type": "text",
            "label": "name"
          },
          {
            "model": "email",
            "type": "text",
            "label": "email"
          },
          {
            "model": "pass",
            "type": "password",
            "label": "pass"
          },
          {
            "model": "tel",
            "type": "text",
            "label": "tel"
          },


        ],
        buttons: [
          {
            text: "popups.add",
            closer: true,
            color: "primary",
            handler: (obj) => {
              obj.type = "poster"
              this.http.post("users", obj).then(() => {
                this.get(this.page);
              });
            },
          },
          {
            text: "popups.cancel",
            closer: true,
            color: "danger",
            handler: () => {
              console.log("Like Clicked");
            },
          },
        ],
      };
      this.popup.modal(data);
    },
    editUsers(app) {
      var data = {
        title: "popups.users",
        inputs: [
          {
            "model": "country_id",
            "type": "text",
            "label": "country_id",
            "value": app.country_id
          },
          {
            "model": "name",
            "type": "text",
            "label": "name",
            "value": app.name
          },
          {
            "model": "email",
            "type": "text",
            "label": "email",
            "value": app.email
          },
          {
            "model": "pass",
            "type": "password",
            "label": "pass",
            "value": app.pass
          },
          {
            "model": "tel",
            "type": "text",
            "label": "tel",
            "value": app.tel
          },
          {
            "model": "type",
            "type": "text",
            "label": "type",
            "value": app.type
          },

        ],
        buttons: [
          {
            text: "popups.edit",
            closer: true,
            color: "primary",
            handler: (obj) => {
              this.http.put("users", app.id, obj).then(() => {
                this.get(this.page);
              });
            },
          },
          {
            text: "popups.cancel",
            closer: true,
            color: "danger",
            handler: () => {
              console.log("Like Clicked");
            },
          },
        ],
      };
      this.popup.modal(data);
    },
    updateUsers(app) {
      var data = {
        title: "popups.editfile",
        inputs: [
          {
            model: "country_id",
            type: "select",
            options: (() => {
              return this.countries.map((data) => {
                return { value: data.id, label: data.name };
              });
            })(),
            label: "country",
          },
          {
            "model": "name",
            "type": "text",
            "label": "name"
          },
          {
            "model": "email",
            "type": "text",
            "label": "email"
          },
          {
            "model": "pass",
            "type": "password",
            "label": "pass"
          },
          {
            "model": "tel",
            "type": "text",
            "label": "tel"
          },


        ],
        buttons: [
          {
            text: "popups.edit",
            closer: true,
            color: "primary",
            handler: (obj) => {
              obj.emp_id = app.id;
              this.http.do("users", obj).then(() => {
                this.get(this.page);
              });
            },
          },
          {
            text: "popups.cancel",
            closer: true,
            color: "danger",
            handler: () => {
              console.log("Like Clicked");
            },
          },
        ],
      };
      this.popup.modal(data);
    },
    search() {
      this.UsersSearchMode = true;
      this.tot_pages = 0;
      this.http
        .post("users/search", {
          search: this.searchModel,
          limit: this.limit,
          page: this.page,
          col: "name",
        })
        .then((res) => {
          this.Users = res.data;
          console.log("######## files", this.Users);
        });
    },
    cancelappsearchMode() {
      this.searchModel = "";
      this.UsersSearchMode = false;
      this.get(this.page);
    },

    getUsers() {
      this.http.get("users").then((res) => {
        this.Users = res.data;
      });
    },
    deleteUsers(app) {
      var data = {
        title: "popups.deletefile",
        msg: "popups.delmessage",
      };
      this.popup.confirm(data).then((resp) => {
        if (resp) {
          console.log("###");
          this.http.delete("users", app.id).then(() => {
            console.log("############################3");
            this.get(this.page);
          });
        }
      });
    },

    get(page) {
      console.log(page);
      this.http
        .post("users/paginate", {
          limit: this.limit,
          page: page,
          type: "poster"
        })
        .then((res) => {
          this.page = page;
          this.tot_pages = Math.ceil(res.tot / this.limit);
          this.Users = res.data;
          this.http
            .get("countries",)
            .then((res) => {
              this.countries = res.data

            });




        });
    },
  },
  created() {
    this.get(1);
  },
};
</script>

<template>
  <Layout>
    <PageHeader :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" :title="$t('menu.menuitems.users.text')" />
    <div class="row mb-3">
      <div class="col-6 ">
        <div class="search-box chat-search-box w-50">
          <div class="position-relative">
            <input @keyup="search()" type="text" class="form-control fa-lg text-light"
              :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" :placeholder="$t('popups.search')" v-model="searchModel"
              style="background-color: #2a3042 !important" />
            <i class="bx bx-search-alt search-icon text-light"></i>
          </div>
        </div>
      </div>
      
    </div>

    <table :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="table">
      <thead>
        <tr class="text-light text-center" style="background-color: #2a3042 !important">
          <th scope='col'>{{ $t('users.id') }}
          </th>
          <th scope='col'>{{ $t('users.country_id') }}
          </th>
          <th scope='col'>{{ $t('users.name') }}
          </th>
          <th scope='col'>{{ $t('users.email') }}
          </th>
          <th scope='col'>{{ $t('users.pass') }}
          </th>
          <th scope='col'>{{ $t('users.tel') }}
          </th>
          <th scope='col'>{{ $t('users.type') }}
          </th>
          <th scope='col'>{{ $t('users.created') }}
          </th>
          <th scope='col'>{{ $t('users.updated') }}
          </th>
          <th scope='col'>{{ $t('users.operations') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(app, index) in Users" :key="app" class="text-center">
          <td>{{ index + 1 }}</td>
          <td>{{ app?.country?.name }}</td>
          <td>{{ app.name }}</td>
          <td>{{ app.email }}</td>
          <td>{{ app.pass }}</td>
          <td>{{ app.tel }}</td>
          <td>{{ app.type }}</td>
          <td>{{ app.created.split('T')[0] }}</td>
          <td>{{ app.updated.split('T')[0] }}</td>

          <td class="d-flex">
            <a class="btn btn-primary mx-1" @click="editUsers(app)" href="javascript: void(0);" role="button">{{
              $t("popups.edit") }}</a>
            <a class="btn profile-edit-btn" href="javascript: void(0);" role="button" @click="deleteUsers(app)">{{
              $t("popups.delete") }}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- end  table -->
    <!-- Button trigger modal -->

    <div v-if="tot_pages == 20">
      <!--   Apps  paginate     -->
      <ul class="paginate paginate-rounded justify-content-center mb-2">
        <li class="page-item" :class="{ disabled: page == 1 }">
          <a class="page-link" href="javascript: void(0);" @click="get(page - 1)" aria-label="Previous">
            <i class="mdi mdi-chevron-left"></i>
          </a>
        </li>
        <li class="page-item" :class="{ active: p == page }" v-for="p in tot_pages" :key="p">
          <a class="page-link" href="javascript: void(0);" @click="get(p)">{{
            p
          }}</a>
        </li>

        <li class="page-item" :class="{ disabled: page == total_pages }">
          <a class="page-link" href="javascript: void(0);" @click="get(page + 1)" aria-label="Next">
            <i class="mdi mdi-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
    <!--end-->
  </Layout>
</template>

<style scoped>
.btn-close {
  position: relative;
  right: 317px;
  top: 6px;
  font-size: 15px;
}
</style>




