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
                                                    src="../../../../assets/img/home-icon.svg" alt="Post Author">
                                                Home</router-link></li>
                                        <li class="breadcrumb-item" aria-current="page">{{ data.name }}</li>
                                        <li class="breadcrumb-item" aria-current="page">records</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <!-- Page Content -->
            <div class="content content-page bookmark">
                <div class="container-fluid">
                    <div class="row">
                        <!-- sidebar -->
                        <layout-employeesidebar></layout-employeesidebar>
                        <!-- /sidebar -->

                        <div class="col-xl-9 col-md-8">
                            <div class="page-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h3 class="page-title">{{ page.name }}</h3>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link>
                                            </li>
                                            <li class="breadcrumb-item active">{{ page_name }}</li>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <a href="javascript:void(0);" class="btn add-button me-2" data-bs-toggle="modal"
                                            data-bs-target="#add-category">
                                            <i class="fas fa-plus"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <div class="table-responsive">
                                                    <table class="table table-center table-hover mb-0 datatable"
                                                        id="categories">
                                                        <thead>
                                                            <tr>
                                                                <th scope='col'>id</th>
                                                                <th scope='col'>name</th>
                                                                <th scope='col'>last_name</th>
                                                                <th scope='col'>title</th>
                                                                <th scope='col'>pages</th>
                                                                <th scope='col'>advisors</th>
                                                                <td scope='col'> status</td>
                                                                <td scope='col'> created</td>
                                                                <td scope='col'> updated</td>
                                                                <th scoped="col"> operations</th>
                                                            </tr>
                                                        </thead>
                                                        <tr v-for="(app, index) in Recordes" :key="app" class="text-center">
                                                            <td>{{ index + 1 }}</td>
                                                            <td>{{ app.name }}</td>
                                                            <td>{{ app.last_name }}</td>
                                                            <td>{{ app.title }}</td>
                                                            <td>{{ app.pages }}</td>
                                                            <td>{{ app.advisors }}</td>
                                                            <td v-if="app.status == 0">
                                                                <p><span class="btn btn-success">pending</span></p>
                                                            </td>
                                                            <td v-if="app.status == 1">
                                                                <p><span class="btn btn-success">approved</span></p>
                                                            </td>
                                                            <td v-if="app.status == 2">
                                                                <p><span class="btn profile-edit-btn">rejected</span></p>
                                                            </td>
                                                            <td>{{ app.created.split('T')[0] }}</td>
                                                            <td>{{ app.updated.split('T')[0] }}</td>
                                                            <td class="text-end d-flex align-items-center">
                                                                <button class="btn profile-edit-btn"
                                                                    @click="editRecordes(app)" href="javascript: void(0);"
                                                                    role="button" data-bs-toggle="modal"
                                                                    data-bs-target="#edit-category"><i
                                                                        class="far fa-edit"></i></button>
                                                                <a class="btn profile-edit-btn mx-2"
                                                                    href="javascript: void(0);" role="button"
                                                                    @click="deleteRecordes(app)"><i
                                                                        class="far fa-trash-alt"></i></a>
                                                                <router-link class="btn profile-edit-btn"
                                                                    :to="`/website/recored-studants/${app.id}`">
                                                                    <i
                                                                        class="far fa-user"></i></router-link>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <div v-if="tot_pages == 20">
                                                        <!--   Apps  paginate     -->
                                                        <ul class="paginate paginate-rounded justify-content-center mb-2">
                                                            <li class="page-item" :class="{ disabled: page == 1 }">
                                                                <a class="page-link" href="javascript: void(0);"
                                                                    @click="get(page - 1)" aria-label="Previous">
                                                                    <i class="mdi mdi-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li class="page-item" :class="{ active: p == page }"
                                                                v-for="p in tot_pages" :key="p">
                                                                <a class="page-link" href="javascript: void(0);"
                                                                    @click="get(p)">{{
                                                                        p
                                                                    }}</a>
                                                            </li>

                                                            <li class="page-item"
                                                                :class="{ disabled: page == total_pages }">
                                                                <a class="page-link" href="javascript: void(0);"
                                                                    @click="get(page + 1)" aria-label="Next">
                                                                    <i class="mdi mdi-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- /Page Wrapper -->
                    </div>
                </div>
            </div>

            <!-- /Page Wrapper -->

        </div>
        <!-- /Main Wrapper -->
      	<!-- /Main Wrapper -->
		<div class="modal fade custom-modal" id="add-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<!-- Modal Header -->
					<div class="modal-header">
						<h4 class="modal-title">Add {{ page_name }}</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>
					<!-- Modal body -->
					<div class="modal-body">
						<form @submit.prevent="addRecordes()">

							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									university
								</label>
								<select v-model="recordes.unvrecity_id" class="form-control">
									<option v-for="university in universities" :key="university" :value="university.id">{{
										university.name }}</option>
								</select>
							</div>
							<div class="mb-3">

								<label for="message-text" class="col-form-label">
									name
								</label>
								<input required v-model="recordes.name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>

							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									last_name
								</label>
								<input required v-model="recordes.last_name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									title
								</label>
								<input required v-model="recordes.title" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									pages
								</label>
								<input required v-model="recordes.pages" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									advisors
								</label>
								<select v-model="recordes.advisors" class="form-control">
									<option v-for="country in advisors" :key="country" :value="country.id">
										{{country.name }} {{ country.last_name }}

									</option>
								</select>
								<div class="invalid-feedback"> </div>
							</div>

							<div class="mt-5">
								<button type="submit" class="btn btn-primary btn-block">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->

		<!-- Edit Modal -->
		<div class="modal fade custom-modal" id="edit-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<!-- Modal Header -->
					<div class="modal-header">
						<h4 class="modal-title">Edit Category</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>

					<!-- Modal body -->
					<div class="modal-body">
						<form @submit.prevent="updateRecordes(app)">

							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									university
								</label>
								<select v-model="recordes.unvrecity_id" class="form-control">
									<option v-for="university in universities" :key="university" :value="university.id">{{
										university.name }}</option>
								</select>
							</div>
							<div class="mb-3">

								<label for="message-text" class="col-form-label">
									name
								</label>
								<input required v-model="recordes.name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>

							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									last_name
								</label>
								<input required v-model="recordes.last_name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									title
								</label>
								<input required v-model="recordes.title" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									pages
								</label>
								<input required v-model="recordes.pages" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									advisors
								</label>
								<select v-model="recordes.advisors" class="form-control">
									<option v-for="country in advisors" :key="country" :value="country.id">
										{{country.name }}{{ country.last_name }}
									</option>
								</select>
							</div>

							<div class="mt-4">
								<button type="submit" class="btn btn-primary btn-block">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
        <!-- /Edit Modal -->


        <!--Deelte modal-->

        <div class="modal custom-modal fade" id="delete_category" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="form-header">
                            <h3>Delete</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div class="modal-btn delete-action">
                            <div class="row">
                                <div class="col-6">
                                    <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                                </div>
                                <div class="col-6">
                                    <a href="javascript:void(0);" data-bs-dismiss="modal"
                                        class="btn btn-primary cancel-btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from "../../../../state/store";
var state = store._modules.root._children.auth.state;
export default {
    data() {
        return {
            page_name: "My records",
            page: 1,
            limit: 20,
            tot_pages: 0,
            searchCities: null,
            CitiesSearchMode: false,
            searchModel: "",
            state: state,
            universities: [],
            recordes: {},
            data: {},
        };
    },
    methods: {
        changeStatus(app) {
            console.log("Iam workig")

            if (app.status == 1) {
                this.status = 0
            }
            if (app.status == 0) {
                this.status = 1
            }
            this.http.post("recordes/update-record", { id: app.id, status: this.status }).then((res) => {
                if (res) {
                    this.get(1)
                }
            })
        },
        addRecordes() {
            let data = JSON.parse((localStorage.getItem("currentUser")))
            this.recordes.poster_id = data.id
            this.http.post("recordes", this.recordes).then(() => {
                var data = document.getElementsByClassName("modal fade custom-modal show")
                data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
                document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")

                this.get(this.page);

            });
        },
        editRecordes(app) {
            console.log("310", app)
            this.recordes = Object.assign({}, app)
        },
        updateRecordes() {
            var id = this.recordes.id
            console.log("316", id)

            this.http.put("recordes/", id, this.recordes).then(() => {
                var data = document.getElementsByClassName("modal fade custom-modal show")
                data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
                document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")

                this.get(this.page);
            });
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
            this.http.delete("Recordes", app.id).then(() => {
                this.get(this.page);
            });
        },

        get(page) {
            console.log("441", page);
            this.data = JSON.parse((localStorage.getItem("currentUser")))
            this.http
                .post("recordes/paginate-poster", {
                    limit: this.limit,
                    page: page,
                    id: this.data?.id
                })

                .then((res) => {

                    this.page = page;
                    this.tot_pages = Math.ceil(res.tot / this.limit);
                    this.Recordes = res.data;
                    console.log("---------------", this.Recordes)

                });

                
					this.http.get("recordes", {
						limit: this.limit,
						page: page,
					})
						.then((res) => {
							this.advisors = res.data


						})
            this.http
                .get("unvarsecites",
                )
                .then((res) => {
                    this.universities = res.data;
                });
        },
    },
    created() {
        this.get(1);
    },
}
</script>


