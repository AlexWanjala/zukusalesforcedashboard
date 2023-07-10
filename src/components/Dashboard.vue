<template>


<head>

    <meta charset="utf-8" />
    <title>Zuku</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/logo.svg">

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />


</head>

<body data-sidebar="dark">


    <!-- Begin page -->

    <!-- Begin page -->
    <div id="layout-wrapper">


        <Navigation/>

        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a >Dashboard</a></li>

                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- quick stats -->

                    <div class="row">
                        <div class="col-xl-4 px-sm-30px">
                            <div class="card  text-white member-wedges-card index-live-stats">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 mb-3">
                                            <h6 class="text-white text-uppercase">Agents Stats Today</h6>
                                        </div>
                                        <div class="col-sm-12 mb-3">
                                            <div class="live-data-card">
                                                <div class="">
                                                    <div class="me-3">
                                                        <img src="assets/images/index-icons/resume.png" alt="">
                                                    </div>
                                                    <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->
                                                        <img src="assets/images/index-icons/resume.png" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    <p class="text-muted mb-1">Online
                                                    </p>
                                                    <h5 class="mb-0">{{attendanceStats.online}}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 mb-3">
                                            <div class="live-data-card">
                                                <div class="">
                                                    <div class="me-3">
                                                        <img src="assets/images/index-icons/badge.png" alt="">
                                                    </div>
                                                    <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->
                                                        <img src="assets/images/index-icons/offline.png" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    <p class="text-muted mb-1">Offline</p>
                                                    <h5 class="mb-0">{{attendanceStats.offline}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 mb-3">
                                            <div class="live-data-card">
                                                <div class="">
                                                    <div class="me-3">
                                                        <img src="assets/images/index-icons/danger.png" alt="">
                                                    </div>
                                                    <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->
                                                        <img src="assets/images/index-icons/monitor.png" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    <p class="text-muted mb-1">Within Zone</p>
                                                    <h5 class="mb-0">{{attendanceStats.withinZone}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 mb-3">
                                            <div class="live-data-card">
                                                <div class="">
                                                    <div class="me-3">
                                                        <img src="assets/images/index-icons/expired.png" alt="">
                                                    </div>
                                                    <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->
                                                        <img src="assets/images/index-icons/offline.png" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    <p class="text-muted mb-1">Outside Zone
                                                    </p>
                                                    <h5 class="mb-0">{{attendanceStats.outsideZone}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 mb-3 d-non">
                                            <div class="live-data-card">
                                                <div class="">
                                                    <div class="me-3">
                                                        <img src="assets/images/index-icons/doctor-appointment.png" alt="">
                                                    </div>
                                                    <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->
                                                        <img src="assets/images/index-icons/doctor-appointment.png" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    <p class="text-muted mb-1">Total Staff
                                                    </p>
                                                    <h5 class="mb-0">{{attendanceStats.total}}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 mb-3 d-none">
                                            <div class="live-data-card">
                                                <div class="">
                                                    <div class="me-3">
                                                        <img src="assets/images/index-icons/id-card.png" alt="">
                                                    </div>
                                                    <span class="avatar-title rounded-circle bg-warning font-size-16 d-none">
                                                        <!-- <i class="mdi mdi-sticker-alert text-white"></i> -->
                                                        <img src="assets/images/index-icons/car-accident.png" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    <p class="text-muted mb-1">NHIF STAFF</p>
                                                    <h5 class="mb-0">43</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 px-sm-30px text-capitalize">
                            <div class="row">
                                <div class="col-sm-4" style="cursor: pointer;" @click="gotTo('agents')">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mb-3">
                                                <div class="avatar-xs-2 me-3">
                                                    <span class="avatar-title rounded-circle bg-warning bg-soft text-warning  font-size-18">
                                                       <i class="mdi mdi-account-group  h2 mb-0 pb-0 text-whatsApp"></i>
                                                    </span>
                                                </div>
                                                <div  class="d-flex flex-column">
                                                    <span>Total Agents</span>
                                                    <h4>{{attendance.Total}} </h4>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-4" style="cursor: pointer;" @click="getAttendanceDetails(attendance.ActivityDate)">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mb-3">
                                                <div class="avatar-xs-2 me-3">
                                                    <span class="avatar-title rounded-circle bg-info bg-soft text-info font-size-18">
                                                        <i class="mdi mdi-account-group  h2 text-success p-0 m-0"></i>
                                                    </span>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <span>Present</span>
                                                    <h4  class="text-uppercase">{{attendance.TotalCheckIn}}</h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-4" style="cursor: pointer;" @click="getAttendanceDetailsAbsent(attendance.ActivityDate)">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mb-3">
                                                <div class="avatar-xs-2 me-3">
                                                    <span class="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                                        <i class="mdi mdi-account-group  h2 mb-0 pb-0 text-danger"></i>
                                                    </span>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <span>Absent</span>
                                                    <h4  class="text-uppercase">{{attendance.TotalAbsent}}</h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-12 px-sm-30px">
                                    <div class="card">
                                        <div class="card-header bg-white">
                                            <h4 class="card-title mb-0">Attendance</h4>
                                            <small class="mb-3 text-muted d-none">The last 12 Months</small>
                                        </div>
                                        <div class="card-body">
                                            <div>
                                                <div id="annual-sales" class="high-chart-cont" dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                    </div>

                    <!-- more charts -->
                    <div class="row d-non">
                        <div class="col-xl-6 col-lg-7 col-sm-12 px-sm-30px">
                            <div class="card calc-23" style="height: 140%">
                                <div class="card-body" >
                                    <div class="clearfix">

                                        <h4 class="card-title mb-4 text-capitalize">Sales force App Map</h4>
                                    </div>



                                    <div id="map" class="h-80" dir="ltr">

                                    </div>

                                </div>

                                <div class="card-body border-top px-4 pt-4">
                                    <div class="col-xl-12">
                                        <div class="card">
                                            <div class="card-header bg-white border-bottom">

                                                <h4 class="card-title mb-3">Recent Activities</h4>
                                            </div>
                                            <div class="card-body">

                                                <ul class="nav nav-pills bg-light rounded d-none" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link active" data-bs-toggle="tab" href="#transactions-all-tab" role="tab" aria-selected="true">Bottom 7</a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#transactions-buy-tab" role="tab" aria-selected="false" tabindex="-1">Top 7</a>
                                                    </li>
                                                    <li class="nav-item d-none" role="presentation">
                                                        <a class="nav-link" data-bs-toggle="tab" href="#transactions-sell-tab" role="tab" aria-selected="false" tabindex="-1">Sell</a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content mt-">
                                                    <div class="tab-pane active" id="transactions-all-tab" role="tabpanel">
                                                        <div class="table-responsive" data-simplebar="init" style="max-height: 330px;"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: -15px; bottom: -15px;"><div class="simplebar-content-wrapper" style="height: auto; overflow: scroll;"><div class="simplebar-content" style="padding: 0px;">
                                                            <table class="table align-middle table-nowrap">
                                                                <tbody>


                                                                <tr v-for="(item, index) in trails" :value="item" :key="index">
                                                                    <td>
                                                                        <div class="font-size-22 text-success">
                                                                            <i class="bx bx-up-arrow-circle"></i>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div>
                                                                            <h5 class="font-size-14 mb-1">{{item.names}}</h5>
                                                                            <p class="text-muted mb-0">{{item.addressString}}</p>
                                                                            <p class="text-muted mb-0">{{humanDate(item.dateCreated)}}</p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="text-end">
                                                                            <h5 class="font-size-14 mb-0 text-right">{{item.zone}}</h5>
                                                                            <p class="text-muted mb-0">{{item.battery}}</p>
                                                                            <p class="text-muted mb-0">{{item.des}}</p>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                </tbody>
                                                            </table>
                                                        </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 473px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: visible;"><div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: block; width: 196px;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 230px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="card-footer bg-transparent border-top">
                                                <div class="text-center">
                                                    <a @click="gotTo('agents')" class="btn btn-primary waves-effect waves-light"> View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end card-->
                        </div>

                        <div class="col-xl-6 col-lg-5 col-sm-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-header bg-white border-bottom">

                                            <h4 class="card-title mb-3">This week Attendance Overview</h4>
                                        </div>
                                        <div class="card-body">


                                            <div class="row py-2">
                                                <div class="col-lg-4 d-none">
                                                    <div class="mt-4">
                                                        <p>Total Revenue Collected</p>
                                                        <h4>KES 567,900</h4>

                                                        <p class="text-muted mb-4"> + 3,850 ( 0.2 % ) <i class="mdi mdi-arrow-up ms-1 text-success"></i></p>

                                                        <div class="row">
                                                            <div class="col-12">
                                                                <div>
                                                                    <p class="mb-2">value Of Bills Created</p>
                                                                    <h5>KES 789,000</h5>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="mt-4">
                                                            <a href="bills-receipted.html" class="btn btn-primary btn-sm">Receipted Bills <i class="mdi mdi-arrow-right ms-1"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-8">
                                                    <div>
                                                        <div id="wallet-balance-chart" class="apex-charts"></div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-4 align-self-center">
                                                    <div>
                                                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i>Total</p>
                                                        <h5>{{thisWeekStats.total}}<span class="text-muted font-size-14"> Agents</span></h5>
                                                    </div>

                                                    <div class="mt-4 pt-2">
                                                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>Present</p>
                                                        <h5>{{thisWeekStats.present}}<span class="text-muted font-size-14"> Agents</span></h5>
                                                    </div>

                                                    <div class="mt-4 pt-2">
                                                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-danger"></i>Absent</p>
                                                        <h5>{{thisWeekStats.absent}}<span class="text-muted font-size-14"> Agents</span></h5>
                                                    </div>

                                                    <div class="mt-4 pt-2">
                                                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>Within Zone</p>
                                                        <h5>{{thisWeekStats.withinZone}}<span class="text-muted font-size-14"> Agents</span></h5>
                                                    </div>


                                                    <div class="mt-4 pt-2">
                                                        <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-warning"></i>Outside Zone</p>
                                                        <h5>{{thisWeekStats.outsideZone}}<span class="text-muted font-size-14"> Agents</span></h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-transparent border-top">
                                            <div class="text-center">
                                                <a @click="gotTo('attendance')" class="btn btn-dark waves-effect waves-light"> View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-12">
                                    <div class="card">
                                        <div class="card-header bg-white border-bottom">
                                            <h4 class="card-title mb-3">{{attendance.TotalAbsent}} Absent Agents today</h4>
                                        </div>
                                        <div class="card-body">

                                            <ul class="nav nav-pills bg-light rounded d-none" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#transactions-all-tab" role="tab" aria-selected="true">Bottom 7</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#transactions-buy-tab" role="tab" aria-selected="false" tabindex="-1">Top 7</a>
                                                </li>
                                                <li class="nav-item d-none" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#transactions-sell-tab" role="tab" aria-selected="false" tabindex="-1">Sell</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content mt-">
                                                <div class="tab-pane active" role="tabpanel">
                                                    <div class="table-responsive" data-simplebar="init" style="max-height: 330px;"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: -15px; bottom: -15px;"><div class="simplebar-content-wrapper" style="height: auto; overflow: scroll;"><div class="simplebar-content" style="padding: 0px;">
                                                        <table class="table align-middle table-nowrap">
                                                            <tbody>

                                                            <tr  v-for="(item, index) in absent" :value="item" :key="index" >
                                                                <td>
                                                                    <div class="font-size-22 text-danger">
                                                                        <i class="bx bx-up-arrow-circle"></i>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <h5 class="font-size-14 mb-1">{{item.names}}</h5>
                                                                        <p class="text-muted mb-0">Mombasa road , Nairobi Kenya</p>
                                                                        <p class="text-muted mb-0">{{humanDate(item.lastSeen)}}</p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="text-end">
                                                                        <h5 class="font-size-14 mb-0 text-right">{{item.zone}}</h5>
                                                                        <p class="text-muted mb-0">{{item.battery}}</p>
                                                                        <p class="text-muted mb-0">{{item.des}}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 473px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: visible;"><div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: block; width: 196px;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 230px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
                                                </div>


                                            </div>
                                        </div>
                                        <div class="card-footer bg-transparent border-top">
                                            <div class="text-center">
                                                <a @click="gotTo('attendance')" class="btn btn-primary waves-effect waves-light"> View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of more charts -->
                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->


            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                           ©Zuku
                        </div>
                        <div class="col-sm-6 ">
                            <div class="text-sm-end d-sm-block ">
                                Best Birdy Billing system.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    </div>

    </body>

</template>

<script>
    /* eslint-disable */
    import Navigation from "@/components/Navigation";
    import router from "@/router";
    import {execute} from "@/api";
    import moment from "moment";
    export default {
        name: "DashboardPage",
        components: {Navigation},
        data() {
            return{
                trails: [
                    {
                        id: "1790",
                        idNo: "34385614",
                        names: "Rachael Njoki Wangari",
                        zone: "WanjikuE8",
                        lat: "-1.28312",
                        lng: "36.889693333333334",
                        des: "OUTSIDE ZONE",
                        status: "2",
                        dateCreated: "2023-07-04 21:19:58",
                        battery: "Battery level: 72%",
                        addressString: "\nNairobi, Nairobi County, Kenya, PV8Q+MWV",
                        phoneNumber: "0716626544",
                        email: "",
                        distance: "2",
                        phone: "Phone type: GSM, Device model: V2111, Device manufacturer: vivo, Network operator name: Airtel,"
                    }],
                absent: [{
                id: "11",
                names: "Wycliffe Nyakundi",
                idNo: null,
                phoneNumber: "0722767962",
                email: null,
                zone: "BigMoney,Uptown",
                password: "$2y$10$au6kgtdjBq.xLoeqEK6I3.q2fofoDQY7exVeWEJU9eA9BkcP.jGKe",
                role: "MANAGER",
                lastAddress: null,
                lat: null,
                lng: null,
                logging: "false",
                lastSeen: "2023-06-09 17:03:32",
                des: null,
                distance: "0",
                battery: null
            }],
                Present:[],
                Absent:[],
                Total:[],
                months:[],
                attendanceAvg: [
                    {
                        month: "",
                        year: "",
                        days: "",
                        total: "",
                        present: "",
                        absent: ""
                    }],
                attendance: {
                    Total: "",
                    TotalCheckIn: "",
                    TotalAbsent: "",
                    ActivityDate: "",
                    Date: ""
                },
                attendanceStats: {
                    total: "",
                    online: "",
                    offline: "",
                    withinZone: "",
                    outsideZone: "",
                    inactive: ""
                },
                thisWeekStats: {
                    total: "",
                    present: "",
                    absent: "",
                    withinZone: "",
                    outsideZone: ""
                },
                users: [
                    {
                        id: "5",
                        names: "ALEX WANJALAA",
                        idNo: "1234",
                        phoneNumber: "0704722837",
                        email: "wanjalaalex25@gmail.com",
                        zone: "BigMoney1",
                        password: "$2y$10$au6kgtdjBq.xLoeqEK6I3.q2fofoDQY7exVeWEJU9eA9BkcP.jGKe",
                        role: "MANAGER",
                        lastAddress: "No address found",
                        lat: "-37.8135986328125",
                        lng: "144.96310424804688",
                        logging: "false",
                        lastSeen: "2023-07-04 11:00:24",
                        des: "OUTSIDE ZONE",
                        distance: "11504",
                        battery: "Battery level: 85%"
                    }]
            }
        },
        mounted() {
            this.trails.splice(0)
            this.absent.splice(0)
            this.getDashboard()

        },
        methods: {
            getStatus(time) {
                const now = Date.now();
                const then = Date.parse(time);
                const elapsed = now - then;
                if (elapsed < 7200000) {
                    return "Active";
                } else if (elapsed < 259200000) {
                    return "Inactive";
                } else {
                    return "Dormant";
                }},
            formattedDate(date) {

                var data =  moment(date).format('h:mm A');
                if(data =="Invalid date"){
                    return null
                }else {
                    return  data;
                }

            },
            humanDate(date) {

                return moment(date).format('dddd, MMMM DD, YYYY');

            },
            getAttendanceDetails(ActivityDate){
                sessionStorage.setItem("ActivityDate",ActivityDate)
                this.gotTo('attendance_details')

            },
            getAttendanceDetailsAbsent(ActivityDate){
                sessionStorage.setItem("ActivityDate",ActivityDate)
                this.gotTo('attendance_details_absent')

            },
            getMothName(number){
                switch (number) {
                    case "1":
                        return "January";
                    case "2":
                        return "February";
                    case "3":
                        return "March";
                    case "4":
                        return "April";
                    case "5":
                        return "May";
                    case "6":
                        return "June";
                    case "7":
                        return "July";
                    case "8":
                        return "August";
                    case "9":
                        return "September";
                    case "10":
                        return "October";
                    case "11":
                        return "November";
                    case "12":
                        return "December";
                    default:
                        return "";
            }},
            getDashboard(){
                const data = new FormData();
                data.append("function", "getDashboard");
                execute(data)
                    .then((res) =>{
                        if (res.data.success) {

                            this.attendanceStats = res.data.data.attendanceStats
                            this.attendance = res.data.data.attendance

                            this.attendanceAvg.splice(0)
                            this.attendanceAvg = res.data.data.attendanceAvg


                            this.thisWeekStats = res.data.data.thisWeekStats
                            this.users = res.data.data.users

                            this.trails = res.data.data.trails
                            this.absent = res.data.data.absent


                            this.attendanceAvg.forEach(item => {
                                this.months.push(item.month)
                                this.Total.push(parseInt(item.total));
                                this.Present.push(parseInt(item.present));
                                this.Absent.push(parseInt(item.absent));
                            });


                            this.appCollection()
                            this.thisWeek()
                            this.initMap()


                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            router() {
                return router
            },
            gotTo(route){
                router.push(route)
            },
              appCollection(){
                  Highcharts.chart('annual-sales', {
                      chart: {
                          zoomType: 'xy',
                          style: {
                              fontFamily: '"Poppins",sans-serif'
                          }
                      },
                      title: {
                          text: '',
                          align: 'Center'
                      },

                      xAxis: [{
                          categories: this.months,
                          crosshair: true
                      }],
                      yAxis: [ { // Secondary yAxis
                          title: {
                              text: 'Total',
                              style: {
                                  color: "Black"
                              }
                          },
                          labels: {

                              style: {
                                  color: "Black"
                              }
                          },
                          opposite: true,
                          gridLineColor: '#c2c2c2',
                          gridLineWidth: 0,
                          min: 0,
                      },{ // Primary yAxis
                          labels: {

                              style: {
                                  color: '#007647'
                              }
                          },
                          title: {
                              text: 'Present',
                              style: {
                                  color: "#007647"
                              }
                          }
                      }],
                      tooltip: {
                          shared: true
                      },

                      plotOptions: {
                          column: {
                              pointPadding: 0.2,
                              borderWidth: 0
                          }
                      },
                      series: [{
                          name: 'Present',
                          type: 'column',
                          color:'#00c399',
                          yAxis: 1,
                          data: this.Present,
                          tooltip: {
                              valuePrefix: ' '
                          }

                      }, {
                          name: 'Absent',
                          type: 'spline',
                          color:'#c50000',
                          data: this.Absent,
                          tooltip: {
                              valuePrefix: ''
                          },
                          // shadow: {
                          //     color: 'black', offsetX: 0, offsetY: 5, opacity: 0.2, width: 5
                          // },
                          lineWidth: 4,
                      },
                          {
                              name: 'Total',
                              type: 'spline',
                              color:'#556ee6',
                              data: this.Total,
                              tooltip: {
                                  valuePrefix: ''
                              },
                              shadow: {
                                  color: 'black', offsetX: 0, offsetY: 5, opacity: 0.2, width: 5,

                              },
                              lineWidth: 4,
                          }]
                  });
            },
            humanDateTimeAgo(date) {

                return moment(date).fromNow();

            },
              initMap() {

                  // create the map instance once
                  const map = new google.maps.Map(document.getElementById("map"), {
                      zoom: 13,
                      center: { lat: -1.324925475779896, lng: 36.822922 }, // you can use any default center
                  });

                  this.users.forEach((item) => {

                      const person = { lat: Number(item.lat), lng: Number(item.lng) };
                      console.log(person);

                      const marker = new google.maps.Marker({
                          position: person,
                          map: map,
                      });

                      // declare a variable called batteryLevel
                      let batteryLevel;
                      if (typeof item.battery === "string" && item.battery.includes(":")) {
                          batteryLevel = item.battery.split(":")[1];
                      } else {
                          batteryLevel = "0%";
                      }
                      var status = this.getStatus(item.lastSeen);


                      const infowindow = new google.maps.InfoWindow({
                          content: `<p>${status}</p><h6 class="text-capitalize d-flex align-items-center"><span class="offline-agent mr-2"></span> <span>${item.names} | <small>${item.role} | ${item.zone} | ${item.phoneNumber} | ${item.email}</small></span></h6> <p class="pb-0 mb-0">Last seen at <strong>${item.lastAddress}</strong> at <i>${item.lastSeen}</i> <b>(${this.humanDateTimeAgo(item.lastSeen)})</b> </strong></p><p><strong>${item.des} ${item.distance} km</strong><div class="listview text-align-left text-capitalize pl-0">  <div class="listview__header text-align-left text-capitalize text-left"><strong>Battery ${batteryLevel}</strong> remaining</div> <div class="progress"> <div class="progress-bar progress-bar-warning" style="width: ${batteryLevel}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> </div></div></p>`,
                      });



                      let url ;

                      if(status === "Active"){

                          if(item.des==="OUTSIDE ZONE"){
                              url ="assets/images/users/outside-agent.svg"
                          }else {
                              url ="assets/images/users/active-agent.svg"

                          }

                      }else if(status==="Inactive"){
                          if(item.des==="OUTSIDE ZONE"){
                              url ="assets/images/users/outside-agent.svg"
                          }else{
                              url ="assets/images/users/inactive-agent.svg"
                          }

                      }else {
                          url ="assets/images/users/dormant-agent.svg"
                      }

                      //inactive agent icon
                      var agent = {
                          url: url, // url
                          scaledSize: new google.maps.Size(50, 50), // scaled size
                          origin: new google.maps.Point(0,0), // origin
                          anchor: new google.maps.Point(0, 0) // anchor
                      };

                      marker.setIcon(agent);
                      marker.addListener("mouseover", () => {
                          infowindow.open(map, marker);
                      });
                      marker.addListener("mouseout", () => {
                          infowindow.close();
                      });
                  });




            },

              thisWeek(){
                var walletOptions = {
                    series: [parseInt(this.thisWeekStats.total), parseInt(this.thisWeekStats.present), parseInt(this.thisWeekStats.absent), parseInt(this.thisWeekStats.withinZone)],
                    chart: {
                        height: 302,
                        type: "radialBar"
                    },
                    plotOptions: {
                        radialBar: {
                            offsetY: 0,
                            startAngle: 0,
                            endAngle: 270,
                            hollow: {
                                margin: 5,
                                size: "25%",
                                background: "transparent",
                                image: void 0
                            },
                            track: {
                                show: !0,
                                startAngle: void 0,
                                endAngle: void 0,
                                background: "#f2f2f2",
                                strokeWidth: "400 Agents",
                                opacity: 1,
                                margin: 10,
                                dropShadow: {
                                    enabled: !1,
                                    top: 0,
                                    left: 0,
                                    blur: 3,
                                    opacity: .8
                                }
                            },
                            dataLabels: {
                                name: {
                                    show: !0,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    offsetY: -10
                                },
                                value: {
                                    show: !0,
                                    fontSize: "14px",
                                    offsetY: 4,
                                    formatter: function (e) {
                                        return e + ""
                                    }
                                },
                                total: {
                                    show: !0,
                                    label: "Total",
                                    color: "#373d3f",
                                    fontSize: "16px",
                                    fontFamily: void 0,
                                    fontWeight: 600,
                                    formatter: function (e) {
                                        return e.globals.seriesTotals.reduce(function (e, t) {
                                            return e + t
                                        }, 0) + ""
                                    }
                                }
                            }
                        }
                    },
                    stroke: {
                        lineCap: "round"
                    },
                    colors: ["#1584c1", "#1ac279", "#cd0e4a","#0ca769","#a70c0c"],
                    labels: ["Total", "Present", "Absent","Within Zone","Outside Zone"],
                    legend: {
                        show: !1
                    }
                };
                (chart = new ApexCharts(document.querySelector("#wallet-balance-chart"), walletOptions)).render();
            }
        }
    }
</script>

<style scoped>

</style>