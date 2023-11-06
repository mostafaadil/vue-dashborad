<template>
    <header class="header" v-if="currentPath == 'user-account-details'">
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

            </div>
            <ul class="nav header-navbar-rht">
                <!-- User Menu -->
                <li class="nav-item dropdown has-arrow main-drop account-item">
                    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img src="../../../assets/img/img-04.jpg" alt="">
                        </span>
                        <span>{{ this.name }}</span>
                    </a>
                    <div class="dropdown-menu emp">
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/user-account-details"><i
                                class="material-icons">verified_user</i> View profile</router-link>
                        <div class="drop-head">Projects Settings</div>
                        <router-link class="dropdown-item" to="/manage-projects"><i
                                class="material-icons">business_center</i> Projects</router-link>
                        <router-link class="dropdown-item" to="/favourites"><i class="material-icons">local_play</i>
                            Favourites</router-link>
                        <router-link class="dropdown-item" to="/review"><i class="material-icons">pie_chart</i>
                            Reviews</router-link>
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/profile-settings"> <i class="material-icons">settings</i>
                            Profile Settings</router-link>
                        <router-link class="dropdown-item" to="/"><i class="material-icons">power_settings_new</i>
                            Logout</router-link>
                    </div>
                </li>
                <!-- /User Menu -->
                <li><router-link to="/post-project" class="login-btn">Post a Project </router-link></li>
            </ul>
        </nav>
    </header>
    <header class="header header-bg" v-else>
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

            </div>
            <ul class="nav header-navbar-rht">
                <!-- User Menu -->
                <li class="nav-item dropdown has-arrow main-drop account-item">
                    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img src="../../../assets/img/img-04.jpg" alt="">
                        </span>
                        <span>{{ this.name }}</span>
                    </a>
                    <div class="dropdown-menu emp">
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/user-account-details"><i
                                class="material-icons">verified_user</i> View profile</router-link>
                        <div class="drop-head">Projects Settings</div>
                        <router-link class="dropdown-item" to="/manage-projects"><i
                                class="material-icons">business_center</i> Projects</router-link>
                        <router-link class="dropdown-item" to="/favourites"><i class="material-icons">local_play</i>
                            Favourites</router-link>
                        <router-link class="dropdown-item" to="/review"><i class="material-icons">pie_chart</i>
                            Reviews</router-link>
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/profile-settings"> <i class="material-icons">settings</i>
                            Profile Settings</router-link>
                        <router-link class="dropdown-item" to="/"><i class="material-icons">power_settings_new</i>
                            Logout</router-link>
                    </div>
                </li>
                <!-- /User Menu -->
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    data() {
        return ({ name: "" })
    },
    created() {
        let data = localStorage.getItem("currentUser")
        data = JSON.parse(data)
        console.log("2027", data);
        this.name = data?.name
        console.log
    },
   
}
</script>