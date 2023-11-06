
<script>
import store from "../../../../state/store";
var state = store._modules.root._children.auth.state;
export default {

 components: {
   
  },
  data() {
    return {
      recored_studants: [],
      Recordes: [],
      page: 1,
      limit: 20,
      tot_pages: 0,
      searchRecordes: null,
      RecordesSearchMode: false,
      searchModel: "",
      state: state,
    };
  },
  methods: {
    changeStatus(app) {
    console.log("Iam workig")
    var status = 0
    if (app.status == 1) {
      status = 0
    }
    if (app.status == 0) {
      status = 1
    }
    this.http.post("recordes/update-record", { id: app.id, status: status }).then((res) => {
      if (res) {
        this.get(1)
      }
    })
  },
    addRecordes() {
      console.log("**********####", this.state);
      var data = {
        title: "popups.addRecordes",
        inputs: [
          {
            "model": "name",
            "type": "text",
            "label": "name"
          },
          {
            "model": "last_name",
            "type": "text",
            "label": "last_name"
          },
          {
            "model": "title",
            "type": "text",
            "label": "title"
          },
          {
            "model": "pages",
            "type": "text",
            "label": "pages"
          },
          {
            "model": "advisors",
            "type": "text",
            "label": "advisors"
          },

        ],
        buttons: [
          {
            text: "popups.add",
            closer: true,
            color: "primary",
            handler: (obj) => {
              obj.user_id = 1
              this.http.post("recordes", obj).then(() => {
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
    editRecordes(app) {
      var data = {
        title: "popups.recordes",
        inputs: [
          {
            "model": "name",
            "type": "text",
            "label": "name",
            "value": app.name
          },
          {
            "model": "last_name",
            "type": "text",
            "label": "last_name",
            "value": app.last_name
          },
          {
            "model": "title",
            "type": "text",
            "label": "title",
            "value": app.title
          },
          {
            "model": "pages",
            "type": "text",
            "label": "pages",
            "value": app.pages
          },
          {
            "model": "advisors",
            "type": "text",
            "label": "advisors",
            "value": app.advisors
          },
          {
            "model": "status",
            "type": "text",
            "label": "status",
            "value": app.status
          },

        ],
        buttons: [
          {
            text: "popups.edit",
            closer: true,
            color: "primary",
            handler: (obj) => {
              this.http.put("recordes", app.id, obj).then(() => {
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
    updateRecordes(app) {
      var data = {
        title: "popups.editfile",
        inputs: [
          {
            "model": "name",
            "type": "text",
            "label": "name"
          },
          {
            "model": "last_name",
            "type": "text",
            "label": "last_name"
          },
          {
            "model": "title",
            "type": "text",
            "label": "title"
          },
          {
            "model": "pages",
            "type": "text",
            "label": "pages"
          },
          {
            "model": "advisors",
            "type": "text",
            "label": "advisors"
          },

        ],
        buttons: [
          {
            text: "popups.edit",
            closer: true,
            color: "primary",
            handler: (obj) => {
              obj.emp_id = app.id;
              this.http.do("recordes", obj).then(() => {
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
      this.RecordesSearchMode = true;
      this.tot_pages = 0;
      this.http
        .post("recordes/search", {
          search: this.searchModel,
          limit: this.limit,
          page: this.page,
          col: "name",
        })
        .then((res) => {
          this.Recordes = res.data;
          console.log("######## files", this.Recordes);
        });
    },
    cancelappsearchMode() {
      this.searchModel = "";
      this.RecordesSearchMode = false;
      this.get(this.page);
    },

    getRecordes() {
      this.http.get("recordes").then((res) => {
        this.Recordes = res.data;
      });
    },
    deleteRecordes(app) {
      var data = {
        title: "popups.deletefile",
        msg: "popups.delmessage",
      };
      this.popup.confirm(data).then((resp) => {
        if (resp) {
          console.log("###");
          this.http.delete("recordes", app.id).then(() => {
            console.log("############################3");
            this.get(this.page);
          });
        }
      });
    },

    get(page) {
      console.log(page);
      this.http
        .post("recordes/paginate", {
          limit: this.limit,
          page: page,
        })
        .then((res) => {
          this.page = page;
          this.tot_pages = Math.ceil(res.tot / this.limit);
          this.Recordes = res.data;
          res.data.forEach((item) => {
            this.recored_studants.push(item.recored_studants)
          })

          res.data.forEach((item) => {
            this.recored_studants.push(item.recored_studants)
          })


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
    <PageHeader :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" :title="$t('menu.menuitems.recordes.text')" />
    <div class="row">
      <div class="col-6">
        <div class="search-box chat-search-box w-50">
          <div class="position-relative">
            <input @keyup="search()" type="text" class="form-control fa-lg text-light"
              :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" :placeholder="$t('popups.search')" v-model="searchModel"
              style="background-color: #2a3042 !important" />
            <i class="bx bx-search-alt search-icon text-light"></i>
          </div>
        </div>
      </div>
      <div class="col-6" style="display: flex; justify-content: flex-end">
        <button class="btn-close text-light" v-if="RecordesSearchMode" @click="cancelappsearchMode()"></button>
        <button type="button" @click="addRecordes()" class="btn btn-light float-end mb-4">
          <span class="bx bxs-plus-circle float-end fa-2x" style="color: #2a3042 !important"></span>
        </button>
      </div>
    </div>

    <table :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="table">
      <thead>
        <tr class="text-light text-center" style="background-color: #2a3042 !important">
          <th scope='col'>{{ $t('recordes.id') }}
          </th>
          <th scope='col'>{{ $t('recordes.name') }}
          </th>
          <th scope='col'>{{ $t('recordes.last_name') }}
          </th>
          <th scope='col'>{{ $t('recordes.title') }}
          </th>
          <th scope='col'>{{ $t('recordes.pages') }}
          </th>
          <th scope='col'>{{ $t('recordes.advisors') }}
          </th>
          <th scope='col'>{{ $t('recordes.status') }}
          </th>
          <th scope='col'>{{ $t('recordes.created') }}
          </th>
          <th scope='col'>{{ $t('recordes.updated') }}
          </th>
          <th scope='col'>{{ $t('recordes.operations') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(app, index) in Recordes" :key="app" class="text-center">
          <td>{{ index + 1 }}</td>
          <td>{{ app.name }}</td>

          <td>{{ app.last_name }}</td>
          <td>{{ app.title }}</td>
          <td>{{ app.pages }}</td>
          <td>{{ app.advisors }}</td>
          <td v-if="app.status == 0">
            <p><span class="btn bg-secondary" style="color: #fff;">pending</span></p>
          </td>
          <td v-if="app.status == 1">
            <p><span class="btn btn-primary">approved</span></p>
          </td>
          <td v-if="app.status == 2">
            <p><span class="btn profile-edit-btn">rejected</span></p>
          </td>
          <td>{{ app.created.split('T')[0] }}</td>
          <td>{{ app.updated.split('T')[0] }}</td>

          <td class="d-flex">
            <a v-if="app.status == 1" class="btn btn-danger mx-1" @click="changeStatus(app)" href="javascript: void(0);"
              role="button">{{ $t("popups.reject") }}</a>
            <a v-if="app.status == 0" class="btn btn-primary mx-1" @click="changeStatus(app)" href="javascript: void(0);"
              role="button">{{ $t("popups.approve") }}</a>
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




