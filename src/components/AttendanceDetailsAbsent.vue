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
                                <h4 class="mb-sm-0 font-size-18">{{Absent.length}} Absent {{humanDate(ActivityDate)}}</h4>

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
                                                    <label for="selectAll" class="d-none">Select All</label>
                                                    <input class="form-check-input mt-0 pt-0 form-check-dark" type="checkbox" id="selectAll">

                                                </div>
                                            </th>

                                            <th scope="col">Name</th>
                                            <th scope="col">Checking</th>
                                            <th scope="col">Checkout</th>
                                            <th scope="col">Date</th>

                                        </tr>
                                        </thead>
                                        <tfoot class="table-dark">
                                        <tr>

                                            <td class="text-capitalize" colspan="3">{{Absent.length}} Agents</td>
                                            <td></td>
                                            <td></td>

                                        </tr>
                                        </tfoot>
                                        <tbody>
                                        <tr v-for="(item, index) in Absent" :value="item" :key="index">

                                            <td style="background: rgba(176,226,253,0.51)">
                                                <div class="d-flex  align-items-center">
                                                    <div class="the-mail-checkbox pr-4">
                                                        <input class="form-check-input mt-0 pt-0 form-check-dark" type="checkbox">
                                                    </div>

                                                </div>
                                            </td>

                                            <td  style="background: rgba(176,226,253,0.51)" >
                                                <a href="tel:{{item.phoneNumber}}" title="View Details">{{item.names}}</a>
                                                <p class="mb-0 pb-0">
                                                    <small>{{item.role}} in {{item.zone}}</small>
                                                </p>
                                                <p class="mb-0 pb-0">
                                                    <small><a href="tel:{{item.phoneNumber}}">{{item.phoneNumber}}</a> </small>
                                                </p>
                                                <p class="mb-0 pb-0">
                                                    <small>{{humanDateTimeAgo(item.lastSeen)}}</small> @<small> <b><i>{{item.lastAddress}}</i></b> {{item.des}} <b>{{item.distance}} KM </b></small>
                                                </p>

                                            </td>
<!--
                                            <td  style="background: rgba(176,226,253,0.51)" >
                                                <a href="attendance_details.html" title="View Details">{{item.names}}</a>

                                            </td>-->
                                            <td style="background: rgba(176,253,204,0.51)">

                                                <a   title="View Details">Not checked in</a>


                                            </td>
                                            <td style="background: rgba(253,182,176,0.51)">
                                                <a   title="View Details">Not checked in</a>

                                            </td>
                                            <td style="background: rgba(253,225,176,0.51)">{{humanDate(ActivityDate)}}</td>

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
                Absent: [
                    {
                        id: "8",
                        names: "Michael Dabaly",
                        idNo: "30729297",
                        phoneNumber: "0702303080",
                        email: null,
                        zone: "ALL",
                        password: "$2y$10$au6kgtdjBq.xLoeqEK6I3.q2fofoDQY7exVeWEJU9eA9BkcP.jGKe",
                        role: "DIRECTOR",
                        lastAddress: "\nNairobi, Nairobi County, Kenya, 162",
                        lat: "-1.2565452897051184",
                        lng: "36.7872354472753",
                        logging: "true",
                        lastSeen: "2023-07-03 17:20:43",
                         des: "OUTSIDE ZONE",
                        distance: "10",
                        battery: "Battery level: 60%"
                    }],
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
            humanDateTimeAgo(date) {

               return moment(date).fromNow();

            },
            router() {
                return router
            },
            gotTo(route){
                router.push(route)
            },
            getAttendanceDetails(){
                this.Absent.splice(0)
                const data = new FormData();
                data.append("function", "getAttendanceDetails");
                data.append("date", this.ActivityDate);
                execute(data)
                    .then((res) =>{
                        if (res.data.success) {
                            this.Absent = res.data.data.Absent
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