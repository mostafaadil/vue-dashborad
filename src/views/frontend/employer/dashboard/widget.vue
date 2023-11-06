<template>
	<div class="row">
		<div class="col-md-6 col-lg-4">
			<div class="dash-widget">
				<div class="dash-info">
					<div class="dash-widget-info">My records</div>
					<div class="dash-widget-count">{{info?.records}}</div>
				</div>
				<div class="dash-widget-more">
					<router-link to="#" class="d-flex"> <i class="fas fa-arrow-right ms-auto"></i></router-link>
				</div>
			</div>
		</div>
		<div class="col-md-6 col-lg-4">
			<div class="dash-widget">
				<div class="dash-info">
					<div class="dash-widget-info">My Awards</div>
					<div class="dash-widget-count">{{info?.awards}}</div>
				</div>
				<div class="dash-widget-more">
					<router-link to="/ongoing-projects" class="d-flex">My Awards <i
							class="fas fa-arrow-right ms-auto"></i></router-link>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	data(){
		return({info:{}})
	},
	created() {
		let data = localStorage.getItem("currentUser")
        data = JSON.parse(data)
      
		this.http
			.post("users/poster-dashboard",{
				id:data.id
			}
			)
			.then((res) => {
				this.info = res.data;
				console.log("2290", this.info)
			});




	}
}
</script>