<template>
	<div>
		<!-- Main Wrapper -->
		<div class="main-wrapper">
			<layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>


			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="row">
					<div class="col">
						<div class="top-nav-search">
							<form>
								<input @keyup="search()" v-model="ModelSearch" type="text" class="form-control"
									placeholder="Start typing your Search...">
							</form>
						</div>
					</div>
				</div>
				<div class="content container-fluid">

					<!-- Page Header -->
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
					<!-- /Page Header -->

					<!-- Search Filter -->
					<div class="card filter-card" id="filter_inputs">
						<div class="card-body pb-0">
							<form action="#" method="post">
								<div class="row filter-row">
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>Add {{ page_name }}</label>
											<input class="form-control" type="text">
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>From Date</label>
											<div class="cal-icon">
												<input class="form-control datetimepicker" type="text">
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<label>To Date</label>
											<div class="cal-icon">
												<input class="form-control datetimepicker" type="text">
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="form-group">
											<button class="btn btn-primary btn-block" type="submit">Submit</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<!-- /Search Filter -->

					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<div class="table-responsive">
											<table class="table table-center table-hover mb-0 datatable" id="categories">
												<thead>
													<tr>
														<th scope='col'>id</th>
														<th scope='col'>name</th>
														<th scope='col'>last_name</th>
														<th scope='col'>title</th>
														<th scope='col'>pages</th>
														<th scope='col'>advisors</th>
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
														<p><span class="btn bg-secondary"
																style="color: #fff;">pending</span></p>
													</td>
													<td v-if="app.status == 1">
														<p><span class="btn btn-success">approved</span></p>
													</td>
													<td v-if="app.status == 2">
														<p><span class="btn profile-edit-btn">rejected</span></p>
													</td>

													<td class="d-flex">
														<a v-if="app.status == 1" @click="changeStatus(app)"
															href="javascript: void(0);" role="button"><span
																class="btn btn-danger mx-1">reject</span></a>
														<a v-if="app.status == 0" @click="changeStatus(app)"
															href="javascript: void(0);" role="button"><span
																class="btn btn-success mx-1">approve</span> </a>
													</td>
												</tr>
											</table>

											<div class="row" v-if="tot_pages > 1">
												<div class="col-md-12">
													<ul class="paginations freelancer">
														<li :class="{ disabled: page == 1 }"><a class="page-link"
																@click="get(parseInt(page) - 1)" href="javascript:void(0);"><i
																	class="fas fa-angle-left"></i>
																Previous</a></li>
														<li class="page-item" :class="{ active: p == page }">
															<input class="form-control text-center" type="number" min="1"
																v-model="page" :max="tot_pages" @input="get(page)" />
														</li>
														<li class="page-item" :class="{ disabled: page == total_pages }">
															<a @click="get(parseInt(page) + 1)" href="javascript:void(0);">Next
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
								<input required v-model="recordes.advisors" dir="ltr" class="form-control" type="text">
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
						<form @submit.prevent="updateRecordes(app)">
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
								<input required v-model="recordes.advisors" dir="ltr" class="form-control" type="text">
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
			page_name: "recordes",
			Recordes: [],
			states: [],
			status: 0,
			recordes: {},
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
			// console.log("**********####", this.state);
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
				console.log("############################3");
				this.get(this.page);
			});
		},

		get(page) {
			console.log("441", page);
			this.http
				.post("recordes/paginate", {
					limit: this.limit,
					page: page,
				})
				.then((res) => {

					this.page = page;
					this.tot_pages = Math.ceil(res.tot / this.limit);
					this.Recordes = res.data;
					console.log("---------------", this.Recordes)



				});
		},
	},
	created() {
		this.get(1);
	},
}
</script>


