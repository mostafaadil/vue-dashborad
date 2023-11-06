<template>
    <div class="dashboard-page">
        <!-- Main Wrapper -->
        <div class="main-wrapper">
            <!-- Header -->
            <layout-employeeheader />
            <!-- /Header -->

            <!-- Breadcrumb -->
            <div class="bread-crumb-bar">
                <div class="container">
                    <div class="row align-items-center inner-banner">
                        <div class="col-md-12 col-12 text-center">
                            <div class="breadcrumb-list">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/index"><img
                                                    src="../../assets/img/home-icon.svg" alt="Post Author">
                                                Home</router-link></li>
                                        <li class="breadcrumb-item" aria-current="page">Employee</li>
                                        <li class="breadcrumb-item" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <!-- Page Content -->
            <div class="content content-page">
                <div class="container-fluid">
                    <div class="row">

                        <!-- sidebar -->
                        <layout-employeesidebar></layout-employeesidebar>
                        <!-- /sidebar -->

                        <div class="col-xl-9 col-md-8">
                            <div class="dashboard-sec">

                                <dashboardwidget></dashboardwidget>

                                <!-- Chart Content -->
                                <table :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="table">
                                    <thead>
                                        <tr class="text-light text-center" style="background-color: #2a3042 !important">
                                            <th scope='col'>{{ $t('cities.id') }}
                                            </th>
                                            <th scope='col'>{{ $t('cities.state_id') }}
                                            </th>
                                            <th scope='col'>{{ $t('cities.name') }}
                                            </th>
                                            <th scope='col'>{{ $t('cities.created') }}
                                            </th>
                                            <th scope='col'>{{ $t('cities.updated') }}
                                            </th>
                                            <th scope='col'>{{ $t('cities.operations') }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(app, index) in Cities" :key="app" class="text-center">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ app?.state?.name }}</td>
                                            <td>{{ app.name }}</td>
                                            <td>{{ app.created.split('T')[0] }}</td>
                                            <td>{{ app.updated.split('T')[0] }}</td>

                                            <td class="d-flex">
                                                <a class="btn btn-primary mx-1" @click="editCities(app)"
                                                    href="javascript: void(0);" role="button">{{
                                                        $t("popups.edit") }}</a>
                                                <a class="btn profile-edit-btn" href="javascript: void(0);" role="button"
                                                    @click="deleteCities(app)">{{
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
                                            <a class="page-link" href="javascript: void(0);" @click="get(page - 1)"
                                                aria-label="Previous">
                                                <i class="mdi mdi-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item" :class="{ active: p == page }" v-for="p in tot_pages"
                                            :key="p">
                                            <a class="page-link" href="javascript: void(0);" @click="get(p)">{{
                                                p
                                            }}</a>
                                        </li>

                                        <li class="page-item" :class="{ disabled: page == total_pages }">
                                            <a class="page-link" href="javascript: void(0);" @click="get(page + 1)"
                                                aria-label="Next">
                                                <i class="mdi mdi-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- /Chart Content -->

                                <!-- Past Earnings -->
                                <earningdashboard></earningdashboard>
                                <!-- /Past Earnings -->

                                <div class="row">
                                    <!-- Plan  Details-->
                                    <plandetaildashboard></plandetaildashboard>
                                    <!-- /Plan  Details -->

                                    <!-- Notifications -->
                                    <notificationdashboard></notificationdashboard>
                                    <!-- /Notifications -->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Page Content -->

            <!-- Footer -->
            <layout-footer />
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>
<script>

export default {
    components: {
        apexchart: VueApexCharts,
    },
    mounted() {
    },
    data() {
        return {
            Cities: [],
            states: [],
            page: 1,
            limit: 20,
            tot_pages: 0,
            searchCities: null,
            CitiesSearchMode: false,
            searchModel: "",
            state: state,
        };
    },
    methods: {
        addCities() {
            console.log("**********####", this.state);
            var data = {
                title: "popups.addCities",
                inputs: [

                    {
                        "model": "name",
                        "type": "text",
                        "label": "name"
                    },
                    {
                        model: "state_id",
                        type: "select",
                        options: (() => {
                            return this.states.map((data) => {
                                return { value: data.id, label: data.name };
                            });
                        })(),
                        label: "states",
                    },


                ],
                buttons: [
                    {
                        text: "popups.add",
                        closer: true,
                        color: "primary",
                        handler: (obj) => {
                            this.http.post("cities", obj).then(() => {
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
        editCities(app) {
            var data = {
                title: "popups.cities",
                inputs: [
                    {
                        "model": "state_id",
                        "type": "text",
                        "label": "state_id",
                        "value": app.state_id
                    },
                    {
                        "model": "name",
                        "type": "text",
                        "label": "name",
                        "value": app.name
                    },

                ],
                buttons: [
                    {
                        text: "popups.edit",
                        closer: true,
                        color: "primary",
                        handler: (obj) => {
                            this.http.put("cities", app.id, obj).then(() => {
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
        updateCities(app) {
            var data = {
                title: "popups.editfile",
                inputs: [

                    {
                        "model": "name",
                        "type": "text",
                        "label": "name"
                    },
                    {
                        model: "state_id",
                        type: "select",
                        options: (() => {
                            return this.states.map((data) => {
                                return { value: data.id, label: data.name };
                            });
                        })(),
                        label: "states",
                    },


                ],
                buttons: [
                    {
                        text: "popups.edit",
                        closer: true,
                        color: "primary",
                        handler: (obj) => {
                            obj.emp_id = app.id;
                            this.http.do("cities", obj).then(() => {
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
            this.CitiesSearchMode = true;
            this.tot_pages = 0;
            this.http
                .post("cities/search", {
                    search: this.searchModel,
                    limit: this.limit,
                    page: this.page,
                    col: "name",
                })
                .then((res) => {
                    this.Cities = res.data;
                    console.log("######## files", this.Cities);
                });
        },
        cancelappsearchMode() {
            this.searchModel = "";
            this.CitiesSearchMode = false;
            this.get(this.page);
        },

        getCities() {
            this.http.get("cities").then((res) => {
                this.Cities = res.data;
            });
        },
        deleteCities(app) {
            var data = {
                title: "popups.deletefile",
                msg: "popups.delmessage",
            };
            this.popup.confirm(data).then((resp) => {
                if (resp) {
                    console.log("###");
                    this.http.delete("cities", app.id).then(() => {
                        console.log("############################3");
                        this.get(this.page);
                    });
                }
            });
        },

        get(page) {
            console.log(page);
            this.http
                .post("cities/paginate", {
                    limit: this.limit,
                    page: page,
                })
                .then((res) => {
                    this.page = page;
                    this.tot_pages = Math.ceil(res.tot / this.limit);
                    this.Cities = res.data;
                    this.http
                        .get("states", {
                            limit: this.limit,
                            page: page,
                        })
                        .then((res) => {
                            this.states = res.data;

                        });


                });
        },
    },
    created() {
        this.get(1);
    },
}
</script>
        