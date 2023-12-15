import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import TopHeader from './TopHeader';
import BarMenu from './BarMenu';
import { useCookies } from 'react-cookie';
import { getInfo } from '~/apis';
import { useState } from 'react';

const cx = classNames.bind(styles);
let dataTopHeader = [
    'Khách',
];

function Header({ title }) {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);
    const [name, setName] = useState('');
    if (cookie.user) {
        if (cookie.user.role == 1) {
            dataTopHeader = [
                'Admin',
                'Vai trò: Quản trị viên'
            ]
        }
        else {
            getInfo(cookie.user.masv).then((data) => {
                setName(data.tensv);
            })
            dataTopHeader = [
                name,
                'Vai trò: Sinh viên'
            ]
        }
    }
    else {
        dataTopHeader = dataTopHeader;
    }
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>{title}</h2>
            <TopHeader data={dataTopHeader} />
            <BarMenu />
        </div>
    );
}

export default Header;
