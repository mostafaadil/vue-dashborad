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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">{{ this.name }}</li>
										<li class="breadcrumb-item" aria-current="page">Dashboard</li>
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
							<div class="dashboard-sec">
								
                                <dashboardwidget></dashboardwidget>
								
								<!-- Chart Content -->
							
								<!-- /Chart Content -->
								
								<!-- Past Earnings -->
								<!-- <earningdashboard></earningdashboard> -->
								<!-- /Past Earnings -->
								
								
								
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
    import VueApexCharts from "vue3-apexcharts";
    export default {
        components: {
        apexchart: VueApexCharts,
      },
      created(){
        this.load_counter=localStorage.getItem(this.load_counter)
        let data =localStorage.getItem("currentUser")
        data=JSON.parse(data)
        console.log("2020",data);
        this.name = data?.name
        if(this.load_counter==0){
          this.load_counter++
          localStorage.setItem("load_counter",this.load_counter)
          location.reload()      

        }
        else{

        }

      }
,         mounted() { 

        },
         data: function() {
        return {
          name:{},
          load_counter:0,
             series: [85, 75, 60, 40],
              chartOptions: {
                chart: {
                  width: 297,
                  height: 250,
                  type: 'radialBar',
                },
                plotOptions: {
                  radialBar: {
                    dataLabels: {
                      name: {
                        fontSize: '22px',
                      },
                      value: {
                        fontSize: '16px',
                      },
                      total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return 249
                        }
                      }
                    }
                  }
                },
                colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
            labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
              },
            chartOptions3: {
               
               chart: {
              height: 360,
              type: 'line',       
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#FF5B37"],
            stroke: {
              curve: 'straight',
              width: [1]
            },
            markers: {
              size: 4,
              colors: ["#FF5B37"],
              strokeColors: "#FF5B37",
              strokeWidth: 1,
              hover: {
                size: 7,
              }
            },
            grid: {
                position: 'front',
                borderColor: '#ddd',
                strokeDashArray: 7,
                xaxis: {
                    lines: {
                      show: true
                    }
                }
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              lines: {
                show: false,
              }
            },
            yaxis: {
              lines: {
                show: true,
              }
            } 
         
              },
         series1: [{
               name: "profile view",
                data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350]
            }],
    
    
    
        chartOptions4: {
               
             chart: {         
              toolbar: {
                show: false
              },
              height: 250,
              type: 'radialBar',
            },
            plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '50%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
        labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: false,
          floating: true,
          fontSize: '16px',
          position: 'bottom',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
              },
         series2: [{
               series: [85, 75, 60, 40]
            }],
    
    
        }
    }
    }
    </script>
    