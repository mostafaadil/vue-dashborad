<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <perfect-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                       
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/countries' || currentPath == '/admin/sub-category' }">
                            <router-link to="/admin/index"><i data-feather="copy"></i>
                                <span>Dashboard</span></router-link>
                        </li>
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/countries' || currentPath == '/admin/sub-category' }">
                            <router-link to="/admin/countries"><i data-feather="copy"></i>
                                <span>Countries</span></router-link>
                        </li>
                        <li v-bind:class="{ 'active': currentPath == '/admin/projects' }">
                            <router-link to="/admin/states"><i data-feather="database"></i>
                                <span>States</span></router-link>
                        </li>
                        <li v-bind:class="{ 'active': currentPath == '/admin/posters' }">
                            <router-link to="/admin/posters"><i data-feather="database"></i>
                                <span>Posters</span></router-link>
                        </li>
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/user-suspended' || currentPath == '/admin/users' || currentPath == '/admin/user-profile' || currentPath == '/admin/user-inactive' || currentPath == '/admin/user-administrator' || currentPath == '/admin/user-active' || currentPath == '/admin/activities' || currentPath == '/admin/profile-transactions' }">
                            <router-link to="/admin/cities"><i data-feather="users"></i>
                                <span>Cities</span></router-link>
                        </li>
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/deposit-pending' || currentPath == '/admin/deposit-hold' || currentPath == '/admin/deposit' || currentPath == '/admin/deposit-cancelled' || currentPath == '/admin/deposit-completed' }">
                            <router-link to="/admin/awards"><i data-feather="user-check"></i>
                                <span>Awards</span></router-link>
                        </li>
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/deposit-pending' || currentPath == '/admin/deposit-hold' || currentPath == '/admin/deposit' || currentPath == '/admin/deposit-cancelled' || currentPath == '/admin/deposit-completed' }">
                            <router-link to="/admin/unvarsecites"><i data-feather="user-check"></i>
                                <span>Universities</span></router-link>
                        </li>
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/withdrawn-pending' || currentPath == '/admin/withdrawn-completed' || currentPath == '/admin/completed' || currentPath == '/admin/withdrawn' || currentPath == '/admin/withdrawn-cancelled' }">
                            <router-link to="/admin/recordes"><i data-feather="user-check"></i>
                                <span>Records</span></router-link>
                        </li>
                        <li
                            v-bind:class="{ 'active': currentPath == '/admin/transaction-withdraw' || currentPath == '/admin/transaction-pending' || currentPath == '/admin/transaction-onhold' || currentPath == '/admin/transaction-deposit' || currentPath == '/admin/transaction' || currentPath == '/admin/transaction-completed' }">
                            <router-link to="/admin/users"><i data-feather="clipboard"></i>
                                <span>users</span></router-link>
                        </li>
                       
                    </ul>
                </div>
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import feather from 'feather-icons'
export default {
    components: {
        PerfectScrollbar
    },
    mounted() {

        feather.replace()
        $('#sidebar-menu a').on('click', function (e) {
            if ($(this).parent().hasClass('submenu')) {
                e.preventDefault();
            }
            if (!$(this).hasClass('subdrop')) {
                $('ul', $(this).parents('ul:first')).slideUp(350);
                $('a', $(this).parents('ul:first')).removeClass('subdrop');
                $(this).next('ul').slideDown(350);
                $(this).addClass('subdrop');
            } else if ($(this).hasClass('subdrop')) {
                $(this).removeClass('subdrop');
                $(this).next('ul').slideUp(350);
            }
        });

        $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');



        $(document).on('mouseover', function (e) {
            e.stopPropagation();
            if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                var targ = $(e.target).closest('.sidebar').length;
                if (targ) {
                    $('body').addClass('expand-menu');
                    $('.subdrop + ul').slideDown();
                } else {
                    $('body').removeClass('expand-menu');
                    $('.subdrop + ul').slideUp();
                }
                return false;
            }
        });

    },
    computed: {
        currentPath() {
            return this.$route.name;
        },
        settingsPath() {
            return this.$route.name == 'settings' || this.$route.name == 'preferences' || this.$route.name == 'tax-types' || this.$route.name == 'expense-category' || this.$route.name == 'notifications' || this.$route.name == 'change-password' || this.$route.name == 'delete-account'
        }
    },
    data() {
        return {
            settings: {
                suppressScrollX: true,
            },
            activeClass: 'active',
        };


        //  isactive : true
    },
    methods: {
        scrollHanle(evt) {
            console.log(evt)
        }
    },
}
</script>
<style>.scroll-area {
    position: relative;
    margin: auto;
    height: calc(100vh - 60px);
    background-color: transparent !important;
}</style>
