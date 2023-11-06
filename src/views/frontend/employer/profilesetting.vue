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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">{{ user.name }}</li>
										<li class="breadcrumb-item" aria-current="page">Settings</li>
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
						
						<!-- sidebar -->
						<layout-employeesidebar></layout-employeesidebar>

						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<div class="pro-pos">
								<nav class="user-tabs mb-4">
									<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
										<li class="nav-item">
											<router-link class="nav-link active" to="/profile-settings">Basic Settings</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/change-password">Change Password</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/delete-account">Delete Account</router-link>
										</li>
									</ul>
								</nav>
								<div class="setting-content">
									<div class="card">
										<div class="pro-head">
											<h3 class="pro-title without-border mb-0">Profile Basics </h3>
										</div>										
										<form>
											<div class="pro-body p-0">
												<div class="form-row pro-pad">
													<div class="form-group col-md-6">
														<label>Username</label>
														<input type="text" :value=" this.user.name " class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Email Address</label>
														<input type="email" :value=" this.user.email " class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Dispaly Name</label>
														<input type="text" class="form-control">
													</div>
													
													<div class="form-group col-md-6">
														<label>Contact Number</label>
														<input type="phone" :value=" this.user.tel " class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Type</label>
														<input type="phone" :value=" this.user.type " class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Gender</label>
														<select class="form-control select">
															<option value="0">Male</option>
															<option value="1" >Female</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label>Language </label>
														<input type="text" class="form-control">
													</div>
												</div>												
												<div class="form-row pro-pad pt-0">
													<div class="form-group col-md-6 pro-pic">
														<label>Profile Picture</label>
														<div class="d-flex align-items-center">														
															<div class="upload-images">
																<img src="../../../assets/img/img-02.jpg" alt="Image">
																<a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a>
															</div>
															<label class="file-upload image-upbtn ms-3">
																Change Image <input type="file">
															</label>
														</div>
														<p>Image size 300*300</p>
													</div>
												</div>
											</div>
										</form>
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
            if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
		}, 
        data() {
        return {
			user:{}
        };
                //  isactive : true
      },
	  created() {
        let data = localStorage.getItem("currentUser")
        data = JSON.parse(data)
        console.log("2027", data);
        this.user = data
        console.log
    },
	}
	</script>