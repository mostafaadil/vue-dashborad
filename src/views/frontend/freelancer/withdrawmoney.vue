<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-freelancerprojectheader></layout-freelancerprojectheader>
			<!-- /Header -->

            <!-- Breadcrumb -->
			<div class="bread-crumb-bar">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<div class="breadcrumb-list">
								<nav aria-label="breadcrumb" class="page-breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Freelancer</li>
										<li class="breadcrumb-item" aria-current="page">Payments</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->
			<div class="content content-page">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/freelancer-profile"><img alt="profile image" src="../../../assets/img/user/avatar-1.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<h3 class="mb-0"><router-link to="/freelancer-profile">George Wells</router-link></h3>
										<p class="mb-0">@georgewell</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="/freelancer-dashboard" class="nav-link">
												<i class="material-icons">verified_user</i> Dashboard
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-project-proposals" class="nav-link">
												<i class="material-icons">business_center</i> Projects
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-review" class="nav-link">
												<i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-portfolio" class="nav-link">
												<i class="material-icons">pie_chart</i> Portfolio
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-membership" class="nav-link">
												<i class="material-icons">person_add</i> Membership
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-verify-identity" class="nav-link">
												<i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-withdraw-money" class="nav-link active">
												<i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-profile-settings" class="nav-link">
												<i class="material-icons">settings</i>  Settings
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
						<div class="col-xl-9 col-md-8">
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-withdraw-money">Withdraw Funds</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-invoices"> Invoices</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-transaction-history"> Transaction History</router-link>
									</li>
								</ul>
							</nav>	
						
							<div class="row">
								<div class="col-md-12">
									<div class="card">
										<div class="payment-list wallet card-body">
											<h3>Add Wallet</h3>
											<div class="form-group profile-group">
												<div class="input-group">
													<div class="input-group-prepend">
														<button class="btn dol-btn" type="submit">$</button>
													</div>
													<input type="text" class="form-control">										
												</div>
											</div>
											<label class="custom_radio me-4">
												<input type="radio" name="budget" value="Yes" checked="">
												<span class="checkmark"></span> Paypal
											</label>
											<label class="custom_radio">
												<input type="radio" name="budget" value="Yes">
												<span class="checkmark"></span> Card
											</label>
											<div class="bootstrap-tags text-start ps-0">
												<span class="badge badge-pill badge-skills">$50</span> 
												<span class="badge badge-pill badge-skills">$100</span> 
												<span class="badge badge-pill badge-skills">$150</span> 
											</div>
															
											<div class="row">
												<div class="col-md-12">
													<div class="form-group">
														<label for="card_number">Card Number</label>
														<input class="form-control" id="card_number" type="text">
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label for="first_name">First Name</label>
														<input class="form-control" id="first_name" type="text">
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label for="last_name">Last Name</label>
														<input class="form-control" id="last_name" type="text">
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label for="expiry_on">Expires on</label>
														<input class="form-control" id="expiry_on" type="text">
													</div>
												</div>
												<div class="col-md-8">
													<div class="form-group">
														<label for="cvv">CVV (Security Code) </label>
														<input class="form-control" id="cvv" type="text">
													</div>
												</div>
												<div class="col-md-8 btn-pad">
													<a href="javascript:void(0);" class="btn-primary click-btn">Continue</a>
												</div>
											</div>
										</div>			
									</div>										
								</div>	
															
								<div class="col-md-6 mb-2">	
									<div class="card">						
										<div class="wallet-detail card-body">
											<div class="wallet-title pt-0 ps-0">
												<h3 class="mb-0">Wallet</h3>
											</div>
											<div class="wallet-bal">
												<span class="dol-circle"><i class="fa fa-dollar-sign" aria-hidden="true"></i></span>
												<div class="wallet-amt">
													<p>Available Balance</p>
													<h3 class="mb-0">$250.60 </h3>
												</div>
											</div>
											<div class="wallet-content">
												<div class="wallet-pay">
													<p>Total Credit</p>
													<h3 class="mb-0">$500.00</h3>
												</div>
												<div class="wallet-pay">
													<p>Total Credit</p>
													<h3 class="mb-0">$500.00</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
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
        computed: {
            currentPath() {
                return this.$route.name;
         }
        },  
        data() {
        return {
          activeClass: 'active',
        };
                //  isactive : true
      },
	}
	</script>