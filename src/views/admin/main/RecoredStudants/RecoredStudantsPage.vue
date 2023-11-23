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
										<li class="breadcrumb-item" aria-current="page">Employee</li>
										<li class="breadcrumb-item" aria-current="page">Favourites</li>
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
																<th scope='col'>doctor</th>
																<th scope='col'>student</th>
																<th scope='col'>created</th>
																<th scope='col'>updated</th>
																<th scoped="col" colspan="4"></th>
															</tr>
														</thead>
														<tr v-for="(app, index) in RecoredStudants" :key="app"
															class="text-center">
															<td>{{ index + 1 }}</td>

															<td>{{ app?.docoter?.name }}</td>
															<td>{{ app?.studant?.name }} {{ app?.studant?.last_name }}</td>
															<td>{{ app.created.split('T')[0] }}</td>
															<td>{{ app.updated.split('T')[0] }}</td>
															<td class="text-end">
																<button class="btn profile-edit-btn mx-2"
																	@click="editRecoredStudants(app)"
																	href="javascript: void(0);" role="button"
																	data-bs-toggle="modal"
																	data-bs-target="#edit-category"><i
																		class="far fa-edit"></i></button>
																<a class="btn profile-edit-btn mx-2" href="javascript: void(0);"
																	role="button" @click="deleteRecoredStudants(app)"><i
																		class="far fa-trash-alt"></i></a>
															</td>
														</tr>
													</table>

													<div class="row" v-if="tot_pages > 1">
														<div class="col-md-12">
															<ul class="paginations freelancer">
																<li class="page-item">{{ page }}/{{ tot_pages }}</li>
																<li :class="{ disabled: page == 1 }"><a class="page-link"
																		@click="get(parseInt(page) - 1)"
																		href="javascript:void(0);"><i
																			class="fas fa-angle-left"></i>
																		Previous</a></li>
																<li class="page-item" :class="{ active: p == page }">
																	<input class="form-control text-center" type="number"
																		min="1" v-model="page" :max="tot_pages"
																		@input="get(page)" />
																</li>
																<li class="page-item"
																	:class="{ disabled: page == total_pages }">
																	<a @click="get(parseInt(page) + 1)"
																		href="javascript:void(0);">Next
																		<i class="fas fa-angle-right"></i></a>
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
						</div>
						<!-- /Page Wrapper -->
					</div>
					<!-- /Page Wrapper -->
				</div>
			</div>
		</div>
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
						<form @submit.prevent="addRecoredStudants()">

							<div class="mb-3">
								<label for="message-text" class="col-form-label">name</label>
								<select v-model="recored_studants.studant_id" class="form-control">
									<option v-for="record in records" :key="record" :value="record.id">{{
										record.name }}{{ record.last_name }}
									</option>
								</select>
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mt-4">
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
						<form @submit.prevent="updateRecoredStudants(app)">

							<div class="mb-3">
								<label for="message-text" class="col-form-label">name</label>
								<select v-model="recored_studants.studant_id" class="form-control">
									<option v-for="record in records" :key="record" :value="record.id">{{
										record.name }}

										{{
											record.last_name }}
									</option>
								</select>
								<div class="invalid-feedback"> </div>
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
			page_name: "Studants",
			RecoredStudants: [],
			states: [],
			recored_studants: {},
			page: 1,
			limit: 20,
			tot_pages: 0,
			searchRecoredStudants: null,
			RecoredStudantsSearchMode: false,
			searchModel: "",
			state: state,
			records: [],

		};
	},
	methods: {
		addRecoredStudants() {
			// console.log("**********####", this.state);
			this.recored_studants.docoter_id = this.$route.params.id
			this.http.post("recored-studants", this.recored_studants).then(() => {
				var data = document.getElementsByClassName("modal fade custom-modal show")
				data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
				document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")
				this.get(this.page);
			});
		},
		editRecoredStudants(app) {
			console.log("310", app)
			this.recored_studants = Object.assign({}, app)
		},
		updateRecoredStudants() {
			var id = this.recored_studants.id
			console.log("316", id)
			this.recored_studants.docoter_id = this.$route.params.id
			this.http.put("recored-studants/", id, this.recored_studants).then(() => {
				var data = document.getElementsByClassName("modal fade custom-modal show")
				data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
				document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")
				this.get(this.page);
			});
		},
		search() {
			this.RecoredStudantsSearchMode = true;
			this.tot_pages = 0;
			this.http
				.post("recored-studants/search", {
					search: this.searchModel,
					limit: this.limit,
					page: this.page,
					col: "name",
				})
				.then((res) => {
					this.RecoredStudants = res.data;
					console.log("######## files", this.RecoredStudants);
				});
		},
		cancelappsearchMode() {
			this.searchModel = "";
			this.RecoredStudantsSearchMode = false;
			this.get(this.page);
		},

		getRecoredStudants() {
			this.http.get("recored-studants").then((res) => {
				this.RecoredStudants = res.data;
			});
		},
		deleteRecoredStudants(app) {
			this.http.delete("RecoredStudants", app.id).then(() => {
				console.log("############################3");
				this.get(this.page);
			});
		},

		get(page) {
			console.log("441", page);

			this.http
				.post("recored-studants/paginate", {
					limit: this.limit,
					page: page,
					docoter_id: this.$route.params.id
				})
				.then((res) => {

					this.page = page;
					this.tot_pages = Math.ceil(res.tot / this.limit);
					this.RecoredStudants = res.data;
					console.log("---------------", this.RecoredStudants)

					this.http
						.get("recordes",)
						.then((res) => {
							this.records = res.data

						});

				});
		},
	},
	created() {
		this.get(1);
	},
}
</script>


