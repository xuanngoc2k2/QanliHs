import { useNavigate } from 'react-router-dom';
import styles from './BarMenu.module.scss';
import classNames from 'classnames/bind';
import { useCookies } from 'react-cookie';
import { logout } from '~/apis';

const cx = classNames.bind(styles);

function BarMenu({ data }) {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);

    const navigate = useNavigate();
    return (
        <div className={cx('box-menu')}>
            <ul style={{
                marginBottom: -3,
                marginTop: -4,
            }}>
                <li>
                    <a href="/admin/qlsv">Trang chủ</a>
                </li>
                <li style={{ cursor: 'pointer' }}>
                    {cookie.user && (
                        <div
                            onClick={async () => {
                                await logout();
                                navigate('/login');
                            }}
                        >
                            Đăng Xuất
                        </div>
                    )}
                    {!cookie.user && <a href="/">Đăng nhập</a>}
                </li>
                <li>
                    <a href="/">Hỏi đáp</a>
                </li>
                <li>
                    <a href="/">Trợ giúp</a>
                </li>
            </ul>
        </div>
    );
}

export default BarMenu;
