<template>
    <!-- Header -->
    <div class="main-wrapper">
        <!-- Header -->
        <layout-header />
        <!-- /Header -->

        <!-- Breadcrumb -->
        <breadcrumb></breadcrumb>


        <section class="section about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="about-content">
                            <div id="paddingWrapper">
                                <div id="paddingWrapper">


                                    <h1>Contact Us</h1>

                                    <p>To ensure that messages are routed to the correct individual, please complete the
                                        contact form below.</p>

                                    <div class="row">
                                        <form action="do-contact.php?PHPSESSID=qfput80u18cotcm54p9l760ue6" method="post"
                                            enctype="multipart/form-data">
                                            <label for="submitter">Your Name</label>
                                            <input class="form-control" type="text" size="37" maxlength="80" value=""
                                                name="submitter" id="submitter"><br>
                                            <label for="email">Your Email Address</label>
                                            <input class="form-control" type="text" size="37" maxlength="100" value=""
                                                name="email" id="email"><br>
                                            <label for="reason">What would you like to contact us about?</label>
                                            <select class="form-control" id="reason" name="reason"
                                                onchange="$('#formbody').load('contact/form.html #'+this.value); return false;">
                                                <option value=""> </option>
                                                <option value="newdata">Add/correct data about an existing entry</option>
                                                <option value="newstudent">Add a new entry to the database</option>
                                                <option value="delay">Previously-submitted data that is not yet online
                                                </option>
                                                <option value="duplicate">Report a duplicated entry</option>
                                                <option value="poster">Questions about a genealogy poster</option>
                                                <option value="data">Request access to data for research purposes</option>
                                                <option value="contact">Request contact information</option>
                                                <option value="thesis">Request a copy of a thesis</option>
                                                <option value="other">Other inquiry</option>
                                            </select><br>

                                            <div id="formbody">

                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="offset-lg-1 col-lg-5">
                        <div class="about-img">
                            <img class="img-fluid" src="../../../../assets/img/about.png" alt="Post Image">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <layout-footer />
        <!-- /Footer -->

    </div>
</template>
