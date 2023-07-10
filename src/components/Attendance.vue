<template>


<head>

    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
                            <h4 class="mb-sm-0 font-size-18">Daily Attendance</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li @click="gotTo('dashboard')" class="breadcrumb-item">Home</li>
                                    <li class="breadcrumb-item active">Attendance</li>
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

                                        <th scope="col">Total</th>
                                        <th scope="col">Checking</th>
                                        <th scope="col">Absent</th>
                                        <th scope="col">Date</th>

                                    </tr>
                                    </thead>
                                    <tfoot class="table-dark">
                                    <tr>

                                        <td class="text-capitalize" colspan="3">22 Agents</td>
                                        <td>22</td>
                                        <td></td>

                                    </tr>
                                    </tfoot>
                                    <tbody>
                                    <tr v-for="(item, index) in attendance" :value="item" :key="index">

                                        <td  style="background: rgba(176,226,253,0.51);  cursor: pointer;&:hover {background: yellow;}" >
                                            <a href="" title="View Details">{{item.Total}}</a>

                                        </td>
                                        <td @click="getAttendanceDetails(item.ActivityDate)" style="background: rgba(176,253,204,0.51); cursor: pointer">

                                            <a title="View Details">{{item.TotalCheckIn}}</a>


                                        </td>
                                        <td @click="getAttendanceDetailsAbsent(item.ActivityDate)" style="background: rgba(253,182,176,0.51);  cursor: pointer">
                                            <a title="View Details">{{item.TotalAbsent}}</a>
                                        </td>
                                        <td style="background: rgba(253,225,176,0.51)">{{item.Date}}</td>

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
    /* eslint-disable */
    import Navigation from "@/components/Navigation";
    import router from "@/router";
    import {execute} from "@/api";
    export default {
        name: "AddUser",
        components: {Navigation},
        data() {
            return{
                attendance:[ {
                    id: 1,
                    Total: 462,
                    TotalCheckIn: 7,
                    TotalAbsent: 455,
                    ActivityDate: "2023-06-30",
                    Date: "Friday, June 30,  2023"
                }]
            }
        },
        computed: {

        },
        watch: {

        },

        mounted() {
            this.getAttendance()

        },
        methods:{
            getAttendanceDetails(ActivityDate){
                sessionStorage.setItem("ActivityDate",ActivityDate)
                this.gotTo('attendance_details')

            },
            getAttendanceDetailsAbsent(ActivityDate){
                sessionStorage.setItem("ActivityDate",ActivityDate)
                this.gotTo('attendance_details_absent')

            },
            gotTo(route){
                router.push(route)

            },
            getAttendance(){
                const data = new FormData();
                data.append("function", "getAttendance");
                execute(data)
                    .then((res) =>{
                        if (res.data.success) {
                            this.attendance = res.data.data.attendance
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            }
        },
    }
</script>

<style scoped>

</style>