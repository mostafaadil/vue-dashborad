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
									<li class="breadcrumb-item active">{{page_name}}</li>
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
											<label>Add {{page_name}}</label>
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
<th scope='col'>docoter_id</th>
<th scope='col'>studant_id</th>
<th scope='col'>created</th>
<th scope='col'>updated</th>

													</tr>
												</thead>
												<tr v-for="(app, index) in RecoredStudants" :key="app" class="text-center">
												<td>{{app.docoter_id}}</td><td>{{app.studant_id}}</td><td>{{app.created.split('T')[0]}}</td><td>{{app.updated.split('T')[0]}}</td>
													<td class="text-end">
														<button class="btn profile-edit-btn"
															@click="editRecoredStudants(app)" href="javascript: void(0);"
															role="button" data-bs-toggle="modal"
															data-bs-target="#edit-category"><i
																class="far fa-edit"></i></button>
														<a class="btn profile-edit-btn" href="javascript: void(0);" role="button"
															@click="deleteRecoredStudants(app)"><i class="far fa-trash-alt"></i></a>
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
														<a class="page-link" href="javascript: void(0);" @click="get(p)">{{
															p
														}}</a>
													</li>

													<li class="page-item" :class="{ disabled: page == total_pages }">
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
						<form @submit.prevent="addRecoredStudants()">
							<div class="mb-3">
								<label for="message-text" class="col-form-label">
									docoter_id
								</label>
								<input required v-model="recored_studants.docoter_id" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div><div class="mb-3">
								<label for="message-text" class="col-form-label">
									studant_id
								</label>
								<input required v-model="recored_studants.studant_id" dir="ltr" class="form-control" type="text">
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
								<label for="message-text" class="col-form-label">
									docoter_id
								</label>
								<input required v-model="recored_studants.docoter_id" dir="ltr" class="form-control" type="text">
								<div class="invalid-feedback"> </div>

							</div><div class="mb-3">
								<label for="message-text" class="col-form-label">
									studant_id
								</label>
								<input required v-model="recored_studants.studant_id" dir="ltr" class="form-control" type="text">
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
			page_name:"recored_studants",
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
		};
	},
	methods: {
		addRecoredStudants() {
			// console.log("**********####", this.state);
			this.http.post("recored_studants", this.recored_studants).then(() => {
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
			this.http.put("recored_studants/", id, this.recored_studants).then(() => {
				this.get(this.page);
			});
		},
		search() {
			this.RecoredStudantsSearchMode = true;
			this.tot_pages = 0;
			this.http
				.post("recored_studants/search", {
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
			this.http.get("recored_studants").then((res) => {
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
				.post("recored_studants/paginate", {
					limit: this.limit,
					page: page,
				})
				.then((res) => {

					this.page = page;
					this.tot_pages = Math.ceil(res.tot / this.limit);
					this.RecoredStudants = res.data;
					console.log("---------------", this.RecoredStudants)
					


				});
		},
	},
	created() {
		this.get(1);
	},
}
</script>


