<template>
    <div>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Roles & Permission</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									
									<li class="breadcrumb-item active">Roles</li>
								</ul>
							</div>
							<div class="col-auto">
								<a href="javascript:void(0);" class="btn add-button me-1" data-bs-toggle="modal" data-bs-target="#add-category">
									<i class="fas fa-plus"></i>
								</a>
								<a class="btn btn-primary filter-btn" href="javascript:void(0);" id="filter_search">
									<i class="fas fa-filter"></i>
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
											<label>Roles</label>
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
										<table class="table table-center table-hover mb-0 datatable" id="role">
											<thead>
												<tr>
													<th>Role Name</th>
													<th class="text-end">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														Admin
													</td>
													<td class="text-end">
														<router-link to="/admin/roles-permission" class="btn btn-sm bg-pink me-2"><i class="fas fa-user-shield"></i></router-link>
														<a href="javascript:void(0);" class="btn profile-edit-btn" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
														<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
													</td>
												</tr>
												<tr>
													<td>
														Client
													</td>
													
													<td class="text-end">
														<router-link to="/admin/roles-permission" class="btn btn-sm bg-pink me-2"><i class="fas fa-user-shield"></i></router-link>
														<a href="javascript:void(0);" class="btn profile-edit-btn" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
														<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
													</td>
												</tr>
												<tr>
													<td>
														Staff
													</td>
													<td class="text-end">
														<router-link to="/admin/roles-permission" class="btn btn-sm bg-pink me-2"><i class="fas fa-user-shield"></i></router-link>
														<a href="javascript:void(0);" class="btn profile-edit-btn" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
														<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
													</td>
												</tr>
											</tbody>
										</table>
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
       <!-- Add Modal -->
		<div class="modal fade custom-modal" id="add-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<!-- Modal Header -->
					<div class="modal-header">
						<h4 class="modal-title">Add Roles</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>
					<!-- /Modal Header -->
					
					<!-- Modal body -->
					<div class="modal-body">
						<form>		     		
							<div class="form-group">
								<label>Role Name</label>
								<input type="text" class="form-control" placeholder="Enter Role Name">
							</div>					
							<div class="mt-4">
								<button type="submit" class="btn btn-primary btn-block">Submit</button>
							</div>
						</form>
					</div>
					<!-- /Modal body -->
				</div>
			</div>
		</div>
		<!-- /Add Modal -->
		
		<!-- Edit Modal -->
		<div class="modal fade custom-modal" id="edit-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<!-- Modal Header -->
					<div class="modal-header">
						<h4 class="modal-title">Edit Roles</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>
					<!-- /Modal Header -->
					
					<!-- Modal body -->
					<div class="modal-body">
						<form>		     		
							<div class="form-group">
								<label>Role Name</label>
								<input type="text" class="form-control" value="Admin">
							</div>					
							<div class="mt-4">
								<button type="submit" class="btn btn-primary btn-block">Submit</button>
							</div>
						</form>
					</div>
					<!-- /Modal body -->
				</div>
			</div>
		</div>
		<!-- /Add Modal -->

		<!-- Delete Modal -->
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
									<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->
    </div>
</template>
<script>
    import util from '../../../../assets/utils/util'
	export default {
		 mounted() {
            util.datatable('#role')
            $(document).on('click', '#filter_search', function() {
		$('#filter_inputs').slideToggle("slow");
	});
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>