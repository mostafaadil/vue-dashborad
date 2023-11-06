<template >
    <div class="main-wrapper">

        <!-- Header -->
        <headerPage />
        <!-- /Header -->

        <!-- Sidebar -->
        <SideBarView />
        <!-- /Sidebar -->


        <!-- Page Wrapper -->
        <div class="page-wrapper" style="min-height: 284px;">
            <div class="content container-fluid">

                <!-- Page Header -->
                <div class="page-header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="page-title">Dashboard</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <!-- /Page Header -->


                <div class="row">
                    <div class="col-md-8">
                        <!--/Wizard-->
                        <div class="row">
                            <div class="col-md-4 d-flex">
                                <div class="card wizard-card flex-fill">
                                    <div class="card-body">
                                        <p class="text-primary mt-0 mb-2">Users</p>
                                        <h5>1682</h5>
                                        <p><a href="users.html">view details</a></p>
                                        <span class="dash-widget-icon bg-1">
                                            <i class="fas fa-users"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex">
                                <div class="card wizard-card flex-fill">
                                    <div class="card-body">
                                        <p class="text-primary mt-0 mb-2">Completed Projects</p>
                                        <h5>15k</h5>
                                        <p><a href="projects.html">view details</a></p>

                                        <span class="dash-widget-icon bg-1">
                                            <i class="fas fa-th-large"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex">
                                <div class="card wizard-card flex-fill">
                                    <div class="card-body">
                                        <p class="text-primary mt-0 mb-2">Active Projects</p>
                                        <h5>1568</h5>
                                        <p><a href="projects.html">view details</a></p>

                                        <span class="dash-widget-icon bg-1">
                                            <i class="fas fa-bezier-curve"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--/Wizard-->
                        <div class="row">
                            <div class="col-lg-12 d-flex">
                                <div class="card w-100">
                                    <div class="card-body pt-0 pb-2">
                                        <div class="card-header">
                                            <h5 class="card-title">Over view</h5>
                                        </div>
                                        <div id="chart" class="mt-4" style="min-height: 350px;">
                                            <div id="apexchartsyahfzjuk"
                                                class="apexcharts-canvas apexchartsyahfzjuk apexcharts-theme-light"
                                                style="width: 641px; height: 335px;"><svg id="SvgjsSvg1119" width="641"
                                                    height="335" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns:svgjs="http://svgjs.dev"
                                                    class="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS"
                                                    transform="translate(0, 0)" style="background: transparent;">
                                                    <foreignObject x="0" y="0" width="641" height="335">
                                                        <div class="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style="inset: auto 0px 1px; position: absolute; max-height: 167.5px;">
                                                            <div class="apexcharts-legend-series" style="margin: 2px 5px;"
                                                                rel="1" seriesname="freelancexDevelopers"
                                                                data:collapsed="false"><span
                                                                    class="apexcharts-legend-marker"
                                                                    style="background: rgb(255, 91, 55); color: rgb(255, 91, 55); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                                                    rel="1" data:collapsed="false"></span><span
                                                                    class="apexcharts-legend-text"
                                                                    style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                                                    rel="1" i="0" data:default-text="freelance%20Developers"
                                                                    data:collapsed="false">freelance Developers</span></div>
                                                            <div class="apexcharts-legend-series" style="margin: 2px 5px;"
                                                                rel="2" seriesname="Developersxperxproject"
                                                                data:collapsed="false"><span
                                                                    class="apexcharts-legend-marker"
                                                                    style="background: rgb(255, 184, 168); color: rgb(255, 184, 168); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                                                    rel="2" data:collapsed="false"></span><span
                                                                    class="apexcharts-legend-text"
                                                                    style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                                                    rel="2" i="1"
                                                                    data:default-text="Developers%20per%20project"
                                                                    data:collapsed="false">Developers per project</span>
                                                            </div>
                                                            <div class="apexcharts-legend-series" style="margin: 2px 5px;"
                                                                rel="3" seriesname="completedxprojects"
                                                                data:collapsed="false"><span
                                                                    class="apexcharts-legend-marker"
                                                                    style="background: rgb(254, 176, 25); color: rgb(254, 176, 25); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"
                                                                    rel="3" data:collapsed="false"></span><span
                                                                    class="apexcharts-legend-text"
                                                                    style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                                                    rel="3" i="2" data:default-text="completed%20projects"
                                                                    data:collapsed="false">completed projects</span></div>
                                                        </div>
                                                        <style type="text/css">
                                                            .apexcharts-legend {
                                                                display: flex;
                                                                overflow: auto;
                                                                padding: 0 10px;
                                                            }

                                                            .apexcharts-legend.apx-legend-position-bottom,
                                                            .apexcharts-legend.apx-legend-position-top {
                                                                flex-wrap: wrap
                                                            }

                                                            .apexcharts-legend.apx-legend-position-right,
                                                            .apexcharts-legend.apx-legend-position-left {
                                                                flex-direction: column;
                                                                bottom: 0;
                                                            }

                                                            .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,
                                                            .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,
                                                            .apexcharts-legend.apx-legend-position-right,
                                                            .apexcharts-legend.apx-legend-position-left {
                                                                justify-content: flex-start;
                                                            }

                                                            .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,
                                                            .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
                                                                justify-content: center;
                                                            }

                                                            .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,
                                                            .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
                                                                justify-content: flex-end;
                                                            }

                                                            .apexcharts-legend-series {
                                                                cursor: pointer;
                                                                line-height: normal;
                                                            }

                                                            .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,
                                                            .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
                                                                display: flex;
                                                                align-items: center;
                                                            }

                                                            .apexcharts-legend-text {
                                                                position: relative;
                                                                font-size: 14px;
                                                            }

                                                            .apexcharts-legend-text *,
                                                            .apexcharts-legend-marker * {
                                                                pointer-events: none;
                                                            }

                                                            .apexcharts-legend-marker {
                                                                position: relative;
                                                                display: inline-block;
                                                                cursor: pointer;
                                                                margin-right: 3px;
                                                                border-style: solid;
                                                            }

                                                            .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,
                                                            .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
                                                                display: inline-block;
                                                            }

                                                            .apexcharts-legend-series.apexcharts-no-click {
                                                                cursor: auto;
                                                            }

                                                            .apexcharts-legend .apexcharts-hidden-zero-series,
                                                            .apexcharts-legend .apexcharts-hidden-null-series {
                                                                display: none !important;
                                                            }

                                                            .apexcharts-inactive-legend {
                                                                opacity: 0.45;
                                                            }
                                                        </style>
                                                    </foreignObject>
                                                    <rect id="SvgjsRect1125" width="0" height="0" x="0" y="0" rx="0" ry="0"
                                                        opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"
                                                        fill="#fefefe"></rect>
                                                    <g id="SvgjsG1204" class="apexcharts-yaxis" rel="0"
                                                        transform="translate(20, 0)">
                                                        <g id="SvgjsG1205" class="apexcharts-yaxis-texts-g"><text
                                                                id="SvgjsText1207"
                                                                font-family="Helvetica, Arial, sans-serif" x="20" y="31.4"
                                                                text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                                font-weight="400" fill="#373d3f"
                                                                class="apexcharts-text apexcharts-yaxis-label "
                                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                                <tspan id="SvgjsTspan1208">120</tspan>
                                                                <title>120</title>
                                                            </text><text id="SvgjsText1210"
                                                                font-family="Helvetica, Arial, sans-serif" x="20" y="94.95"
                                                                text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                                font-weight="400" fill="#373d3f"
                                                                class="apexcharts-text apexcharts-yaxis-label "
                                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                                <tspan id="SvgjsTspan1211">90</tspan>
                                                                <title>90</title>
                                                            </text><text id="SvgjsText1213"
                                                                font-family="Helvetica, Arial, sans-serif" x="20" y="158.5"
                                                                text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                                font-weight="400" fill="#373d3f"
                                                                class="apexcharts-text apexcharts-yaxis-label "
                                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                                <tspan id="SvgjsTspan1214">60</tspan>
                                                                <title>60</title>
                                                            </text><text id="SvgjsText1216"
                                                                font-family="Helvetica, Arial, sans-serif" x="20"
                                                                y="222.04999999999998" text-anchor="end"
                                                                dominant-baseline="auto" font-size="11px" font-weight="400"
                                                                fill="#373d3f"
                                                                class="apexcharts-text apexcharts-yaxis-label "
                                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                                <tspan id="SvgjsTspan1217">30</tspan>
                                                                <title>30</title>
                                                            </text><text id="SvgjsText1219"
                                                                font-family="Helvetica, Arial, sans-serif" x="20"
                                                                y="285.59999999999997" text-anchor="end"
                                                                dominant-baseline="auto" font-size="11px" font-weight="400"
                                                                fill="#373d3f"
                                                                class="apexcharts-text apexcharts-yaxis-label "
                                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                                <tspan id="SvgjsTspan1220">0</tspan>
                                                                <title>0</title>
                                                            </text></g>
                                                    </g>
                                                    <g id="SvgjsG1121" class="apexcharts-inner apexcharts-graphical"
                                                        transform="translate(50, 30)">
                                                        <defs id="SvgjsDefs1120">
                                                            <clipPath id="gridRectMaskyahfzjuk">
                                                                <rect id="SvgjsRect1130" width="589" height="274.2" x="-6"
                                                                    y="-10" rx="0" ry="0" opacity="1" stroke-width="0"
                                                                    stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMaskyahfzjuk"></clipPath>
                                                            <clipPath id="nonForecastMaskyahfzjuk"></clipPath>
                                                            <clipPath id="gridRectMarkerMaskyahfzjuk">
                                                                <rect id="SvgjsRect1131" width="585" height="258.2" x="-2"
                                                                    y="-2" rx="0" ry="0" opacity="1" stroke-width="0"
                                                                    stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                            </clipPath>
                                                            <linearGradient id="SvgjsLinearGradient1136" x1="0" y1="0"
                                                                x2="0" y2="1">
                                                                <stop id="SvgjsStop1137" stop-opacity="0.65"
                                                                    stop-color="rgba(255,91,55,0.65)" offset="0"></stop>
                                                                <stop id="SvgjsStop1138" stop-opacity="0.5"
                                                                    stop-color="rgba(255,173,155,0.5)" offset="1"></stop>
                                                                <stop id="SvgjsStop1139" stop-opacity="0.5"
                                                                    stop-color="rgba(255,173,155,0.5)" offset="1"></stop>
                                                            </linearGradient>
                                                            <linearGradient id="SvgjsLinearGradient1145" x1="0" y1="0"
                                                                x2="0" y2="1">
                                                                <stop id="SvgjsStop1146" stop-opacity="0.65"
                                                                    stop-color="rgba(255,184,168,0.65)" offset="0"></stop>
                                                                <stop id="SvgjsStop1147" stop-opacity="0.5"
                                                                    stop-color="rgba(255,220,212,0.5)" offset="1"></stop>
                                                                <stop id="SvgjsStop1148" stop-opacity="0.5"
                                                                    stop-color="rgba(255,220,212,0.5)" offset="1"></stop>
                                                            </linearGradient>
                                                            <linearGradient id="SvgjsLinearGradient1154" x1="0" y1="0"
                                                                x2="0" y2="1">
                                                                <stop id="SvgjsStop1155" stop-opacity="0.65"
                                                                    stop-color="rgba(254,176,25,0.65)" offset="0"></stop>
                                                                <stop id="SvgjsStop1156" stop-opacity="0.5"
                                                                    stop-color="rgba(255,216,140,0.5)" offset="1"></stop>
                                                                <stop id="SvgjsStop1157" stop-opacity="0.5"
                                                                    stop-color="rgba(255,216,140,0.5)" offset="1"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                        <line id="SvgjsLine1126" x1="0" y1="0" x2="0" y2="254.2"
                                                            stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt"
                                                            class="apexcharts-xcrosshairs" x="0" y="0" width="1"
                                                            height="254.2" fill="#b1b9c4" filter="none" fill-opacity="0.9"
                                                            stroke-width="1"></line>
                                                        <line id="SvgjsLine1164" x1="0" y1="255.2" x2="0" y2="261.2"
                                                            stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <line id="SvgjsLine1165" x1="89.3846153846154" y1="255.2"
                                                            x2="89.3846153846154" y2="261.2" stroke="#e0e0e0"
                                                            stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <line id="SvgjsLine1166" x1="178.7692307692308" y1="255.2"
                                                            x2="178.7692307692308" y2="261.2" stroke="#e0e0e0"
                                                            stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <line id="SvgjsLine1167" x1="268.1538461538462" y1="255.2"
                                                            x2="268.1538461538462" y2="261.2" stroke="#e0e0e0"
                                                            stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <line id="SvgjsLine1168" x1="357.5384615384616" y1="255.2"
                                                            x2="357.5384615384616" y2="261.2" stroke="#e0e0e0"
                                                            stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <line id="SvgjsLine1169" x1="446.923076923077" y1="255.2"
                                                            x2="446.923076923077" y2="261.2" stroke="#e0e0e0"
                                                            stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <line id="SvgjsLine1170" x1="536.3076923076924" y1="255.2"
                                                            x2="536.3076923076924" y2="261.2" stroke="#e0e0e0"
                                                            stroke-dasharray="0" stroke-linecap="butt"
                                                            class="apexcharts-xaxis-tick"></line>
                                                        <g id="SvgjsG1160" class="apexcharts-grid">
                                                            <g id="SvgjsG1161" class="apexcharts-gridlines-horizontal">
                                                                <line id="SvgjsLine1172" x1="0" y1="63.55" x2="581"
                                                                    y2="63.55" stroke="#e0e0e0" stroke-dasharray="0"
                                                                    stroke-linecap="butt" class="apexcharts-gridline">
                                                                </line>
                                                                <line id="SvgjsLine1173" x1="0" y1="127.1" x2="581"
                                                                    y2="127.1" stroke="#e0e0e0" stroke-dasharray="0"
                                                                    stroke-linecap="butt" class="apexcharts-gridline">
                                                                </line>
                                                                <line id="SvgjsLine1174" x1="0" y1="190.64999999999998"
                                                                    x2="581" y2="190.64999999999998" stroke="#e0e0e0"
                                                                    stroke-dasharray="0" stroke-linecap="butt"
                                                                    class="apexcharts-gridline"></line>
                                                            </g>
                                                            <g id="SvgjsG1162" class="apexcharts-gridlines-vertical"></g>
                                                            <line id="SvgjsLine1177" x1="0" y1="254.2" x2="581" y2="254.2"
                                                                stroke="transparent" stroke-dasharray="0"
                                                                stroke-linecap="butt"></line>
                                                            <line id="SvgjsLine1176" x1="0" y1="1" x2="0" y2="254.2"
                                                                stroke="transparent" stroke-dasharray="0"
                                                                stroke-linecap="butt"></line>
                                                        </g>
                                                        <g id="SvgjsG1163" class="apexcharts-grid-borders">
                                                            <line id="SvgjsLine1171" x1="0" y1="0" x2="581" y2="0"
                                                                stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                                                class="apexcharts-gridline"></line>
                                                            <line id="SvgjsLine1175" x1="0" y1="254.2" x2="581" y2="254.2"
                                                                stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                                                class="apexcharts-gridline"></line>
                                                            <line id="SvgjsLine1203" x1="0" y1="255.2" x2="581" y2="255.2"
                                                                stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1"
                                                                stroke-linecap="butt"></line>
                                                        </g>
                                                        <g id="SvgjsG1132"
                                                            class="apexcharts-area-series apexcharts-plot-series">
                                                            <g id="SvgjsG1133" class="apexcharts-series" zIndex="0"
                                                                seriesName="freelancexDevelopers" data:longestSeries="true"
                                                                rel="1" data:realIndex="0">
                                                                <path id="SvgjsPath1140"
                                                                    d="M 0 254.2 L 0 188.53166666666667C21.903285326788517, 185.41714013091342, 97.0206460843663, 166.83206742076297, 134.07692307692307, 169.46666666666664S194.1644190509539, 198.70539826752147, 223.46153846153845, 194.88666666666666S283.7081180148415, 150.53980397749305, 312.84615384615387, 146.165S380.7476679261193, 178.59273203586883, 402.2307692307692, 165.23S469.9222474547034, 36.55881721491564, 491.6153846153846, 23.301666666666677S566.6198240771046, 39.63934390766577, 581, 42.366666666666674 L 581 254.2 L 0 254.2M 0 188.53166666666667z"
                                                                    fill="url(#SvgjsLinearGradient1136)" fill-opacity="1"
                                                                    stroke-opacity="1" stroke-linecap="butt"
                                                                    stroke-width="0" stroke-dasharray="0"
                                                                    class="apexcharts-area" index="0"
                                                                    clip-path="url(#gridRectMaskyahfzjuk)"
                                                                    pathTo="M 0 254.2 L 0 188.53166666666667C21.903285326788517, 185.41714013091342, 97.0206460843663, 166.83206742076297, 134.07692307692307, 169.46666666666664S194.1644190509539, 198.70539826752147, 223.46153846153845, 194.88666666666666S283.7081180148415, 150.53980397749305, 312.84615384615387, 146.165S380.7476679261193, 178.59273203586883, 402.2307692307692, 165.23S469.9222474547034, 36.55881721491564, 491.6153846153846, 23.301666666666677S566.6198240771046, 39.63934390766577, 581, 42.366666666666674 L 581 254.2 L 0 254.2M 0 188.53166666666667z"
                                                                    pathFrom="M -1 254.2 L -1 254.2 L 134.07692307692307 254.2 L 223.46153846153845 254.2 L 312.84615384615387 254.2 L 402.2307692307692 254.2 L 491.6153846153846 254.2 L 581 254.2">
                                                                </path>
                                                                <path id="SvgjsPath1141"
                                                                    d="M 0 188.53166666666667C21.903285326788517, 185.41714013091342, 97.0206460843663, 166.83206742076297, 134.07692307692307, 169.46666666666664S194.1644190509539, 198.70539826752147, 223.46153846153845, 194.88666666666666S283.7081180148415, 150.53980397749305, 312.84615384615387, 146.165S380.7476679261193, 178.59273203586883, 402.2307692307692, 165.23S469.9222474547034, 36.55881721491564, 491.6153846153846, 23.301666666666677S566.6198240771046, 39.63934390766577, 581, 42.366666666666674"
                                                                    fill="none" fill-opacity="1" stroke="#ff5b37"
                                                                    stroke-opacity="1" stroke-linecap="butt"
                                                                    stroke-width="4" stroke-dasharray="0"
                                                                    class="apexcharts-area" index="0"
                                                                    clip-path="url(#gridRectMaskyahfzjuk)"
                                                                    pathTo="M 0 188.53166666666667C21.903285326788517, 185.41714013091342, 97.0206460843663, 166.83206742076297, 134.07692307692307, 169.46666666666664S194.1644190509539, 198.70539826752147, 223.46153846153845, 194.88666666666666S283.7081180148415, 150.53980397749305, 312.84615384615387, 146.165S380.7476679261193, 178.59273203586883, 402.2307692307692, 165.23S469.9222474547034, 36.55881721491564, 491.6153846153846, 23.301666666666677S566.6198240771046, 39.63934390766577, 581, 42.366666666666674"
                                                                    pathFrom="M -1 254.2 L -1 254.2 L 134.07692307692307 254.2 L 223.46153846153845 254.2 L 312.84615384615387 254.2 L 402.2307692307692 254.2 L 491.6153846153846 254.2 L 581 254.2"
                                                                    fill-rule="evenodd"></path>
                                                                <g id="SvgjsG1134"
                                                                    class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                                    data:realIndex="0">
                                                                    <g class="apexcharts-series-markers">
                                                                        <circle id="SvgjsCircle1224" r="0" cx="0" cy="0"
                                                                            class="apexcharts-marker w0boi9elm no-pointer-events"
                                                                            stroke="#ffffff" fill="#ff5b37" fill-opacity="1"
                                                                            stroke-width="2" stroke-opacity="0.9"
                                                                            default-marker-size="0"></circle>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1142" class="apexcharts-series" zIndex="1"
                                                                seriesName="Developersxperxproject"
                                                                data:longestSeries="true" rel="2" data:realIndex="1">
                                                                <path id="SvgjsPath1149"
                                                                    d="M 0 254.2 L 0 230.8983333333333C20.130170126196585, 224.21940158644284, 100.2916013253556, 197.2225283456189, 134.07692307692307, 186.41333333333333S193.66666666666666, 158.875, 223.46153846153845, 158.875S283.19054003859577, 184.38114704969868, 312.84615384615387, 186.41333333333333S372.89134605415717, 185.83215565534192, 402.2307692307692, 182.17666666666668S462.02410583419805, 146.5011681691845, 491.6153846153846, 144.04666666666668S567.0505574133948, 163.71185450596207, 581, 167.34833333333333 L 581 254.2 L 0 254.2M 0 230.8983333333333z"
                                                                    fill="url(#SvgjsLinearGradient1145)" fill-opacity="1"
                                                                    stroke-opacity="1" stroke-linecap="butt"
                                                                    stroke-width="0" stroke-dasharray="0"
                                                                    class="apexcharts-area" index="1"
                                                                    clip-path="url(#gridRectMaskyahfzjuk)"
                                                                    pathTo="M 0 254.2 L 0 230.8983333333333C20.130170126196585, 224.21940158644284, 100.2916013253556, 197.2225283456189, 134.07692307692307, 186.41333333333333S193.66666666666666, 158.875, 223.46153846153845, 158.875S283.19054003859577, 184.38114704969868, 312.84615384615387, 186.41333333333333S372.89134605415717, 185.83215565534192, 402.2307692307692, 182.17666666666668S462.02410583419805, 146.5011681691845, 491.6153846153846, 144.04666666666668S567.0505574133948, 163.71185450596207, 581, 167.34833333333333 L 581 254.2 L 0 254.2M 0 230.8983333333333z"
                                                                    pathFrom="M -1 254.2 L -1 254.2 L 134.07692307692307 254.2 L 223.46153846153845 254.2 L 312.84615384615387 254.2 L 402.2307692307692 254.2 L 491.6153846153846 254.2 L 581 254.2">
                                                                </path>
                                                                <path id="SvgjsPath1150"
                                                                    d="M 0 230.8983333333333C20.130170126196585, 224.21940158644284, 100.2916013253556, 197.2225283456189, 134.07692307692307, 186.41333333333333S193.66666666666666, 158.875, 223.46153846153845, 158.875S283.19054003859577, 184.38114704969868, 312.84615384615387, 186.41333333333333S372.89134605415717, 185.83215565534192, 402.2307692307692, 182.17666666666668S462.02410583419805, 146.5011681691845, 491.6153846153846, 144.04666666666668S567.0505574133948, 163.71185450596207, 581, 167.34833333333333"
                                                                    fill="none" fill-opacity="1" stroke="#ffb8a8"
                                                                    stroke-opacity="1" stroke-linecap="butt"
                                                                    stroke-width="4" stroke-dasharray="0"
                                                                    class="apexcharts-area" index="1"
                                                                    clip-path="url(#gridRectMaskyahfzjuk)"
                                                                    pathTo="M 0 230.8983333333333C20.130170126196585, 224.21940158644284, 100.2916013253556, 197.2225283456189, 134.07692307692307, 186.41333333333333S193.66666666666666, 158.875, 223.46153846153845, 158.875S283.19054003859577, 184.38114704969868, 312.84615384615387, 186.41333333333333S372.89134605415717, 185.83215565534192, 402.2307692307692, 182.17666666666668S462.02410583419805, 146.5011681691845, 491.6153846153846, 144.04666666666668S567.0505574133948, 163.71185450596207, 581, 167.34833333333333"
                                                                    pathFrom="M -1 254.2 L -1 254.2 L 134.07692307692307 254.2 L 223.46153846153845 254.2 L 312.84615384615387 254.2 L 402.2307692307692 254.2 L 491.6153846153846 254.2 L 581 254.2"
                                                                    fill-rule="evenodd"></path>
                                                                <g id="SvgjsG1143"
                                                                    class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                                    data:realIndex="1">
                                                                    <g class="apexcharts-series-markers">
                                                                        <circle id="SvgjsCircle1225" r="0" cx="0" cy="0"
                                                                            class="apexcharts-marker wslx1jal2k no-pointer-events"
                                                                            stroke="#ffffff" fill="#ffb8a8" fill-opacity="1"
                                                                            stroke-width="2" stroke-opacity="0.9"
                                                                            default-marker-size="0"></circle>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1151" class="apexcharts-series" zIndex="2"
                                                                seriesName="completedxprojects" data:longestSeries="true"
                                                                rel="3" data:realIndex="2">
                                                                <path id="SvgjsPath1158"
                                                                    d="M 0 254.2 L 0 228.78C19.537082755531337, 221.3718251665027, 99.20331661041024, 187.03119706842816, 134.07692307692307, 177.94S193.81651686749305, 163.12232060327705, 223.46153846153845, 165.23S283.0888864470291, 189.59217011782326, 312.84615384615387, 190.64999999999998S375.39054239584044, 180.49024232918728, 402.2307692307692, 171.58499999999998S461.82469577946506, 131.6896726560785, 491.6153846153846, 131.33666666666664S568.3961333581399, 164.09006541390966, 581, 169.46666666666664 L 581 254.2 L 0 254.2M 0 228.78z"
                                                                    fill="url(#SvgjsLinearGradient1154)" fill-opacity="1"
                                                                    stroke-opacity="1" stroke-linecap="butt"
                                                                    stroke-width="0" stroke-dasharray="0"
                                                                    class="apexcharts-area" index="2"
                                                                    clip-path="url(#gridRectMaskyahfzjuk)"
                                                                    pathTo="M 0 254.2 L 0 228.78C19.537082755531337, 221.3718251665027, 99.20331661041024, 187.03119706842816, 134.07692307692307, 177.94S193.81651686749305, 163.12232060327705, 223.46153846153845, 165.23S283.0888864470291, 189.59217011782326, 312.84615384615387, 190.64999999999998S375.39054239584044, 180.49024232918728, 402.2307692307692, 171.58499999999998S461.82469577946506, 131.6896726560785, 491.6153846153846, 131.33666666666664S568.3961333581399, 164.09006541390966, 581, 169.46666666666664 L 581 254.2 L 0 254.2M 0 228.78z"
                                                                    pathFrom="M -1 254.2 L -1 254.2 L 134.07692307692307 254.2 L 223.46153846153845 254.2 L 312.84615384615387 254.2 L 402.2307692307692 254.2 L 491.6153846153846 254.2 L 581 254.2">
                                                                </path>
                                                                <path id="SvgjsPath1159"
                                                                    d="M 0 228.78C19.537082755531337, 221.3718251665027, 99.20331661041024, 187.03119706842816, 134.07692307692307, 177.94S193.81651686749305, 163.12232060327705, 223.46153846153845, 165.23S283.0888864470291, 189.59217011782326, 312.84615384615387, 190.64999999999998S375.39054239584044, 180.49024232918728, 402.2307692307692, 171.58499999999998S461.82469577946506, 131.6896726560785, 491.6153846153846, 131.33666666666664S568.3961333581399, 164.09006541390966, 581, 169.46666666666664"
                                                                    fill="none" fill-opacity="1" stroke="#feb019"
                                                                    stroke-opacity="1" stroke-linecap="butt"
                                                                    stroke-width="4" stroke-dasharray="0"
                                                                    class="apexcharts-area" index="2"
                                                                    clip-path="url(#gridRectMaskyahfzjuk)"
                                                                    pathTo="M 0 228.78C19.537082755531337, 221.3718251665027, 99.20331661041024, 187.03119706842816, 134.07692307692307, 177.94S193.81651686749305, 163.12232060327705, 223.46153846153845, 165.23S283.0888864470291, 189.59217011782326, 312.84615384615387, 190.64999999999998S375.39054239584044, 180.49024232918728, 402.2307692307692, 171.58499999999998S461.82469577946506, 131.6896726560785, 491.6153846153846, 131.33666666666664S568.3961333581399, 164.09006541390966, 581, 169.46666666666664"
                                                                    pathFrom="M -1 254.2 L -1 254.2 L 134.07692307692307 254.2 L 223.46153846153845 254.2 L 312.84615384615387 254.2 L 402.2307692307692 254.2 L 491.6153846153846 254.2 L 581 254.2"
                                                                    fill-rule="evenodd"></path>
                                                                <g id="SvgjsG1152"
                                                                    class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                                    data:realIndex="2">
                                                                    <g class="apexcharts-series-markers">
                                                                        <circle id="SvgjsCircle1226" r="0" cx="0" cy="0"
                                                                            class="apexcharts-marker wpwy5mnhcl no-pointer-events"
                                                                            stroke="#ffffff" fill="#feb019" fill-opacity="1"
                                                                            stroke-width="2" stroke-opacity="0.9"
                                                                            default-marker-size="0"></circle>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1135" class="apexcharts-datalabels"
                                                                data:realIndex="0"></g>
                                                            <g id="SvgjsG1144" class="apexcharts-datalabels"
                                                                data:realIndex="1"></g>
                                                            <g id="SvgjsG1153" class="apexcharts-datalabels"
                                                                data:realIndex="2"></g>
                                                        </g>
                                                        <line id="SvgjsLine1178" x1="0" y1="0" x2="581" y2="0"
                                                            stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                                            stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine1179" x1="0" y1="0" x2="581" y2="0"
                                                            stroke-dasharray="0" stroke-width="0" stroke-linecap="butt"
                                                            class="apexcharts-ycrosshairs-hidden"></line>
                                                        <g id="SvgjsG1180" class="apexcharts-xaxis"
                                                            transform="translate(0, 0)">
                                                            <g id="SvgjsG1181" class="apexcharts-xaxis-texts-g"
                                                                transform="translate(0, -4)"><text id="SvgjsText1183"
                                                                    font-family="Helvetica, Arial, sans-serif" x="0"
                                                                    y="283.2" text-anchor="middle" dominant-baseline="auto"
                                                                    font-size="12px" font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1184">00:00</tspan>
                                                                    <title>00:00</title>
                                                                </text><text id="SvgjsText1186"
                                                                    font-family="Helvetica, Arial, sans-serif"
                                                                    x="89.3846153846154" y="283.2" text-anchor="middle"
                                                                    dominant-baseline="auto" font-size="12px"
                                                                    font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1187">02:00</tspan>
                                                                    <title>02:00</title>
                                                                </text><text id="SvgjsText1189"
                                                                    font-family="Helvetica, Arial, sans-serif"
                                                                    x="178.7692307692308" y="283.2" text-anchor="middle"
                                                                    dominant-baseline="auto" font-size="12px"
                                                                    font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1190">03:00</tspan>
                                                                    <title>03:00</title>
                                                                </text><text id="SvgjsText1192"
                                                                    font-family="Helvetica, Arial, sans-serif"
                                                                    x="268.1538461538462" y="283.2" text-anchor="middle"
                                                                    dominant-baseline="auto" font-size="12px"
                                                                    font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1193">04:00</tspan>
                                                                    <title>04:00</title>
                                                                </text><text id="SvgjsText1195"
                                                                    font-family="Helvetica, Arial, sans-serif"
                                                                    x="357.5384615384616" y="283.2" text-anchor="middle"
                                                                    dominant-baseline="auto" font-size="12px"
                                                                    font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1196">05:00</tspan>
                                                                    <title>05:00</title>
                                                                </text><text id="SvgjsText1198"
                                                                    font-family="Helvetica, Arial, sans-serif"
                                                                    x="446.923076923077" y="283.2" text-anchor="middle"
                                                                    dominant-baseline="auto" font-size="12px"
                                                                    font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1199">06:00</tspan>
                                                                    <title>06:00</title>
                                                                </text><text id="SvgjsText1201"
                                                                    font-family="Helvetica, Arial, sans-serif"
                                                                    x="536.3076923076924" y="283.2" text-anchor="middle"
                                                                    dominant-baseline="auto" font-size="12px"
                                                                    font-weight="400" fill="#373d3f"
                                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                                    <tspan id="SvgjsTspan1202">07:00</tspan>
                                                                    <title>07:00</title>
                                                                </text></g>
                                                        </g>
                                                        <g id="SvgjsG1221" class="apexcharts-yaxis-annotations"></g>
                                                        <g id="SvgjsG1222" class="apexcharts-xaxis-annotations"></g>
                                                        <g id="SvgjsG1223" class="apexcharts-point-annotations"></g>
                                                        <rect id="SvgjsRect1227" width="0" height="0" x="0" y="0" rx="0"
                                                            ry="0" opacity="1" stroke-width="0" stroke="none"
                                                            stroke-dasharray="0" fill="#fefefe"
                                                            class="apexcharts-zoom-rect"></rect>
                                                        <rect id="SvgjsRect1228" width="0" height="0" x="0" y="0" rx="0"
                                                            ry="0" opacity="1" stroke-width="0" stroke="none"
                                                            stroke-dasharray="0" fill="#fefefe"
                                                            class="apexcharts-selection-rect"></rect>
                                                    </g>
                                                </svg>
                                                <div class="apexcharts-tooltip apexcharts-theme-light">
                                                    <div class="apexcharts-tooltip-title"
                                                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    </div>
                                                    <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                                            class="apexcharts-tooltip-marker"
                                                            style="background-color: rgb(255, 91, 55);"></span>
                                                        <div class="apexcharts-tooltip-text"
                                                            style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                            <div class="apexcharts-tooltip-y-group"><span
                                                                    class="apexcharts-tooltip-text-y-label"></span><span
                                                                    class="apexcharts-tooltip-text-y-value"></span></div>
                                                            <div class="apexcharts-tooltip-goals-group"><span
                                                                    class="apexcharts-tooltip-text-goals-label"></span><span
                                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div class="apexcharts-tooltip-z-group"><span
                                                                    class="apexcharts-tooltip-text-z-label"></span><span
                                                                    class="apexcharts-tooltip-text-z-value"></span></div>
                                                        </div>
                                                    </div>
                                                    <div class="apexcharts-tooltip-series-group" style="order: 2;"><span
                                                            class="apexcharts-tooltip-marker"
                                                            style="background-color: rgb(255, 184, 168);"></span>
                                                        <div class="apexcharts-tooltip-text"
                                                            style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                            <div class="apexcharts-tooltip-y-group"><span
                                                                    class="apexcharts-tooltip-text-y-label"></span><span
                                                                    class="apexcharts-tooltip-text-y-value"></span></div>
                                                            <div class="apexcharts-tooltip-goals-group"><span
                                                                    class="apexcharts-tooltip-text-goals-label"></span><span
                                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div class="apexcharts-tooltip-z-group"><span
                                                                    class="apexcharts-tooltip-text-z-label"></span><span
                                                                    class="apexcharts-tooltip-text-z-value"></span></div>
                                                        </div>
                                                    </div>
                                                    <div class="apexcharts-tooltip-series-group" style="order: 3;"><span
                                                            class="apexcharts-tooltip-marker"
                                                            style="background-color: rgb(254, 176, 25);"></span>
                                                        <div class="apexcharts-tooltip-text"
                                                            style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                            <div class="apexcharts-tooltip-y-group"><span
                                                                    class="apexcharts-tooltip-text-y-label"></span><span
                                                                    class="apexcharts-tooltip-text-y-value"></span></div>
                                                            <div class="apexcharts-tooltip-goals-group"><span
                                                                    class="apexcharts-tooltip-text-goals-label"></span><span
                                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                                            </div>
                                                            <div class="apexcharts-tooltip-z-group"><span
                                                                    class="apexcharts-tooltip-text-z-label"></span><span
                                                                    class="apexcharts-tooltip-text-z-value"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                                    <div class="apexcharts-xaxistooltip-text"
                                                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    </div>
                                                </div>
                                                <div
                                                    class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                    <div class="apexcharts-yaxistooltip-text"></div>
                                                </div>
                                                <div class="apexcharts-toolbar" style="top: 0px; right: 3px;">
                                                    <div class="apexcharts-zoomin-icon" title="Zoom In"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div class="apexcharts-zoomout-icon" title="Zoom Out"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div class="apexcharts-zoom-icon apexcharts-selected"
                                                        title="Selection Zoom"><svg xmlns="http://www.w3.org/2000/svg"
                                                            fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                                                            <path
                                                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                                            </path>
                                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
                                                        </svg></div>
                                                    <div class="apexcharts-pan-icon" title="Panning"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"
                                                            height="24" viewBox="0 0 24 24" width="24">
                                                            <defs>
                                                                <path d="M0 0h24v24H0z" id="a"></path>
                                                            </defs>
                                                            <clipPath id="b">
                                                                <use overflow="visible" xlink:href="#a"></use>
                                                            </clipPath>
                                                            <path clip-path="url(#b)"
                                                                d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z">
                                                            </path>
                                                        </svg></div>
                                                    <div class="apexcharts-reset-icon" title="Reset Zoom"><svg
                                                            fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                        </svg></div>
                                                    <div class="apexcharts-menu-icon" title="Menu"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24">
                                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                                        </svg></div>
                                                    <div class="apexcharts-menu">
                                                        <div class="apexcharts-menu-item exportSVG" title="Download SVG">
                                                            Download SVG</div>
                                                        <div class="apexcharts-menu-item exportPNG" title="Download PNG">
                                                            Download PNG</div>
                                                        <div class="apexcharts-menu-item exportCSV" title="Download CSV">
                                                            Download CSV</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex">
                        <div class="card w-100">
                            <div class="card-body pt-0">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-7">
                                            <p>Welcome back,</p>
                                            <h6 class="text-primary">Super Admin</h6>
                                        </div>
                                        <div class="col-5 text-end">
                                            <span class="welcome-dash-icon bg-1">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="account-balance">
                                    <p>Account balance</p>
                                    <h6>$50,000,00 </h6>
                                </div>
                                <div class="mt-3">
                                    <h6 class="text-primary">Payments</h6>
                                    <div class="table-responsive">
                                        <table class="table table-center table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-nowrap">Client or Freelancer</th>
                                                    <th>Amount</th>
                                                    <th class="text-end">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-nowrap">Sakib Khan</td>
                                                    <td>$2222</td>
                                                    <td class="text-end">Completed</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-nowrap">Pixel Inc Ltd</td>
                                                    <td>$750</td>
                                                    <td class="text-end">
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-success me-2"><i
                                                                class="far fa-edit"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-danger me-2"><i
                                                                class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-nowrap">Jon M Mullins</td>
                                                    <td>$3150</td>
                                                    <td class="text-end text-nowrap">Money released to Freelancer</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-nowrap">Rose M Milewski</td>
                                                    <td>$1455</td>
                                                    <td class="text-end text-nowrap">Money returned to Client</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-nowrap">Gerald K Myers</td>
                                                    <td>$3000</td>
                                                    <td class="text-end">
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-success me-2"><i
                                                                class="far fa-edit"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-danger me-2"><i
                                                                class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-nowrap">Marcin Kowalski</td>
                                                    <td>$895</td>
                                                    <td class="text-end">
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-success me-2"><i
                                                                class="far fa-edit"></i></a>
                                                        <a href="javascript:void(0);" class="btn btn-sm btn-danger me-2"><i
                                                                class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card bg-white projects-card">
                            <div class="card-body pt-0">
                                <div class="card-header">
                                    <h5 class="card-title">Reviews</h5>
                                </div>
                                <div class="reviews-menu-links">
                                    <ul role="tablist" class="nav nav-pills card-header-pills nav-justified">
                                        <li class="nav-item">
                                            <a href="#tab-4" data-bs-toggle="tab" class="nav-link active">All (272)</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-5" data-bs-toggle="tab" class="nav-link">Active (218)</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-6" data-bs-toggle="tab" class="nav-link"> Pending Approval (03)
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#tab-7" data-bs-toggle="tab" class="nav-link">Trash (0)</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-content pt-0">
                                    <div role="tabpanel" id="tab-4" class="tab-pane fade active show">
                                        <div class="table-responsive">
                                            <div id="DataTables_Table_0_wrapper"
                                                class="dataTables_wrapper dt-bootstrap4 no-footer">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6">
                                                        <div class="dataTables_length" id="DataTables_Table_0_length">
                                                            <label>Show <select name="DataTables_Table_0_length"
                                                                    aria-controls="DataTables_Table_0"
                                                                    class="custom-select custom-select-sm form-control form-control-sm">
                                                                    <option value="10">10</option>
                                                                    <option value="25">25</option>
                                                                    <option value="50">50</option>
                                                                    <option value="100">100</option>
                                                                </select> entries</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6">
                                                        <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                                            <label>Search:<input type="search"
                                                                    class="form-control form-control-sm" placeholder=""
                                                                    aria-controls="DataTables_Table_0"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table
                                                            class="table table-hover table-center mb-0 datatable dataTable no-footer"
                                                            id="DataTables_Table_0" role="grid"
                                                            aria-describedby="DataTables_Table_0_info">
                                                            <thead>
                                                                <tr role="row">
                                                                    <th class="sorting_asc" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 2px;"
                                                                        aria-sort="ascending"
                                                                        aria-label=": activate to sort column descending">
                                                                    </th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 138.983px;"
                                                                        aria-label="Profile: activate to sort column ascending">
                                                                        Profile</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 106.033px;"
                                                                        aria-label="Designation: activate to sort column ascending">
                                                                        Designation</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 278px;"
                                                                        aria-label="comments: activate to sort column ascending">
                                                                        comments</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 82.0667px;"
                                                                        aria-label="Stars: activate to sort column ascending">
                                                                        Stars</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 61.2167px;"
                                                                        aria-label="Category: activate to sort column ascending">
                                                                        Category</th>
                                                                    <th class="text-end sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_0" rowspan="1"
                                                                        colspan="1" style="width: 226.517px;"
                                                                        aria-label="Actions: activate to sort column ascending">
                                                                        Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>











                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck1">
                                                                            <label class="form-check-label"
                                                                                for="customCheck1"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-14.jpg"
                                                                                    alt="User Image">
                                                                                Janet Paden
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        CEO
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>

                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck2">
                                                                            <label class="form-check-label"
                                                                                for="customCheck2"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-01.jpg"
                                                                                    alt="User Image">
                                                                                George Wells
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Tech Lead
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Node
                                                                    </td>

                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck3">
                                                                            <label class="form-check-label"
                                                                                for="customCheck3"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-15.jpg"
                                                                                    alt="User Image">
                                                                                Timothy Smith
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck10">
                                                                            <label class="form-check-label"
                                                                                for="customCheck10"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-16.jpg"
                                                                                    alt="User Image">
                                                                                Lois Alexander
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Laravel
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck4">
                                                                            <label class="form-check-label"
                                                                                for="customCheck4"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-03.jpg"
                                                                                    alt="User Image">
                                                                                Sara Grayson
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Developer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck5">
                                                                            <label class="form-check-label"
                                                                                for="customCheck5"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-04.jpg"
                                                                                    alt="User Image">
                                                                                Deboarah
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Associate Engineer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        React
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck6">
                                                                            <label class="form-check-label"
                                                                                for="customCheck6"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-11.jpg"
                                                                                    alt="User Image">
                                                                                Sofia Briant
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        JAVA
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck7">
                                                                            <label class="form-check-label"
                                                                                for="customCheck7"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-02.jpg"
                                                                                    alt="User Image">
                                                                                Bess Twishes
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        .NET
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck8">
                                                                            <label class="form-check-label"
                                                                                for="customCheck8"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-05.jpg"
                                                                                    alt="User Image">
                                                                                Rayan Lester
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Python
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck9">
                                                                            <label class="form-check-label"
                                                                                for="customCheck9"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-06.jpg"
                                                                                    alt="User Image">
                                                                                Sarah Alexander
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Golang
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-5">
                                                        <div class="dataTables_info" id="DataTables_Table_0_info"
                                                            role="status" aria-live="polite">Showing 1 to 10 of 10 entries
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-7">
                                                        <div class="dataTables_paginate paging_simple_numbers"
                                                            id="DataTables_Table_0_paginate">
                                                            <ul class="pagination">
                                                                <li class="paginate_button page-item previous disabled"
                                                                    id="DataTables_Table_0_previous"><a href="#"
                                                                        aria-controls="DataTables_Table_0" data-dt-idx="0"
                                                                        tabindex="0" class="page-link">Previous</a></li>
                                                                <li class="paginate_button page-item active"><a href="#"
                                                                        aria-controls="DataTables_Table_0" data-dt-idx="1"
                                                                        tabindex="0" class="page-link">1</a></li>
                                                                <li class="paginate_button page-item next disabled"
                                                                    id="DataTables_Table_0_next"><a href="#"
                                                                        aria-controls="DataTables_Table_0" data-dt-idx="2"
                                                                        tabindex="0" class="page-link">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="tab-5" class="tab-pane fade">
                                        <div class="table-responsive">
                                            <div id="DataTables_Table_1_wrapper"
                                                class="dataTables_wrapper dt-bootstrap4 no-footer">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6">
                                                        <div class="dataTables_length" id="DataTables_Table_1_length">
                                                            <label>Show <select name="DataTables_Table_1_length"
                                                                    aria-controls="DataTables_Table_1"
                                                                    class="custom-select custom-select-sm form-control form-control-sm">
                                                                    <option value="10">10</option>
                                                                    <option value="25">25</option>
                                                                    <option value="50">50</option>
                                                                    <option value="100">100</option>
                                                                </select> entries</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6">
                                                        <div id="DataTables_Table_1_filter" class="dataTables_filter">
                                                            <label>Search:<input type="search"
                                                                    class="form-control form-control-sm" placeholder=""
                                                                    aria-controls="DataTables_Table_1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table
                                                            class="table table-center table-bordered table-hover datatable dataTable no-footer"
                                                            id="DataTables_Table_1" role="grid"
                                                            aria-describedby="DataTables_Table_1_info">
                                                            <thead>
                                                                <tr role="row">
                                                                    <th class="sorting_asc" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-sort="ascending"
                                                                        aria-label=": activate to sort column descending">
                                                                    </th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Profile: activate to sort column ascending">
                                                                        Profile</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Designation: activate to sort column ascending">
                                                                        Designation</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="comments: activate to sort column ascending">
                                                                        comments</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Stars: activate to sort column ascending">
                                                                        Stars</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Category: activate to sort column ascending">
                                                                        Category</th>
                                                                    <th class="text-end sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_1" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Actions: activate to sort column ascending">
                                                                        Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>








                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck11">
                                                                            <label class="form-check-label"
                                                                                for="customCheck11"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-04.jpg"
                                                                                    alt="User Image">
                                                                                Deboarah
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Associate Engineer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        React
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck12">
                                                                            <label class="form-check-label"
                                                                                for="customCheck12"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-11.jpg"
                                                                                    alt="User Image">
                                                                                Sofia Briant
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        JAVA
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck13">
                                                                            <label class="form-check-label"
                                                                                for="customCheck13"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-02.jpg"
                                                                                    alt="User Image">
                                                                                Bess Twishes
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        .NET
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck14">
                                                                            <label class="form-check-label"
                                                                                for="customCheck14"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-05.jpg"
                                                                                    alt="User Image">
                                                                                Rayan Lester
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Python
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck15">
                                                                            <label class="form-check-label"
                                                                                for="customCheck15"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-06.jpg"
                                                                                    alt="User Image">
                                                                                Sarah Alexander
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Golang
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck16">
                                                                            <label class="form-check-label"
                                                                                for="customCheck16"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-14.jpg"
                                                                                    alt="User Image">
                                                                                Janet Paden
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        CEO
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>

                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck17">
                                                                            <label class="form-check-label"
                                                                                for="customCheck17"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-01.jpg"
                                                                                    alt="User Image">
                                                                                George Wells
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Tech Lead
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Node
                                                                    </td>

                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck18">
                                                                            <label class="form-check-label"
                                                                                for="customCheck18"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-15.jpg"
                                                                                    alt="User Image">
                                                                                Timothy Smith
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-5">
                                                        <div class="dataTables_info" id="DataTables_Table_1_info"
                                                            role="status" aria-live="polite">Showing 1 to 8 of 8 entries
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-7">
                                                        <div class="dataTables_paginate paging_simple_numbers"
                                                            id="DataTables_Table_1_paginate">
                                                            <ul class="pagination">
                                                                <li class="paginate_button page-item previous disabled"
                                                                    id="DataTables_Table_1_previous"><a href="#"
                                                                        aria-controls="DataTables_Table_1" data-dt-idx="0"
                                                                        tabindex="0" class="page-link">Previous</a></li>
                                                                <li class="paginate_button page-item active"><a href="#"
                                                                        aria-controls="DataTables_Table_1" data-dt-idx="1"
                                                                        tabindex="0" class="page-link">1</a></li>
                                                                <li class="paginate_button page-item next disabled"
                                                                    id="DataTables_Table_1_next"><a href="#"
                                                                        aria-controls="DataTables_Table_1" data-dt-idx="2"
                                                                        tabindex="0" class="page-link">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="tab-6" class="tab-pane fade">
                                        <div class="table-responsive">
                                            <div id="DataTables_Table_2_wrapper"
                                                class="dataTables_wrapper dt-bootstrap4 no-footer">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6">
                                                        <div class="dataTables_length" id="DataTables_Table_2_length">
                                                            <label>Show <select name="DataTables_Table_2_length"
                                                                    aria-controls="DataTables_Table_2"
                                                                    class="custom-select custom-select-sm form-control form-control-sm">
                                                                    <option value="10">10</option>
                                                                    <option value="25">25</option>
                                                                    <option value="50">50</option>
                                                                    <option value="100">100</option>
                                                                </select> entries</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6">
                                                        <div id="DataTables_Table_2_filter" class="dataTables_filter">
                                                            <label>Search:<input type="search"
                                                                    class="form-control form-control-sm" placeholder=""
                                                                    aria-controls="DataTables_Table_2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table
                                                            class="table table-bordered table-hover datatable dataTable no-footer"
                                                            id="DataTables_Table_2" role="grid"
                                                            aria-describedby="DataTables_Table_2_info">
                                                            <thead>
                                                                <tr role="row">
                                                                    <th class="sorting_asc" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-sort="ascending"
                                                                        aria-label=": activate to sort column descending">
                                                                    </th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Profile: activate to sort column ascending">
                                                                        Profile</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Designation: activate to sort column ascending">
                                                                        Designation</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="comments: activate to sort column ascending">
                                                                        comments</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Stars: activate to sort column ascending">
                                                                        Stars</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Category: activate to sort column ascending">
                                                                        Category</th>
                                                                    <th class="text-end sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_2" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Actions: activate to sort column ascending">
                                                                        Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>











                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck21">
                                                                            <label class="form-check-label"
                                                                                for="customCheck21"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-05.jpg"
                                                                                    alt="User Image">
                                                                                Albert Boone
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        CEO
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        React
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck22">
                                                                            <label class="form-check-label"
                                                                                for="customCheck22"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-14.jpg"
                                                                                    alt="User Image">
                                                                                Janet Paden
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        CEO
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>

                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck23">
                                                                            <label class="form-check-label"
                                                                                for="customCheck23"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-01.jpg"
                                                                                    alt="User Image">
                                                                                George Wells
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Tech Lead
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Node
                                                                    </td>

                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck24">
                                                                            <label class="form-check-label"
                                                                                for="customCheck24"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-15.jpg"
                                                                                    alt="User Image">
                                                                                Timothy Smith
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck25">
                                                                            <label class="form-check-label"
                                                                                for="customCheck25"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-06.jpg"
                                                                                    alt="User Image">
                                                                                Jessie Montoya
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        PROJECT LEAD
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Node
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck26">
                                                                            <label class="form-check-label"
                                                                                for="customCheck26"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-10.jpg"
                                                                                    alt="User Image">
                                                                                Gary Green
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        TEAM LEAD
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Angular
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck27">
                                                                            <label class="form-check-label"
                                                                                for="customCheck27"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-11.jpg"
                                                                                    alt="User Image">
                                                                                Sofia Briant
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        JAVA
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck28">
                                                                            <label class="form-check-label"
                                                                                for="customCheck28"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-02.jpg"
                                                                                    alt="User Image">
                                                                                Bess Twishes
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        .NET
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="odd">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck29">
                                                                            <label class="form-check-label"
                                                                                for="customCheck29"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-05.jpg"
                                                                                    alt="User Image">
                                                                                Rayan Lester
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Technial Manager
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Python
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                                <tr role="row" class="even">
                                                                    <td class="sorting_1">
                                                                        <div class="form-check custom-checkbox">
                                                                            <input type="checkbox" class="form-check-input"
                                                                                id="customCheck30">
                                                                            <label class="form-check-label"
                                                                                for="customCheck30"></label>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <a href="profile.html"><img
                                                                                    class="avatar-img rounded-circle me-2"
                                                                                    src="assets/img/profiles/avatar-06.jpg"
                                                                                    alt="User Image">
                                                                                Sarah Alexander
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        Designer
                                                                    </td>
                                                                    <td>
                                                                        <div class="desc-info">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipiscing elit. Volutpat orci enim, mattis nibh
                                                                            aliquam dui, nibh faucibus aenean. Eget volutpat
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-nowrap">
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-primary"></i>
                                                                        <i class="fas fa-star text-muted"></i>
                                                                    </td>
                                                                    <td>
                                                                        Golang
                                                                    </td>
                                                                    <td class="text-end text-nowrap">
                                                                        <a href="javascript:void(0);"
                                                                            class=" btn btn-approve text-white me-2">Approve</a>
                                                                        <a href="javascript:void(0);"
                                                                            class="btn btn-disable">Enable</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-5">
                                                        <div class="dataTables_info" id="DataTables_Table_2_info"
                                                            role="status" aria-live="polite">Showing 1 to 10 of 10 entries
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-7">
                                                        <div class="dataTables_paginate paging_simple_numbers"
                                                            id="DataTables_Table_2_paginate">
                                                            <ul class="pagination">
                                                                <li class="paginate_button page-item previous disabled"
                                                                    id="DataTables_Table_2_previous"><a href="#"
                                                                        aria-controls="DataTables_Table_2" data-dt-idx="0"
                                                                        tabindex="0" class="page-link">Previous</a></li>
                                                                <li class="paginate_button page-item active"><a href="#"
                                                                        aria-controls="DataTables_Table_2" data-dt-idx="1"
                                                                        tabindex="0" class="page-link">1</a></li>
                                                                <li class="paginate_button page-item next disabled"
                                                                    id="DataTables_Table_2_next"><a href="#"
                                                                        aria-controls="DataTables_Table_2" data-dt-idx="2"
                                                                        tabindex="0" class="page-link">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="tab-7" class="tab-pane fade">
                                        <div class="table-responsive">
                                            <div id="DataTables_Table_3_wrapper"
                                                class="dataTables_wrapper dt-bootstrap4 no-footer">
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6">
                                                        <div class="dataTables_length" id="DataTables_Table_3_length">
                                                            <label>Show <select name="DataTables_Table_3_length"
                                                                    aria-controls="DataTables_Table_3"
                                                                    class="custom-select custom-select-sm form-control form-control-sm">
                                                                    <option value="10">10</option>
                                                                    <option value="25">25</option>
                                                                    <option value="50">50</option>
                                                                    <option value="100">100</option>
                                                                </select> entries</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-6">
                                                        <div id="DataTables_Table_3_filter" class="dataTables_filter">
                                                            <label>Search:<input type="search"
                                                                    class="form-control form-control-sm" placeholder=""
                                                                    aria-controls="DataTables_Table_3"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table
                                                            class="table table-bordered table-hover datatable dataTable no-footer"
                                                            id="DataTables_Table_3" role="grid"
                                                            aria-describedby="DataTables_Table_3_info">
                                                            <thead>
                                                                <tr role="row">
                                                                    <th class="sorting_asc" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-sort="ascending"
                                                                        aria-label=": activate to sort column descending">
                                                                    </th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Profile: activate to sort column ascending">
                                                                        Profile</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Designation: activate to sort column ascending">
                                                                        Designation</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="comments: activate to sort column ascending">
                                                                        comments</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Stars: activate to sort column ascending">
                                                                        Stars</th>
                                                                    <th class="sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Category: activate to sort column ascending">
                                                                        Category</th>
                                                                    <th class="text-end sorting" tabindex="0"
                                                                        aria-controls="DataTables_Table_3" rowspan="1"
                                                                        colspan="1" style="width: 0px;"
                                                                        aria-label="Actions: activate to sort column ascending">
                                                                        Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr class="odd">
                                                                    <td valign="top" colspan="7" class="dataTables_empty">No
                                                                        data available in table</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-5">
                                                        <div class="dataTables_info" id="DataTables_Table_3_info"
                                                            role="status" aria-live="polite">Showing 0 to 0 of 0 entries
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-7">
                                                        <div class="dataTables_paginate paging_simple_numbers"
                                                            id="DataTables_Table_3_paginate">
                                                            <ul class="pagination">
                                                                <li class="paginate_button page-item previous disabled"
                                                                    id="DataTables_Table_3_previous"><a href="#"
                                                                        aria-controls="DataTables_Table_3" data-dt-idx="0"
                                                                        tabindex="0" class="page-link">Previous</a></li>
                                                                <li class="paginate_button page-item next disabled"
                                                                    id="DataTables_Table_3_next"><a href="#"
                                                                        aria-controls="DataTables_Table_3" data-dt-idx="1"
                                                                        tabindex="0" class="page-link">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- /Page Wrapper -->

        </div>
        <!-- /Main Wrapper -->
    </div>
</template>
<script>
import headerPage from "./header.vue"
import SideBarView from "./sidebar-view.vue"
export default {
    components: {
        headerPage,
        SideBarView
    }
}
</script>