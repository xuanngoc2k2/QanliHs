import Home from "~/pages/Home"
import Login from "~/pages/Login"
import Admin from "~/pages/Admin"
// import XemDiem from "~/pages/XemDiem"
// import NhapDiem from "~/pages/NhapDiem"
// import GiangVienHome from "~/pages/GiangVienHome"
import SidebarLayout from "~/Layout/SidebarLayout"
import QuanLiSV from "~/components/QuanLiSV"
import Sidebar from "~/Layout/Sidebar"
import QuanLiHP from "~/components/QuanLiHP"
const datalistmenu = [
    {
        title: "Tra cứu điểm",
        to: '##',
    },
    {
        title: "Xem lịch học",
        to: "#ff",
    }
]
const publicRoutes = [
    { path: '/', component: Home, layout: SidebarLayout },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin, layout: SidebarLayout, childrenlayout: datalistmenu },
    { path: '/admin/qlsv', component: QuanLiSV, layout: SidebarLayout },
    { path: '/admin/qlhp', component: QuanLiHP, layout: SidebarLayout }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };