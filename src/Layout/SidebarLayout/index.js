import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './SidebarLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const datalistmenu = [
    {
        title: 'Sinh viên',
        to: '/admin/qlsv',
    },
    {
        title: 'Học phần',
        to: '/admin/qlhp',
    },
];
function SidebarLayout({ children, data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <Sidebar listmenu={datalistmenu} />
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default SidebarLayout;
