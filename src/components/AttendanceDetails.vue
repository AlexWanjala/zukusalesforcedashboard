<template>

<head>

    <meta charset="utf-8" />
    <title>Sales Agent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Keep your finances and membership up to date" name="description" />
    <meta content="Kelvin Njuguna Ndungu" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/logo.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

    <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/libs/%40chenfengyuan/datepicker/datepicker.min.css">

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />


</head>

<body data-sidebar="dark">



<!-- Begin page -->
<div id="layout-wrapper">

    <Navigation/>



    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

        <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0 font-size-18">{{Present.length}} Present on {{humanDate(ActivityDate)}}</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li @click="gotTo('attendance')" class="breadcrumb-item">Attendance</li>
                                    <li class="breadcrumb-item active">Attendance Details</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                    <button type="button" class="btn btn-secondary waves-effect btn-label waves-light me-3 write-msg-btn"><i class="mdi mdi-pencil align-middle me-2 label-icon"></i> Message Selected Member(s)</button>
                                </div>
                            </div>
                            <div class="card-body scrollable-table">
                                <table class="table align-middle table-nowrap table-hover dt-responsive contacts-table" id="datatable-buttons">
                                    <thead class="table-dark">
                                    <tr>

                                        <th scope="col" style="width:70px">
                                            <div class="the-mail-checkbox pr-4">
                                                <label class="d-none">#</label>

                                            </div>
                                        </th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Check-in</th>
                                        <th scope="col">Check-out</th>
                                        <th scope="col">Hours Worked</th>


                                    </tr>
                                    </thead>
                                    <tfoot class="table-dark">
                                    <tr>

                                        <td class="text-capitalize" colspan="3">{{Present.length}} Agents</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                    </tr>
                                    </tfoot>
                                    <tbody>
                                    <tr v-for="(item, index) in Present" :value="item" :key="index">
                                        <td style="background: rgba(176,226,253,0.51)">
                                            <div class="d-flex  align-items-center">
                                                <div class="the-mail-checkbox pr-4">
                                                    {{index+1}}.
                                                </div>

                                            </div>
                                        </td>
                                        <td style="background: rgba(253,225,176,0.51)">{{humanDate(item.Attendance.date)}}</td>
                                        <td  style="background: rgba(176,226,253,0.51)" >
                                            <a href="tel:{{item.Person.phoneNumber}}" title="View Details">{{item.Attendance.names}}</a>
                                            <p class="mb-0 pb-0">
                                                <small>{{item.Person.role}} in {{item.Person.zone}}</small>
                                            </p>
                                            <p class="mb-0 pb-0">
                                                <small><a href="tel:{{item.Person.phoneNumber}}">{{item.Person.phoneNumber}}</a> </small>
                                            </p>
                                            <p class="mb-0 pb-0">
                                               <small>{{humanDateTimeAgo(item.Attendance.checkingTime)}}</small> @<small> <b><i>{{item.Attendance.checkingAddress}}</i></b> {{item.Person.des}} <b>{{item.Person.distance}} KM </b></small>
                                            </p>

                                        </td>
                                        <td v-if="checkStatus(formattedDate(item.Attendance.checkingTime)) !='Late check in'" style="background: rgba(176,253,204,0.51)">

                                            <a title="View Details" style="color: #00abe4">{{formattedDate(item.Attendance.checkingTime)}}</a>
                                            <p class="mb-0 pb-0">
                                                <small>{{checkStatus(formattedDate(item.Attendance.checkingTime))}}</small>
                                            </p>


                                        </td>
                                        <td v-if="checkStatus(formattedDate(item.Attendance.checkingTime))=='Late check in'" style="background: rgba(253,176,176,0.51)">

                                            <a title="View Details" style="color: #00abe4">{{formattedDate(item.Attendance.checkingTime)}}</a>
                                            <p class="mb-0 pb-0">
                                                <small>{{checkStatus(formattedDate(item.Attendance.checkingTime))}}</small>
                                            </p>

                                        </td>
                                        <td style="background: rgba(176,229,253,0.51)">
                                            <a style="color: #00abe4" title="View Details">{{formattedDate(item.Attendance.checkoutTime)}}</a>
                                            <p class="mb-0 pb-0">
                                                <small>{{checkStatusCheckout(formattedDate(item.Attendance.checkoutTime))}}</small>
                                            </p>
                                        </td>
                                        <td style="background: rgba(176,229,253,0.51)">
                                            <a style="color: #00abe4" title="View Details"> {{hoursWorked(item.Attendance.checkingTime,item.Attendance.checkoutTime)}} Hrs</a>
                                        </td>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                </div>





            </div>
            <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <footer class="footer ">
            <div class="container-fluid ">
                <div class="row ">
                    <div class="col-sm-6 ">
                        Zuku
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
    <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay "></div>


    </body>


</template>

<script>
    import Navigation from "@/components/Navigation";
    import router from "@/router";
    import {execute} from "@/api";
    import moment from 'moment';
    export default {
        name: "AttendanceDetails",
        components: {Navigation},
        data(){
            return{
                Present:[
                    {
                        Person: {
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
                            logging: "true",
                            lastSeen: "2023-07-04 11:00:24",
                            des: "OUTSIDE ZONE",
                            distance: "11504",
                            battery: "Battery level: 85%"
                        },
                        Attendance: {
                            id: "6",
                            idNo: "1234",
                            names: "ALEX WANJALAA",
                            email: "wanjalaalex25@gmail.com",
                            phoneNumber: "0704722837",
                            date: "2023-06-12",
                            checkingTime: "2023-06-12 11:45:19",
                            checkoutTime: "2023-06-12 12:29:27",
                            checkingAddress: "%0ANairobi%2C%20Nairobi%20County%2C%20Kenya%2C%20Kenya",
                            checkoutAddress: "\nNairobi, Nairobi County, Kenya, MVG2+228",
                            checkingLat: "-1.32498",
                            checkingLng: "36.84985666666667",
                            checkoutLat: "-1.3249600000000001",
                            checkoutLng: "36.850006666666665",
                            checkingDes: "OUTSIDE ZONE",
                            distanceChecking: "3",
                            zone: null
                        }
                    }
                ],
                message:'',
                ActivityDate:''
            }
        },
        mounted() {
            //ActivityDate
            this.ActivityDate = sessionStorage.getItem("ActivityDate")
            this.getAttendanceDetails()
        },

        methods: {
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
            router() {
                return router
            },
            gotTo(route){
                router.push(route)
            },
            checkStatus(time) {
                let checkTime = moment(time, 'h:mm A');
                let earlyTime = moment('7:00 AM', 'h:mm A');
                let lateTime = moment('8:00 AM', 'h:mm A');
                if (checkTime.isBefore(earlyTime)) {
                    return 'Early check in';
                } else if (checkTime.isAfter(lateTime)) {
                    return 'Late check in';
                } else {
                    return 'On time check in';
                }},
            checkStatusCheckout(time) {
                if(time==null){
                    return 'No Check out'
                }
                // Parse the time as a moment object
                let checkTime = moment(time, 'h:mm A');
                let earlyTime = moment('5:00 PM', 'h:mm A');
                let normalTime = moment('6:59 PM', 'h:mm A');
                if (checkTime.isBefore(earlyTime)) {
                    return 'Early';
                } else if (checkTime.isAfter(normalTime)) {
                    return 'Forced checkout';
                } else {
                    return 'Normal';
                }
            },
            humanDateTimeAgo(date) {

                return moment(date).fromNow();

            },
            hoursWorked(checkingTime1,checkoutTime1){

                   var  checkingTime = moment(checkingTime1, "YYYY-MM-DD HH:mm:ss")
                   var checkoutTime = moment(checkoutTime1, "YYYY-MM-DD HH:mm:ss")

                    var difference =  checkoutTime.diff(checkingTime);

                   var hours = (difference / 3600000).toFixed(2);

                   if(hours==null || hours =='NaN'){
                       return null;
                   }else {
                       return hours;
                   }

            },
            getAttendanceDetails(){
                this.Present.splice(0)
                const data = new FormData();
                data.append("function", "getAttendanceDetails");
                data.append("date", this.ActivityDate);
                execute(data)
                    .then((res) =>{
                        if (res.data.success) {
                            this.Present = res.data.data.Present
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            }
        }
    }
</script>

<style scoped>

</style>