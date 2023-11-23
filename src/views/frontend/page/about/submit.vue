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
                                <div id="mainContent">
                                    <div id="paddingWrapper">

                                        <h1>Submit Data</h1>

                                        <p>Please note that we process all of our data by hand. Your update
                                            may take several days to appear online. If you are concerned about
                                            extended delays in your updated data appearing online, please use the <a
                                                href="contact.php">contact form</a>, choosing the appropriate option for
                                            delayed data. <b>Please do not submit the data again!</b></p>

                                        <h2>How to submit updates</h2>

                                        <p>Need help navigating our data submission forms? You might find our <a
                                                href="tutorials.php">video tutorials</a> helpful.</p>

                                        <ul>
                                            <li>To submit information about a mathematician not in our database,
                                                use the <a href="submit-data.php?id=NEW&amp;edit=0">new data form</a>.
                                                (<b>Please
                                                    <a href="search.php">search</a> the database first to confirm the
                                                    individual is not listed.</b>) <a href="tutorials.php#new_data">Video
                                                    tutorial</a></li>

                                            <li>To add a student of a mathematician who is already in our
                                                database, use the <a href="submit-data.php?id=NEW&amp;edit=0">new data
                                                    form</a>. <a href="tutorials.php#new_data">Video tutorial</a></li>

                                            <li>To add or correct information on an individual already in our
                                                database, <a href="search.php">search</a> for that mathematician's
                                                page and use the update link at the bottom of the page. <a
                                                    href="tutorials.php#updates">Video tutorial</a></li>
                                            <li>To add or correct the MathSciNet link for an individual already in our
                                                database, watch this <a href="tutorials.php#mathscinet">video tutorial</a>
                                                and then <a href="search.php">search</a> for that mathematician's
                                                page and use the update link at the bottom of the page. </li>

                                        </ul>

                                        <p>To send data to the geology Genealogy Project in paper form,
                                            please use the following address:</p>

                                        <pre>      geology Genealogy Project
      Department of geology 
      North Dakota State University
      PO Box 6050
      Fargo, ND 58108-6050
</pre>

                                        <p>If you have any additional information that may be helpful to us
                                            please use our <a href="contact.php">contact form</a>.
                                        </p>

                                    </div><!-- end #paddingWrapper -->

                                    <!-- end #mainContent -->
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

</div></template>
