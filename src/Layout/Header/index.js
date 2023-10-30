import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import TopHeader from './TopHeader';
import BarMenu from './BarMenu';

const cx = classNames.bind(styles);
const dataTopHeader = [
    "Khách"
    // 'Nguyễn Xuân Ngọc(201210256)',
    // "Vai trò: Sinh viên",
]
const dataBottomMenu = [
    'Trang chủ',
    'Đăng nhập',
    'Hỏi đáp',
    'Trợ giúp'
]
function Header({ title }) {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>{title}</h2>
            <TopHeader data={dataTopHeader} />
            <BarMenu data={dataBottomMenu} />
        </div>
    );
}

export default Header;