<template>
    <section class="section testimonial-section review">
        <div class="container">
            <!-- {{data}} -->
            <div class="row">
                <div class="col-12">
                    <div class="section-header text-center">
                        <div class="section-line"></div>
                        <h2 class="header-title">Top 25 Advisors</h2>
                        <p>High Performing advisors</p>
                    </div>
                </div>
            </div>
            <div id="testimonial-slider" class="testimonial-slider">

                <!-- Review Widget -->
                <div class="review-blog" v-for="item in data" :key="item?.id">
                    <div class="review-top d-flex align-items-center">
                        <div class="review-img">
                            <router-link to="#">
                                <img class="img-fluid" :src="loadImg(item?.img)"
                                alt="Post Image"></router-link>
                        </div>
                        <div class="review-info">
                            <h3>{{ item?.name }}</h3>
                            <!-- <h5>{{ item?.name1 }}</h5> -->
                            <div class="rating mapgridrating1">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="average-rating">{{ item?.point }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="review-content">
                        <p>{{ item.description }}</p>
                    </div>
                </div>
                <!-- / Review Widget -->

            </div>



            
        </div>
    </section>
</template>
<script>
import review from '../../../../assets/json/frontend/about/review.json'
const images = require.context('../../../../assets/img/review', false, /\.png$|\.jpg$/)
export default {

    created() {
        if ($('.testimonial-slider')) {
            $('.testimonial-slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        this.get();

    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
        get() {
            this.http
                .get("recordes/top-25", {

                })
                .then((res) => {
                    this.data = res.data;
                    console.log("99",this.data)
                });
        }
    },
    data() {
        return {
            data: []
            }
    }

}
</script>
    