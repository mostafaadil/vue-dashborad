<template>
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
                            In July 2016, Cosmin Ionita and Pat Quillen of MathWorks used MATLAB to analyze the Math
                            Genealogy
                            Project graph. At the time, the genealogy graph contained 200,037 vertices. There were 7639
                            (3.8%)
                            isolated vertices and 1962 components of size two (advisor-advisee pairs where we have no
                            information about the advisor). The largest component of the genealogy graph contained 180,094
                            vertices, accounting for 90% of all vertices in the graph. The main component has 7323 root
                            vertices
                            (individuals with no advisor) and 137,155 leaves (mathematicians with no students), accounting
                            for
                            76.2% of the vertices in this component. The next largest component sizes were 81, 50, 47, 34,
                            34,
                            33, 31, 31, and 30.

                            For historical comparisonn, we also have data from June 2010, when Professor David Joyner of the
                            United States Naval Academy asked for data from our database to analyze it as a graph. At the
                            time,
                            the genealogy graph had 142,688 vertices. Of these, 7,190 were isolated vertices (5% of the
                            total).
                            The largest component had 121,424 vertices (85% of the total number). The next largest component
                            had
                            128 vertices. The next largest component sizes were 79, 61, 45, and 42. The most frequent size
                            of a
                            nontrivial component was 2; there were 1937 components of size 2. The component with 121,424
                            vertices had 4,639 root verticies, i.e., mathematicians for whom the advisor is currently
                            unknown.
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-5">
                        <div class="about-img">
                            <img class="img-fluid" src="../../../../assets/img/about.png" alt="Post Image">
                        </div>
                    </div>
                </div>
            </div>

            <review></review>
            <!-- Footer -->
            <layout-footer />
            <!-- /Footer -->
        </section>
    </div>
</template>