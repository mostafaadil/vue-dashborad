<template>
	<div>
		<!-- Main Wrapper -->
		<div class="main-wrapper login-body">

			<div class="login-wrapper">
				<div class="container">
					<img class="img-fluid logo-dark mb-2" src="../../../assets/admin-img/logo-01.png" alt="Logo">

					<div class="loginbox">
						<div class="login-right">
							<div class="login-right-wrap">
								<h1>Join Now </h1>
								<p class="account-subtitle">Make the most of your professional life</p>
								
								<!-- Form -->
								<div class="tab-content pt-0">
									<div role="tabpanel" id="developer" class="tab-pane fade active show">
										<form class="register" @submit.prevent="tryToLogIn()">
											<div class="form-group form-focus">
												<input type="text" v-model="user.name" class="form-control floating">
												<label class="focus-label">User Name</label>
											</div>
											<div class="form-group form-focus">
												<input v-model="user.email" type="text" class="form-control floating mt-2"
													 />
												
												<label class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<input v-model="user.pass" type="password"
													class="form-control floating pass-input mt-2"
													 />
												
												<label class="focus-label">Password</label>
											</div>
											
											<div class="dont-have">
												<p>You agree to the Kofejob <a href="javascript:void(0);">User
														Agreement,</a> <a href="javascript:void(0);">Privacy Policy,</a> and
													<a href="javascript:void(0);">Cookie Policy</a>.</p>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Agree
												to join</button>
											<div class="login-or">
												<p class="mb-0">Or login with</p>
											</div>
										</form>
										<!-- /form -->

										<!-- Social Login -->
										<div class="row form-row social-login">
											<div class="col-lg-4">
												<a href="javascript:void(0);" class="btn btn-twitter btn-block mb-1">
													Twitter</a>
											</div>
											<div class="col-lg-4">
												<a href="javascript:void(0);" class="btn btn-facebook btn-block mb-1">
													Facebook</a>
											</div>
											<div class="col-lg-4">
												<a href="javascript:void(0);" class="btn btn-google btn-block mb-1">
													Google</a>
											</div>
										</div>
										<!-- /Social Login -->

										<div class="row form-row login-foot">
											<div class="col-lg-6 login-forgot">
												<router-link class="forgot-link" to="/admin/forgot-password">Forgot Password
													?</router-link>
											</div>
											<div class="col-lg-6 dont-have">New to Kofejob? <router-link
													to="/admin/register">Click here</router-link></div>
										</div>
									
									</div>
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<!-- /Main Wrapper -->
	</div>
</template>
<script>
export default {
	methods: {
		tryToLogIn() {
			this.submitted = true;
			console.log("working")
			// stop here if form is invalid

			// if (this.v$.$invalid) {
			// return;
			// console.log("valid");
			// } else {
			console.log(this.user);
			this.user.type="poster"
		this.http.post("users", this.user).then((res) => {
				if(res.status==true){
					this.$router.push("/dashboard")

				}
			});
						// }
		},
	},
	data() {
		return ({ user: {}, })
	},


}
</script>
    