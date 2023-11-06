
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
            accounts: [],
            telgram_bots: [],

            Users: [],
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
                        "model": "name",
                        "type": "text",
                        "label": "name"
                    },
                    {
                        "model": "tel",
                        "type": "text",
                        "label": "tel"
                    },
                    {
                        "model": "password",
                        "type": "text",
                        "label": "password"
                    },
                    {
                        "model": "store_name",
                        "type": "text",
                        "label": "store_name"
                    },
                    {
                        "model": "subscription_id",
                        "type": "text",
                        "label": "subscription_id"
                    },
                    {
                        "model": "duration",
                        "type": "text",
                        "label": "duration"
                    },
                    {
                        "model": "image",
                        "type": "text",
                        "label": "image"
                    },
                    {
                        model: "accounts",
                        type: "select",
                        options: (() => {
                            return this.accounts.map((data) => {
                                return { value: data.id, label: data.id };
                            });
                        })(),
                        label: "popups.accounts",
                    },

                    {
                        model: "telgram_bots",
                        type: "select",
                        options: (() => {
                            return this.telgram_bots.map((data) => {
                                return { value: data.id, label: data.id };
                            });
                        })(),
                        label: "popups.telgram_bots",
                    },


                ],
                buttons: [
                    {
                        text: "popups.add",
                        closer: true,
                        color: "primary",
                        handler: (obj) => {
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
                        "model": "name",
                        "type": "text",
                        "label": "name",
                        "value": app.name
                    },
                    {
                        "model": "tel",
                        "type": "text",
                        "label": "tel",
                        "value": app.tel
                    },
                    {
                        "model": "password",
                        "type": "text",
                        "label": "password",
                        "value": app.password
                    },
                    {
                        "model": "store_name",
                        "type": "text",
                        "label": "store_name",
                        "value": app.store_name
                    },
                    {
                        "model": "subscription_id",
                        "type": "text",
                        "label": "subscription_id",
                        "value": app.subscription_id
                    },
                    {
                        "model": "duration",
                        "type": "text",
                        "label": "duration",
                        "value": app.duration
                    },
                    {
                        "model": "image",
                        "type": "text",
                        "label": "image",
                        "value": app.image
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
                        "model": "name",
                        "type": "text",
                        "label": "name"
                    },
                    {
                        "model": "tel",
                        "type": "text",
                        "label": "tel"
                    },
                    {
                        "model": "password",
                        "type": "text",
                        "label": "password"
                    },
                    {
                        "model": "store_name",
                        "type": "text",
                        "label": "store_name"
                    },
                    {
                        "model": "subscription_id",
                        "type": "text",
                        "label": "subscription_id"
                    },
                    {
                        "model": "duration",
                        "type": "text",
                        "label": "duration"
                    },
                    {
                        "model": "image",
                        "type": "text",
                        "label": "image"
                    },
                    {
                        model: "accounts",
                        type: "select",
                        options: (() => {
                            return this.accounts.map((data) => {
                                return { value: data.id, label: data.id };
                            });
                        })(),
                        label: "popups.accounts",
                    },

                    {
                        model: "telgram_bots",
                        type: "select",
                        options: (() => {
                            return this.telgram_bots.map((data) => {
                                return { value: data.id, label: data.id };
                            });
                        })(),
                        label: "popups.telgram_bots",
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
                })
                .then((res) => {
                    this.page = page;
                    this.tot_pages = Math.ceil(res.tot / this.limit);
                    this.Users = res.data;
                    res.data.forEach((item) => {
                        this.accounts.push(item.accounts)
                    })

                    res.data.forEach((item) => {
                        this.telgram_bots.push(item.telgram_bots)
                    })


                });
        },
    },
    created() {
        this.get(1);
        // this.getUsers();
    },
};
</script>

<template>
    <Layout>
        <PageHeader :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" :title="$t('menu.menuitems.dashboard.text')" />
       
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




