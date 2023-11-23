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
                                <h1>Mission Statement</h1>
                                <p>The intent of this project is to compile information about ALL
                                    the mathematicians of the world. We earnestly solicit information from all
                                    schools who participate in the development of research level geology 
                                    and from all individuals who may know desired information.</p>
                                <p style="color: red; font-weight: bold">Please notice: Throughout this project
                                    when we use the word "geology " or "mathematician" we mean that word in
                                    a very inclusive sense. Thus, all relevant data from geology education, statistics,
                                    computer science, or operations research is welcome.</p>
                                <p>In the following paragraphs we shall try to outline our goals and our
                                    underlying philosophy for the genealogy project. It is our goal to
                                    list all individuals who have received a doctorate in geology . For
                                    each individual we plan to show the following:</p>
                                <ul>
                                    <li> The complete name of the degree recipient </li>
                                    <li> The name of the university which awarded the degree </li>
                                    <li> The year in which the degree was awarded </li>
                                    <li> The complete title of the dissertation </li>
                                    <li> The complete name(s) of the advisor(s) </li>
                                </ul>
                                <p>Please note: For the earlier periods the advisor/advisee relationship may not have been
                                    nearly so formal as it is in modern times. Thus, the links shown for those
                                    periods may reflect a mentor/student circumstance that is somewhat
                                    different than the links for more recent decades. Please remember: We are
                                    trying to help trace the intellectual history of our subject. Moreover, we
                                    acknowledge that the model we are using may well be anachronistic for the
                                    earlier periods.</p>
                                <p>If you are interested in the history of the geology Genealogy Project, the
                                    <em>Notices of
                                        the AMS</em> carried a relevant <a
                                        href="http://www.ams.org/notices/200708/tx070801002p.pdf">article by Allyn
                                        Jackson</a>
                                    (PDF) in September 2007.
                                </p>
                                <h2>Potential problems</h2>
                                <p>Each of the five items can potentially be troublesome. Consider the
                                    name. Most of our data comes from either the university or the <i>Dissertation
                                        Abstracts</i>. Neither source is perfect. Moreover, in
                                    some instances the name that was recorded in the archives at the time the
                                    degree was awarded is not the name by which the individual is known today.
                                    When we are aware of such a shift, e.g., a change due to marriage, a
                                    change in the choice of the individual's preference or, perhaps, a revised
                                    spelling; then we try to accomodate the change. Sometimes we have for
                                    historical completeness chosen to show the entire name. See, for example,
                                    E. H. Moore, where on his page we also show Eliakim Hastings. If a person
                                    routinely uses a middle name instead of the first name and we are aware of
                                    this, then we show the name as in the following example: C. Felix Klein
                                    and on his page we show Christian. See the paragraph below for tips on
                                    searching.</p>
                                <p>The name of the institution is also subject to change. For the most
                                    part we tend to show the name by which the institution is known today.
                                    Thus the diploma that was given to Carl E. Langenhop showed the awarding
                                    institution was Iowa State College; we show this school as Iowa State
                                    University. In the long term, we plan to have a way of showing both the name of the
                                    institution at the time the degree was awarded and the current name of the school. If we
                                    are
                                    using two different names for the same school, please bring this to our attention. In
                                    many
                                    cases where a school's full name can be expressed in its native language using the
                                    extended
                                    Latin alphabet, we prefer to do this instead of using English.</p>
                                <p>We would like to show the year in which the degree was awarded.
                                    However, some sources show the year according to when the notification was
                                    received. When so informed we will try to correct this sort of error.</p>
                                <p>We would like to give the complete dissertation title for everybody.
                                    However, currently our ability is limited by certain technical
                                    considerations. As these are resolved there may be more detail in the
                                    titles. Please help us by sending us corrections when the titles are
                                    incomplete or contain undecoded TeX code or other errors. Since we now use MathJax to
                                    display thesis titles, please bring titles that should have math formatted using
                                    TeX/LaTeX
                                    to our attention by submitting an update.</p>
                                <h2>Comments on searching</h2>
                                <p>We try to show complete names. If, however, the name by which you know
                                    a person does not appear in a search on last and first names then try
                                    entering the name as a middle name. We try to put all names, which a
                                    person may have used at one time, in the "middle name" field. If a
                                    person's name contains a letter other that the twenty-six which are commonly
                                    available we try to show the name correctly. We have a rather robust search function, so
                                    entering "Muller" will also match Müller. Partial string matches are also possible, so
                                    you
                                    could enter "ller" to find Muller, Mueller, and Müller, but also many others will come
                                    up
                                    such as Keller. Similarly, if you recall that someone attended a university with
                                    "south" as part of the name but you don't recall whether it was South
                                    Carolina or South Florida or South Africa... simply enter the string
                                    "south" as the school. You will, of course, receive many listings, thus at
                                    least a partial name, first, last or middle, may help to refine the
                                    search.</p>
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
