import Admin from '~/pages/Admin';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
// import XemDiem from "~/pages/XemDiem"
// import NhapDiem from "~/pages/NhapDiem"
// import GiangVienHome from "~/pages/GiangVienHome"
import SidebarLayout from '~/Layout/SidebarLayout';
import QuanLiHP from '~/components/QuanLiHP';
import QuanLiSV from '~/components/QuanLiSV';
import BangDiemLopHoc from '~/pages/BangDiemLopHoc';
import BangDiemSV from '~/pages/BangDiemSV';
const datalistmenu = [
    {
        title: 'Tra cứu điểm',
        to: '##',
    },
    {
        title: 'Xem lịch học',
        to: '#ff',
    },
];
const publicRoutes = [
    { path: '/', component: Home, layout: SidebarLayout },
    { path: '/course/:id', component: BangDiemLopHoc, layout: SidebarLayout },
    { path: '/sinh-vien/:id', component: BangDiemSV, layout: SidebarLayout },

    { path: '/login', component: Login },
    { path: '/admin', component: Admin, layout: SidebarLayout, childrenlayout: datalistmenu },
    { path: '/admin/qlsv', component: QuanLiSV, layout: SidebarLayout },
    { path: '/admin/qlhp', component: QuanLiHP, layout: SidebarLayout },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
