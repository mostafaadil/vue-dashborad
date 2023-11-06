<template>
  <div>
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
                    <li class="breadcrumb-item"><router-link to="/index"><img src="../../../assets/img/home-icon.svg"
                          alt="Post Author"> Home</router-link></li>
                    <li class="breadcrumb-item" aria-current="page">Projects</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <!-- Page Content -->
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="sort-tab">
              <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div class="d-flex align-items-center">
                    <div class="freelance-view">
                      <h4>Showing {{ result?.length }} result</h4>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div class="d-flex justify-content-sm-end">
                    <div class="sort-by">
                      <select class="custom-select">
                        <option>Relevance</option>
                        <option>Rating</option>
                        <option>Popular</option>
                        <option>Latest</option>
                        <option>Free</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="row" v-for="data in result" :key="data">
            <div class="col-md-1 col-lg-1 col-xl-3 theiaStickySidebar">

              <!-- Search Filter -->

              <!-- /Search Filter -->

            </div>

            <div class="col-md-12 col-lg-8 col-xl-9">

              <div class="row">
                <!-- Project Content -->
                <div class="col-md-6 col-lg-12 col-xl-6">

                  <div class="freelance-widget widget-author">
                    <div class="freelance-content">
                      <a data-bs-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                      <div class="author-heading">
                        <div class="profile-img">
                          <a href="javascript:void(0);">
                            <img src="../../../assets/img/company/img-1.png" alt="author">
                          </a>
                        </div>
                        <div class="profile-name">
                          <div class="author-location">{{ data.name }} <i
                              class="fas fa-check-circle text-success verified"></i></div>
                        </div>
                        <div class="freelance-info">
                          <h3><a href="javascript:void(0);">{{ data.title }}</a></h3>
                          <div class="freelance-location mb-1"><i class="fas fa-clock"></i> Posted {{ data.created }}
                          </div>
                          <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>{{ data?.un }}</div>
                        </div>

                      </div>
                    </div>
                    <div class="cart-hover">
                      <!-- <router-link to="/project-details" class="btn-cart" tabindex="-1">Bid Now</router-link> -->
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
    <!-- The Modal -->
    <div class="modal fade" id="rating">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header d-block b-0 pb-0">
            <span class="modal-close float-end"><a href="javascript:void(0);" data-bs-dismiss="modal"
                aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
          </div>
          <div class="modal-body">
            <form>
              <div class="modal-info">
                <div class="text-center pt-0 mb-5">
                  <h3>Please login to Favourite Project</h3>
                </div>
                <div class="submit-section text-center">
                  <a data-bs-dismiss="modal" href="javascript:void(0);"
                    class="btn btn-primary black-btn click-btn">Cancel</a>
                  <router-link to="/project">
                    <button type="submit" class="btn btn-primary click-btn">Submit</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /The Modal -->
  </div>
</template>
<script>
export default {
  data() {
    return { info: "",result:[]}
  },
  created() {
    this.info = this.$route.params.id
    this.http
      .post("recordes/advance-search", {
        col: this.info,
      })
      .then((res) => {
       if (res.status) {
        this.result=res.data
       }
      });
  }
    //  console.log("80", this.info)
}

</script>
    