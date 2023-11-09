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
														<th scope='col'>state</th>
														<th scope='col'>name</th>
														<th scope='col'>created</th>
														<th scope='col'>updated</th>

														<th scoped="col"> operations</th>
													</tr>
												</thead>
												<tr v-for="(app, index) in Cities" :key="app" class="text-center">
													<td>{{ index + 1 }}</td>

													<td>{{ app?.state?.name }}</td>
													<td>{{ app.name }}</td>
													<td>{{ app.created.split('T')[0] }}</td>
													<td>{{ app.updated.split('T')[0] }}</td>
													<td class="text-end">
														<button class="btn profile-edit-btn" @click="editCities(app)"
															href="javascript: void(0);" role="button" data-bs-toggle="modal"
															data-bs-target="#edit-category"><i
																class="far fa-edit"></i></button>
														<a class="btn profile-edit-btn" href="javascript: void(0);"
															role="button" @click="deleteCities(app)"><i
																class="far fa-trash-alt"></i></a>
													</td>
												</tr>
											</table>

											<div class="row" v-if="tot_pages > 1">
												<div class="col-md-12">
													<ul class="paginations freelancer">
														<li :class="{ disabled: page == 1 }"><a class="page-link"
																@click="get(parseInt(page) - 1)"
																href="javascript:void(0);"><i class="fas fa-angle-left"></i>
																Previous</a></li>
														<li class="page-item" :class="{ active: p == page }">
															<input class="form-control text-center" type="number" min="1"
																v-model="page" :max="tot_pages" @input="get(page)" />
														</li>
														<li class="page-item" :class="{ disabled: page == total_pages }">
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
						<form @submit.prevent="addCities()">
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									state
								</label>
								<select v-model="cities.state_id" class="form-control">
									<option v-for="state in states" :key="state" :value="state.id">{{ state.name }}</option>
								</select>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									name
								</label>
								<input required v-model="cities.name" dir="ltr" class="form-control" type="text">
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
						<form @submit.prevent="updateCities(app)">
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									state_id
								</label>
								<input required v-model="cities.state_id" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									name
								</label>
								<input required v-model="cities.name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

								<select v-model="cities.state_id" class="form-control">
									<option v-for="state in states" :key="state" :value="state.id">{{ state.name }}</option>
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
			page_name: "cities",
			Cities: [],
			states: [],
			cities: {},
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
			// console.log("**********####", this.state);
			this.http.post("cities", this.cities).then(() => {
				var data = document.getElementsByClassName("modal fade custom-modal show")
				data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
				document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")
				window.location.reload();

				this.get(this.page);
			});
		},
		editCities(app) {
			console.log("310", app)
			this.cities = Object.assign({}, app)
		},
		updateCities() {
			var id = this.cities.id
			console.log("316", id)
			this.http.put("cities/", id, this.cities).then(() => {
				var data = document.getElementsByClassName("modal fade custom-modal show")
				data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
				document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")
				window.location.reload();

				this.get(this.page);
			});
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
			this.http.delete("Cities", app.id).then(() => {
				console.log("############################3");
				this.get(this.page);
			});
		},

		get(page) {
			console.log("441", page);
			this.http
				.post("cities/paginate", {
					limit: this.limit,
					page: page,
				})
				.then((res) => {

					this.page = page;
					this.tot_pages = Math.ceil(res.tot / this.limit);
					this.Cities = res.data;
					console.log("---------------", this.Cities)
					this.http
						.get("states",
						)
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


