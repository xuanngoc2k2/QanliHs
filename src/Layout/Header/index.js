import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import TopHeader from './TopHeader';
import BarMenu from './BarMenu';

const cx = classNames.bind(styles);
const dataTopHeader = [
    'Khách',
    // 'Nguyễn Xuân Ngọc(201210256)',
    // "Vai trò: Sinh viên",
];

function Header({ title }) {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>{title}</h2>
            <TopHeader data={dataTopHeader} />
            <BarMenu />
        </div>
    );
}

export default Header;
