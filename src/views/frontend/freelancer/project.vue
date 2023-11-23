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
                    <li class="breadcrumb-item" aria-current="page">Records</li>
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
                      <h4>Showing {{ page }} /
                        {{ tot_pages }} result</h4>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div class="d-flex justify-content-sm-end">
                    <div class="row" v-if="tot_pages > 1">
                      <div class="col-md-12">
                        <ul class="paginations freelancer">
                          <li class="page-item">{{ page }}/{{ tot_pages }}</li>

                          <li :class="{ disabled: parseInt(page) == 1 }"><a class="page-link" @click="get(page - 1)"
                              href="javascript:void(0);"><i class="fas fa-angle-left"></i>
                              Previous</a></li>
                          <li class="page-item" :class="{ active: p == page }">
                            <input class="form-control text-center" type="number" min="1" v-model="page" :max="tot_pages"
                              @input="get(parseInt(page))" />
                          </li>
                          <li class="page-item" :class="{ disabled: parseInt(page) == tot_pages }">
                            <a @click="get(page + 1)" href="javascript:void(0);">Next
                              <i class="fas fa-angle-right"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-1 col-xl-3 theiaStickySidebar" v-for="item in result" :key="item">

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
                      <div class="author-location">{{ item?.name }} <i
                          class="fas fa-check-circle text-success verified"></i></div>
                    </div>
                    <div class="freelance-info">
                      <h3><a href="javascript:void(0);">{{ item?.title }}</a></h3>
                      <div class="freelance-location mb-1"><i class="fas fa-clock"></i> Posted {{ item?.created }}
                      </div>
                      <!-- <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>{{ item?.un }}</div> -->
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

  <layout-footer />  <!-- /Footer -->
  <!-- /Main Wrapper -->
  
  <!-- /The Modal -->
</template>
<script>
export default {
  data() {
    return {
      page_name: "recordes",
      Recordes: [],
      states: [],
      status: 0,
      recordes: {},
      page: 1,
      limit: 10,
      tot_pages: 0,
      searchRecordes: null,
      RecordesSearchMode: false,
      searchModel: "",
      // state: state,
      info: "", result: []
    }
  },
  methods: {
    get(page) {
      this.info = this.$route.params.id
      if (page == undefined) {
        console.log("Iam working", typeof page, page)
      }
      else {
        this.http
          .post("recordes/advance-search", {
            col: this.info,
            limit: this.limit,
            page: page,
          })
          .then((res) => {
            if (res.status) {
              this.page = page;
              this.tot_pages = Math.ceil(res.tot / this.limit);
              this.result = res.data
            }
          });
      }
    }
  },
  created() {
    this.get(1);
  }
  //  console.log("80", this.info)
}

</script>
    