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
							
							<!-- project list -->
							
							<div class="my-projects-view favourite-group">
								<div class="row">
									<table class="table">
										<thead>
											<tr class="text-light text-center" style="background-color: #2a3042 !important">
												<th scope='col'>id
												</th>
												<th scope='col'>award_name
												</th>
												<th scope='col'>earned mony from the award in dollars
												</th>
												<th scope='col'>name
												</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(app, index) in PosterAwareds" :key="app" class="text-center">
												<td>{{ index + 1 }}</td>
												<td>{{ app?.award.name }}</td>
												<td>{{ app?.award.result }} $</td>
												<td>{{ app?.poster.name }}</td>
											</tr>
										</tbody>
									</table>

								</div>	
							</div>
							<!-- project list -->
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
		<employeemodal></employeemodal>
	</div>
</template>
<script>
import favourite from '../../../../assets/json/frontend/employer/favourite.json'
const images = require.context('../../../../assets/img/user', false, /\.png$|\.jpg$|\.svg$/)
import store from "../../../../state/store";
var state = store._modules.root._children.auth.state;
export default {
	mounted() {

	},
	// methods: {
	// 	loadImg(imgPath) {
	// 		return images('./' + imgPath).default
	// 	},
	// },
	data() {
		return {
			favourite: favourite
		}
	},
	data() {
		return {
			page_name: "poster_awareds",
			PosterAwareds: [],
			states: [],
			poster_awareds: {},
			page: 1,
			limit: 20,
			tot_pages: 0,
			searchPosterAwareds: null,
			PosterAwaredsSearchMode: false,
			searchModel: "",
			state: state,
		};
	},
	methods: {
		get(page) {
			console.log(page);
			const current_user = JSON.parse(localStorage.currentUser);
			console.log("202", current_user);
			this.poster_id = current_user.id;
			console.log("201", this.poster_id)
			this.http
				.post("poster-awareds/paginate", {
					limit: this.limit,
					page: page,
					poster_id: this.poster_id
				})
				.then((res) => {
					this.page = page;
					this.tot_pages = Math.ceil(res.tot / this.limit);
					this.PosterAwareds = res.data;

				});
		},
	},

	created() {
		this.get(1);
	},

}
</script>