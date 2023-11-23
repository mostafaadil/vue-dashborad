<template>
    <div class="home-page">
        <!-- Main Wrapper -->
        <div class="main-wrapper">
            <!-- Header -->
            <layout-header />
            <!-- /Header -->

            <!-- Home Banner -->
            <section class="section home-banner row-middle">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8 col-lg-7">
                            <div class="banner-content aos" data-aos="fade-up">
                                <div class="rating d-flex mapgridrating1">
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <h5>Trused by over 2M+ users</h5>
                                </div>
                                <h5>A service of the NDSU Department of geology , in association with the American
                                    Geology Society.</h5>

                                <form class="form" @submit.prevent="searchInfo()">
                                    <div class="form-inner">
                                        <div class="input-group">

                                            <input type="text" v-model="search.col" class="form-control"
                                                placeholder="Search here">
                                            <button class="btn btn-primary sub-btn" type="submit">Search Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-5">
                            <div class="banner-img aos" data-aos="fade-up">
                                <img src="../../assets/img/banner-img.png" class="img-fluid" alt="banner">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <review></review>



            <!-- / News -->

            <!-- Footer -->
            <layout-footer />
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>
<script>
import AOS from 'aos';
export default {
    data() {
        return ({ search: {} })
    },
    methods: {
        searchInfo() {
            console.log("ready to search")

            this.$router.push("/project/" + this.search.col)


        },

        mounted() {

            if (localStorage.getItem('admin_reloaded')) {
                // The page was just admin_reloaded. Clear the value from local storage
                // so that it will reload the next time this page is visited.
                localStorage.removeItem('admin_reloaded');
            } else {
                // Set a flag so that we know not to reload the page twice.
                localStorage.setItem('admin_reloaded', '1');
                location.reload();
            }
            localStorage.removeItem("currentUser")

            if ($('.main-wrapper .aos').length > 0) {
                AOS.init({
                    duration: 1200,
                    once: true,
                });
            }


            $(document).on('click', '.searchbar .fa-search', function () {
                $(".togglesearch").toggle();
                $(".top-search").focus();
            });
            var maxLength = 100;
            $('#review_desc').on('keyup change', function () {
                var length = $(this).val().length;
                length = maxLength - length;
                $('#chars').text(length);
            });
            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
            // Add More Hours

            $(".hours-info").on('click', '.trash', function () {
                $(this).closest('.hours-cont').remove();
                return false;
            });

            $(".add-hours").on('click', function () {

                var hourscontent = '<div class="row form-row hours-cont">' +
                    '<div class="col-12 col-md-10">' +
                    '<div class="row form-row">' +
                    '<div class="col-12 col-md-6">' +
                    '<div class="form-group">' +
                    '<label>Start Time</label>' +
                    '<select class="form-control">' +
                    '<option>-</option>' +
                    '<option>12.00 am</option>' +
                    '<option>12.30 am</option>' +
                    '<option>1.00 am</option>' +
                    '<option>1.30 am</option>' +
                    '</select>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-12 col-md-6">' +
                    '<div class="form-group">' +
                    '<label>End Time</label>' +
                    '<select class="form-control">' +
                    '<option>-</option>' +
                    '<option>12.00 am</option>' +
                    '<option>12.30 am</option>' +
                    '<option>1.00 am</option>' +
                    '<option>1.30 am</option>' +
                    '</select>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
                    '</div>';

                $(".hours-info").append(hourscontent);
                return false;
            });
            function resizeInnerDiv() {
                var height = $(window).height();
                var header_height = $(".header").height();
                var footer_height = $(".footer").height();
                var setheight = height - header_height;
                var trueheight = setheight - footer_height;
                $(".content").css("min-height", trueheight);
            }

            if ($('.content').length > 0) {
                resizeInnerDiv();
            }

            $(window).on('resize', function () {
                if ($('.content').length > 0) {
                    resizeInnerDiv();
                }
            });
            var chatAppTarget = $('.chat-window');
            (function () {
                if ($(window).width() > 991)
                    chatAppTarget.removeClass('chat-slide');

                $(document).on("click", ".chat-window .chat-users-list a.media", function () {
                    if ($(window).width() <= 991) {
                        chatAppTarget.addClass('chat-slide');
                    }
                    return false;
                });
                $(document).on("click", "#back_user_list", function () {
                    if ($(window).width() <= 991) {
                        chatAppTarget.removeClass('chat-slide');
                    }
                    return false;
                });
            })();
            $(document).on('click', '.select-group .select-item .service-item', function () {
                $('.selected .service-item .fa').removeClass('fa-check');
                $('.select-item .service-item').removeClass('selected');
                $(this).addClass('selected');
            });
            $(document).on('click', '.readmore', function () {
                var dots = document.getElementById("dots");
                var moreText = document.getElementById("more");
                var btnText = document.getElementById("myBtn");

                if (dots.style.display === "none") {
                    dots.style.display = "inline";
                    btnText.innerHTML = "Read more";
                    moreText.style.display = "none";
                } else {
                    dots.style.display = "none";
                    btnText.innerHTML = "Read less";
                    moreText.style.display = "inline";
                }
            });
            if ($('#store').length > 0) {
                document.getElementById('store').storeID.onchange = function () {
                    var newaction = this.value;
                    document.getElementById('store').action = newaction;
                }
            };
            // Edit Experiance

            $('#edit_experiance').on('click', function () {
                $('.pro-new').css('display', 'block');
                $('.pro-text').css('display', 'none');
            });

            $('.profile-cancel-btn').on('click', function () {
                $('.pro-new').css('display', 'none');
                $('.pro-text').css('display', 'block');
            });

            // Overview
            $('#edit_overview').on('click', function () {
                $('.pro-new1').css('display', 'block');
                $('.pro-text1').css('display', 'none');
            });

            $('.profile-cancel-btn').on('click', function () {
                $('.pro-new1').css('display', 'none');
                $('.pro-text1').css('display', 'block');
            });

            // Overview

            $('#edit_education').on('click', function () {
                $('.pro-new2').css('display', 'block');
                $('.pro-text2').css('display', 'none');
            });

            $('.profile-cancel-btn').on('click', function () {
                $('.pro-new2').css('display', 'none');
                $('.pro-text2').css('display', 'block');
            });

            $('#edit_name').on('click', function () {
                $('.pro-new3').css('display', 'block');
                $('.pro-text3').css('display', 'none');
            });

            $('.profile-cancel-btn').on('click', function () {
                $('.pro-new3').css('display', 'none');
                $('.pro-text3').css('display', 'block');
            });

            if ($('.testimonial-slider').length > 0) {
                $('.testimonial-slider').slick({
                    infinite: true,
                    slidesToShow: 4,
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


            if ($('.developer-slider').length > 0) {
                $('.developer-slider').slick({
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








            if ($('.datatable').length > 0) {
                $('.datatable').DataTable({
                    "bInfo": false,
                    "bSort": false
                });
            }
            if ($('.select').length > 0) {
                $('.select').select2({
                    minimumResultsForSearch: -1,
                    width: '100%'
                });
            }
            $(window).on('scroll', function () {
                var scroll = $(window).scrollTop();
                if (scroll < 100) {
                    $(".header").removeClass("sticky");
                } else {
                    $(".header").addClass("sticky");
                }
            });

        },
    }

}
</script>