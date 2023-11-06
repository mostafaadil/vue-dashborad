<template>
	<div class="col-xl-3 col-md-4 theiaStickySidebar">
		<div class="stickyside">
			<div class="settings-widget">
				<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
					<router-link to="/user-account-details"><img alt="profile image" src="../../../assets/img/img-04.jpg"
							class="avatar-lg rounded-circle"></router-link>
					<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
						<p class="mb-2">Welcome,</p>
						<router-link to="/user-account-details">
							<h3 class="mb-0">{{ this.info?.name }}</h3>
						</router-link>
						<p class="mb-0">{{ this.info.email }}</p>
					</div>
				</div>

				<div class="settings-menu">
					<ul>
						<li class="nav-item">
							<router-link to="/dashboard" class="nav-link">
								<i class="material-icons">verified_user</i> Dashboard
							</router-link>
						</li>
						<li class="nav-item"
							:class="{ 'active': currentPath === '/favourites-list' || currentPath === '/invited-favourites' }">
							<router-link to="/favourites" class="nav-link"
								:class="currentPath == 'favourites-list' || currentPath === '/invited-favourites' ? 'active' : 'notactive'">
								<i class="material-icons">local_play</i> My Awards
							</router-link>
						</li>

						<li class="nav-item"
							:class="{ 'active': currentPath === '/favourites-list' || currentPath === '/invited-favourites' }">
							<router-link to="/records" class="nav-link"> <i class="material-icons">person_pin</i> Records
							</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/" class="nav-link">
								<i class="material-icons">power_settings_new</i> Logout
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	computed: {
		currentPath() {
			return this.$route.name;
		}

	},
	mounted() {
	},
	data() {
		return {
			activeClass: 'active',
			info:{}
		};
	},
	created() {
		const current_user = JSON.parse(localStorage.currentUser);
		console.log("202", current_user);
		this.info = current_user
	}
}
</script>
