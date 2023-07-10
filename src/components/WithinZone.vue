<template>
    <head>

    <meta charset="utf-8" />

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
                            <h4 class="mb-sm-0 font-size-18">All</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Analytics</a></li>
                                    <li class="breadcrumb-item active">All</li>
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

                                        <th scope="col">#</th>
                                        <th scope="col">Agent</th>
                                        <th scope="col">Contacts</th>
                                        <th scope="col">Zone</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" class="text-right">Battery</th>
                                    </tr>
                                    </thead>
                                    <tfoot class="table-dark">
                                    <tr>
                                        <td>

                                        </td>
                                        <td class="text-capitalize" colspan="3">{{users.length}}</td>
                                        <td></td>
                                        <td></td>
                                        <td class="text-right text-uppercase">

                                        </td>

                                    </tr>
                                    </tfoot>
                                    <tbody>
                                    <tr  v-for="(item, index) in users" :value="item" :key="index">

                                        <td class="text-capitalize">{{index+1}}</td>
                                        <td class="text-capitalize">
                                            <a href="member-details.html" title="View Details">{{item.names}}</a>
                                            <p class="mb-0 pb-0">
                                                <b>{{humanDateTimeAgo(item.lastSeen)}}</b> at <small>{{item.lastAddress}} </small>
                                            </p>
                                        </td>
                                        <td>
                                            <p class="text-muted mb-0">
                                                <a href="'tel:{{item.phoneNumber}}'">{{item.phoneNumber}}</a>
                                            </p>
                                            <p class="mb-0 pb-0">
                                                <a href="mailto:{{item.email}}">{{item.email}}</a>
                                            </p>
                                        </td>
                                        <td class="text-capitalize">
                                            <a >{{item.zone}}</a>
                                        </td>
                                        <td>
                                            <span v-if="item.des=='WITHIN ZONE'" class="text-uppercase  badge badge-soft-success">{{item.des}}</span>
                                            <span  v-if="item.des !='WITHIN ZONE'"  class="text-uppercase  badge badge-soft-danger">{{item.des}}</span>

                                        </td>
                                        <td class="text-right">
                                            {{item.battery}}
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
    import {email, required} from "@vuelidate/validators";
    import {execute} from "@/api";
    import router from "@/router";
    import moment from "moment";
    export default {
        name: "Agents",
        components: {Navigation},
        data(){
            return{
                users:[
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
                        logging: "true",
                        lastSeen: "2023-07-04 11:00:24",
                        des: "OUTSIDE ZONE",
                        distance: "11504",
                        battery: "Battery level: 85%"
                    }
                ],
                message:'',
            }
        },
        validations(){
            return{
                contact: {
                    email: { required, email } // Matches this.contact.email
                },
                password:{required}
            }
        },
        mounted() {
            this.geUsers()
        },
        methods:{
            humanDateTimeAgo(date) {

                return moment(date).fromNow();

            },
            geUsers(){
                this.users.splice(0)
                const data = new FormData();
                data.append("function", "geUsers");
                data.append("des", "WITHIN ZONE");
                execute(data)
                    .then((res) =>{
                        if (res.data.success) {
                            this.users = res.data.data.users
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
            }

        }

    }
</script>

<style scoped>

</style>