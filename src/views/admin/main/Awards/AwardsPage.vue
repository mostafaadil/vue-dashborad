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
														<th scope='col'>role</th>
														<th scope='col'>result</th>
														<th scope='col'>created</th>
														<th scope='col'>updated</th>

														<th scoped="col"> operations</th>
													</tr>
												</thead>
												<tr v-for="(app, index) in Awards" :key="app" class="text-center">
													<td>{{ index + 1 }}</td>

													<td>{{ app.name }}</td>
													<td>{{ app.role }}</td>
													<td>{{ app.result }}</td>
													<td>{{ app.created.split('T')[0] }}</td>
													<td>{{ app.updated.split('T')[0] }}</td>
													<td class="text-end">
														<button class="btn profile-edit-btn" @click="editAwards(app)"
															href="javascript: void(0);" role="button" data-bs-toggle="modal"
															data-bs-target="#edit-category"><i
																class="far fa-edit"></i></button>
														<a class="btn profile-edit-btn" href="javascript: void(0);"
															role="button" @click="deleteAwards(app)"><i
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
						<form @submit.prevent="addAwards()">
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									name
								</label>
								<input required v-model="awards.name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									role
								</label>
								<input required v-model="awards.role" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									result
								</label>
								<input required v-model="awards.result" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div> {
							model: "poster_awareds",
							type: "select",
							options: (() => {
							return this.poster_awareds.map((data) => {
							return { value: data.id, label: data.id };
							});
							})(),
							label: "popups.poster_awareds",
							},


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
						<form @submit.prevent="updateAwards(app)">
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									name
								</label>
								<input required v-model="awards.name" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									role
								</label>
								<input required v-model="awards.role" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div>
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									result
								</label>
								<input required v-model="awards.result" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div> {
							model: "poster_awareds",
							type: "select",
							options: (() => {
							return this.poster_awareds.map((data) => {
							return { value: data.id, label: data.id };
							});
							})(),
							label: "popups.poster_awareds",
							},


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
			page_name: "awards",
			Awards: [],
			states: [],
			awards: {},
			page: 1,
			limit: 20,
			tot_pages: 0,
			searchAwards: null,
			AwardsSearchMode: false,
			searchModel: "",
			state: state,
		};
	},
	methods: {
		addAwards() {
			// console.log("**********####", this.state);
			this.http.post("awards", this.awards).then(() => {
				var data = document.getElementsByClassName("modal fade custom-modal show")
				data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
				document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")
				window.location.reload();
				this.get(this.page);
			});
		},
		editAwards(app) {
			console.log("310", app)
			this.awards = Object.assign({}, app)
		},
		updateAwards() {
			var id = this.awards.id
			console.log("316", id)
			this.http.put("awards/", id, this.awards).then(() => {
				var data = document.getElementsByClassName("modal fade custom-modal show")
				data[0].replaceWith("modal fade custom-modal show", "modal fade custom-modal hide")
				document.getElementsByClassName("modal-backdrop fade show")[0].replaceWith("modal-backdrop fade show", "modal-backdrop fade hide")
				window.location.reload();
				this.get(this.page);
			});
		},
		search() {
			this.AwardsSearchMode = true;
			this.tot_pages = 0;
			this.http
				.post("awards/search", {
					search: this.searchModel,
					limit: this.limit,
					page: this.page,
					col: "name",
				})
				.then((res) => {
					this.Awards = res.data;
					console.log("######## files", this.Awards);
				});
		},
		cancelappsearchMode() {
			this.searchModel = "";
			this.AwardsSearchMode = false;
			this.get(this.page);
		},

		getAwards() {
			this.http.get("awards").then((res) => {
				this.Awards = res.data;
			});
		},
		deleteAwards(app) {
			this.http.delete("Awards", app.id).then(() => {
				console.log("############################3");
				this.get(this.page);
			});
		},

		get(page) {
			console.log("441", page);
			this.http
				.post("awards/paginate", {
					limit: this.limit,
					page: page,
				})
				.then((res) => {

					this.page = page;
					this.tot_pages = Math.ceil(res.tot / this.limit);
					this.Awards = res.data;
					console.log("---------------", this.Awards)



				});
		},
	},
	created() {
		this.get(1);
	},
}
</script>


