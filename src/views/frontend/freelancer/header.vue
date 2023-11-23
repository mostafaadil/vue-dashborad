<template>
    <header class="header header-bg">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <router-link to="/index" class="navbar-brand logo">
                    <img src="../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                </router-link>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <router-link to="/index" class="menu-logo">
                        <img src="../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                    </router-link>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <ul class="main-nav">
                    <li class="has-submenu" :class="homeMenu ? 'active' : 'notactive'">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About Us </router-link>
                    </li>
                    <li>
                        <router-link to="/posters">Posters</router-link>
                    </li>
                    <li>
                        <router-link to="/submit-data">Submit Data </router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us">Contact Us </router-link>
                    </li>
                    <li>
                        <router-link to="/extrema">Extrema </router-link>
                    </li>

                    <li>
                        <router-link to="/mission">Mission </router-link>
                    </li>
                    <li>
                        <router-link to="/faq">Faq</router-link>
                    </li>
                    <li>
                        <router-link to="/admin/login">Admin</router-link>
                    </li>
                </ul>
                   
                </ul>
            </div>		 
            <ul class="nav header-navbar-rht">	
                <li class="nav-item dropdown account-item">
                    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img src="../../../assets/img/user/avatar-1.jpg" alt="">
                        </span>
                        <span>George</span>
                    </a>
                    <div class="dropdown-menu emp">
                        <div class="drop-head">Account Details</div>	
                        <router-link class="dropdown-item" to="/freelancer-profile"><i class="material-icons">verified_user</i> View profile</router-link>
                        <div class="drop-head">Projects Settings</div>	
                        <router-link class="dropdown-item" to="/freelancer-project-proposals"><i class="material-icons">business_center</i> Projects</router-link>
                        <router-link class="dropdown-item" to="/freelancer-bookmarks"><i class="material-icons">local_play</i> Bookmarks</router-link>
                        <router-link class="dropdown-item" to="/freelancer-review"><i class="material-icons">pie_chart</i> Reviews</router-link>
                        <div class="drop-head">Financial Settings</div>
                        <a class="dropdown-item bal" href="javascript:void(0);">Balance <span class="amt">₹0.00 INR</span></a>
                        <router-link class="dropdown-item" to="/freelancer-withdraw-money"><i class="material-icons">wifi_tethering</i> Withdraw funds</router-link>
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/freelancer-profile-settings"> <i class="material-icons">settings</i> Profile Settings</router-link>
                        <router-link class="dropdown-item" to="/"><i class="material-icons">power_settings_new</i> Logout</router-link>
                    </div>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>

export default {
    mounted() {
        $(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".header").removeClass("sticky");
		} else {
			$(".header").addClass("sticky");
		}
	});
        // Search Bar
    
    $(document).ready(function() {
        $(".searchbar .fa-search").click(function() {
            $(".togglesearch").toggle();
            $(".top-search").focus();
        });
    });
        // Sticky Menu
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 70) {
                $(".min-header").addClass("sticky");
            }
            else{
                $(".min-header").removeClass("sticky");     
            }
    })

        $('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

        $(document).on('click', '#mobile_btn', function() {
            $('main-wrapper').toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            return false;
	    });
	
        $(document).on('click', '.sidebar-overlay', function() {
            $('html').removeClass('menu-opened');
            $(this).removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
        $('.main-nav > li .submenu li.sub-menu').on('click', function(e) {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
		$('.main-nav li .home-nav').click(function(){
            $("html").removeClass('menu-opened');         
            $(".sidebar-overlay").removeClass('opened');
        }); 
        $(".categories_title").on("click", function() {
            $(this).toggleClass('active');
            $('.categories_menu_toggle').slideToggle('medium');
        });
        $(document).on('click', '#menu_close', function() {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
    },
    computed: {
       currentPath() {
           return this.$route.name
       },
       homeMenu() {
           return this.$route.name == 'index' || this.$route.name == 'index-two' || this.$route.name == 'index-three' || this.$route.name == 'index-four' || this.$route.name == 'index-five';
       },
       patientsMenu() {
           return this.$route.name == 'favourites-list' ||this.$route.name == 'delete-account' || this.$route.name == 'completed-projects' || this.$route.name == 'change-password' || this.$route.name == 'cancelled-projects' || this.$route.name == 'developer' || this.$route.name == 'withdraw-money' || this.$route.name == 'view-project-detail' || this.$route.name == 'transaction-history' || this.$route.name == 'project-tasks' || this.$route.name == 'project-proposals'  || this.$route.name == 'project-payment' || this.$route.name == 'pending-projects' || this.$route.name == 'ongoing-projects' || this.$route.name == 'invited-freelancer' || this.$route.name == 'files' || this.$route.name == 'completed-projects' || this.$route.name == 'cancelled-projects' || this.$route.name == 'dashboard'  || this.$route.name == 'manage-projects'     || this.$route.name == 'favourites'     || this.$route.name == 'membership-plans'     || this.$route.name == 'milestones'    || this.$route.name == 'chats'    || this.$route.name == 'review'    || this.$route.name == 'deposit-funds'    || this.$route.name == 'verify-identity'    || this.$route.name == 'profile-settings';
       },
       freelancerMenu() {
           return this.$route.name == 'freelancer-invitations' || this.$route.name == 'freelancer-transaction-history' || this.$route.name == 'freelancer-profile' || this.$route.name == 'freelancer-portfolio' || this.$route.name == 'freelancer-ongoing-projects' || this.$route.name == 'freelancer-delete-account' || this.$route.name == 'freelancer-completed-projects' || this.$route.name == 'freelancer-cancelled-projects' || this.$route.name == 'developer-profile' || this.$route.name == 'developer-details' || this.$route.name == 'project' || this.$route.name == 'freelancer-cancelled-projects' || this.$route.name == 'project-details'   || this.$route.name == 'freelancer-dashboard'        || this.$route.name == 'freelancer-project-proposals'     || this.$route.name == 'freelancer-favourites'     || this.$route.name == 'freelancer-membership'     || this.$route.name == 'freelancer-change-password'     || this.$route.name == 'freelancer-chats'     || this.$route.name == 'freelancer-review'     || this.$route.name == 'freelancer-withdraw-money'     || this.$route.name == 'freelancer-verify-identity'    || this.$route.name == 'freelancer-profile-settings';
       },
       pagesMenu() {
           return this.$route.name == 'freelancer-invoices' || this.$route.name == 'about' || this.$route.name == 'blank-page'    || this.$route.name == '404-page'   || this.$route.name == 'user-account-details'        || this.$route.name == 'login'     || this.$route.name == 'register'     || this.$route.name == 'forgot-password';
       },
       BlogMenu() {
           return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid'   || this.$route.name == 'blog-details';
       },
   },
}
</script>