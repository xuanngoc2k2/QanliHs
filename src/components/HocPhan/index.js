import { Link } from 'react-router-dom';
import styles from './HocPhan.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HocPhan({ data }) {
    return (
        <Link to={`/course/${data.id}`} className={cx('hoc-phan-card')}>
            <h2>{data.courseName}</h2>
            <p>Kì học: {data.semester}</p>
            <p>Giáo viên phụ trách: {data.teacher}</p>
            <p>Tổng số sinh viên: {data.totalStudents}</p>
        </Link>
    );
}

export default HocPhan;