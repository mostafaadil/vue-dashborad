<template>
<div class="account-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-header />
			<!-- /Header -->
			
            <!-- Page Content -->
			<div class="content">
				<div class="container">					
					<div class="row">
						<div class="col-md-6 offset-md-3">							
							<!-- Register Tab Content -->
							<div class="account-content">
								<div class="align-items-center justify-content-center">
									<div class="login-right">
										<div class="login-header text-center">
											<router-link to="/index" ><img src="../../assets/img/logo-01.png" alt="logo" class="img-fluid"></router-link>
											<h3>Join Kofejob</h3>
											<p>Make the most of your professional life</p>
										</div>
										<nav class="user-tabs mb-4">
											<ul role="tablist" class="nav nav-pills nav-justified">
												<li class="nav-item">
													<a href="#developer" data-bs-toggle="tab" class="nav-link active">FREELANCER</a>
												</li>
												<li class="nav-item">
													<a href="#company" data-bs-toggle="tab" class="nav-link">COMPANY</a>
												</li>
											</ul>
										</nav>
										<div class="tab-content pt-0">
											<div role="tabpanel" id="developer" class="tab-pane fade active show">
												<form>										
													<div class="form-group form-focus">
														<input type="email" class="form-control floating">
														<label class="focus-label">User Name</label>
													</div>
													<div class="form-group form-focus">
														<input type="email" class="form-control floating">
														<label class="focus-label">Email </label>
													</div>
													<div class="form-group form-focus">
														<input type="password" class="form-control floating">
														<label class="focus-label">Password</label>
													</div>	
													<div class="form-group form-focus mb-0">
														<input type="password" class="form-control floating">
														<label class="focus-label">Confirm Password</label>
													</div>	
													<div class="dont-have">
														<label class="custom_check">
															<input type="checkbox" name="rem_password">
															<span class="checkmark"></span> You agree to the Kofejob <router-link to="/privacy-policy">User Agreement, Privacy Policy,</router-link> and <router-link to="/privacy-policy">Cookie Policy</router-link>.
														</label>
													</div>
                                                    <router-link to="/onboard-screen">
													<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Agree TO JOIN</button>	
                                                    </router-link>
													<div class="login-or">
														<p>Or login with</p>
													</div>
													<div class="row social-login">
														<div class="col-4">
															<a href="javascript:void(0);" class="btn btn-twitter btn-block"> Twitter</a>
														</div>
														<div class="col-4">
															<a href="javascript:void(0);" class="btn btn-facebook btn-block"> Facebook</a>
														</div>
														<div class="col-4">
															<a href="javascript:void(0);" class="btn btn-google btn-block"> Google</a>
														</div>
													</div>
													<div class="row">
													<div class="col-6 text-start">
														<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
													</div>
													<div class="col-6 text-end dont-have">Already on Kofejob <router-link to="/login">Click here</router-link></div>
													</div>
												</form>
											</div>
											<div role="tabpanel" id="company" class="tab-pane fade">
												<form>										
													<div class="form-group form-focus">
														<input type="email" class="form-control floating">
														<label class="focus-label">User Name</label>
													</div>
													<div class="form-group form-focus">
														<input type="email" class="form-control floating">
														<label class="focus-label">Email </label>
													</div>
													<div class="form-group form-focus">
														<input type="password" class="form-control floating">
														<label class="focus-label">Password</label>
													</div>	
													<div class="form-group form-focus mb-0">
														<input type="password" class="form-control floating">
														<label class="focus-label">Confirm Password</label>
													</div>
													<div class="dont-have">
														<label class="custom_check">
															<input type="checkbox" name="rem_password">
															<span class="checkmark"></span> You agree to the Kofejob <router-link to="/privacy-policy">User Agreement, Privacy Policy,</router-link> and <router-link to="/onboard-screen">Cookie Policy</router-link>.
														</label>
													</div>
                                                    <router-link to="/onboard-screen">												
													<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Agree TO JOIN</button>
                                                    </router-link>
													<div class="login-or">
														<p>Or login with</p>
													</div>														
													<div class="row form-row social-login">
														<div class="col-4">
															<a href="javascript:void(0);" class="btn btn-twitter btn-block"> Twitter</a>
														</div>
														<div class="col-4">
															<a href="javascript:void(0);" class="btn btn-facebook btn-block"> Facebook</a>
														</div>
														<div class="col-4">
															<a href="javascript:void(0);" class="btn btn-google btn-block"> Google</a>
														</div>
													</div>
													<div class="row form-row">
													<div class="col-6 text-start">
														<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
													</div>
													<div class="col-6 text-end dont-have">Already on Kofejob <router-link to="/login">Click here</router-link></div>
													</div>
												</form>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<!-- /Register Tab Content -->
								
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
     mounted() {
    },
}
</script>