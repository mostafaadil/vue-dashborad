

<script>
import Layout from "../../layouts/auth";
// import router from "@/router";
// import store from "@/state/store";
// var state = store._modules.root._children.auth.state;

import {
    authMethods,
    authFackMethods,
    notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Login component
 */
export default {
    setup() {
        return { v$: useVuelidate() };
    },
    page: {
        title: "Login",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
    },
    data() {
        return {
            user:{},
            submitted: false,
            authError: null,
            tryingToLogIn: false,
            isAuthError: false,
            user_role: [],
        };
    },
    validations: {
        user: {
            required: helpers.withMessage("Username is required", required),
        },
        pass: {
            required: helpers.withMessage("Password is required", required),
        },
    },
    computed: {
        ...mapState("authfack", ["status"]),
        notification() {
            return this.$store ? this.$store.state.notification : null;
        },
    },
    methods: {
        ...authMethods,
        ...authFackMethods,
        ...notificationMethods,
        // Try to log the user in with the username
        // and pass they provided.
        tryToLogIn() {
            this.submitted = true;
            console.log("working")
            // stop here if form is invalid
            this.v$.$touch();

            // if (this.v$.$invalid) {
                // return;
                // console.log("valid");
            // } else {
                console.log(this.user);
                this.http
                    .post("users/login", {user:this.user, lang: "en"})
                    .then((res) => {
                        console.log(res.status);
                        if (res.status == true) {
                            localStorage.setItem("currentUser", JSON.stringify(res.data))
                            console.log(res.data.id);
                            this.$router.push("/dashboard")
                           

                        }
                    });
            // }
        },
    },
    mounted() {
        console.log(this.$e.encrypt("Hello"));
    },
};
</script>

<template>
    <Layout>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card overflow-hidden">
                    <div class="bg-soft bg-primary">
                        <div class="row">
                            <div class="col-7">
                                <div class="text-primary p-4">
                                    <h5 class="text-primary">Welcome Back !</h5>
                                    <p>Sign in to Geologist studies dashboard.</p>
                                </div>
                            </div>
                            <div class="col-5 align-self-end">
                                <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div>
                            <router-link to="/">
                                <div class="avatar-md profile-user-wid mb-4">
                                    <span class="avatar-title rounded-circle bg-light">
                                        <img src="@/assets/images/logo.svg" alt height="34" />
                                    </span>
                                </div>
                            </router-link>
                        </div>
                        <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>
                        <div v-if="notification.message" :class="'alert ' + notification.type">
                            {{ notification.message }}
                        </div>

                        <b-form class="p-2" @submit.prevent="tryToLogIn">
                            <b-form-group class="mb-3" id="input-group-1" label="User Name" label-for="input-1">
                                <b-form-input id="input-1" v-model="user.name" type="text" placeholder="Enter  user name"
                                    :class="{
                                        'is-invalid': submitted && v$.user.$error,
                                    }"></b-form-input>

                            </b-form-group>

                            <b-form-group class="mb-3" id="input-group-2" label="Password" label-for="input-2">
                                <b-form-input id="input-2" v-model="user.pass" type="password" placeholder="Enter password"
                                    :class="{
                                        'is-invalid': submitted && v$.pass.$error,
                                    }"></b-form-input>
                                <div v-if="submitted && v$.pass.$error" class="invalid-feedback">
                                    <span v-if="v$.pass.required.$message">{{
                                        v$.pass.required.$message
                                    }}</span>
                                </div>
                            </b-form-group>
                            <b-form-checkbox class="form-check me-2 mt-0" id="customControlInline" name="checkbox-1"
                                value="accepted" unchecked-value="not_accepted">Remember me
                            </b-form-checkbox>
                            <div class="mt-3 d-grid">
                                <b-button type="submit" variant="primary" class="btn-block">Log In</b-button>
                            </div>
                        </b-form>
                    </div>
                    <!-- end card-body -->
                </div>
                <!-- end card -->


                <!-- end row -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row -->
    </Layout>
</template>

