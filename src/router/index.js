import { createWebHashHistory, createRouter } from "vue-router";

import loging from "../components/Login.vue"
import dashboard from "../components/Dashboard.vue"
import attendance from "../components/Attendance.vue"
import attendance_details from "../components/AttendanceDetails.vue"
import agents from "../components/Agents.vue"
import AttendanceDetailsAbsent from "@/components/AttendanceDetailsAbsent";
import WithinZone from "@/components/WithinZone";
import OutSideZone from "@/components/OutSideZone";
import Inactive from "@/components/Inactive";



const routes = [
    {
        path: "/",
        name: "Login-page",
        component: loging,
        meta: {public: true}
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard,
        meta: {public: true}
    },
    {
        path: "/attendance",
        name: "attendance",
        component: attendance,
        meta: {public: true}
    },{
        path: "/attendance_details",
        name: "attendance_details",
        component: attendance_details,
        meta: {public: true}
    },
    {
        path: "/attendance_details_absent",
        name: "attendance_details_absent",
        component: AttendanceDetailsAbsent,
        meta: {public: true}
    },
    {
        path: "/agents",
        name: "agents",
        component: agents,
        meta: {public: true}
    },{
        path: "/within",
        name: "within",
        component: WithinZone,
        meta: {public: true}
    },{
        path: "/outside",
        name: "OutSideZone",
        component: OutSideZone,
        meta: {public: true}
    },{
        path: "/inactive",
        name: "Inactive",
        component: Inactive,
        meta: {public: true}
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;