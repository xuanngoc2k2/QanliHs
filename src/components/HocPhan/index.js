import { Link } from 'react-router-dom';
import styles from './HocPhan.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HocPhan({ data }) {
    console.log(data);
    return (
        // <Link to={`/course/${data.id}`} className={cx('hoc-phan-card')}>
        <div className="card col col-3">
            <img src="https://img.lovepik.com/photo/40015/9423.jpg_wh860.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.TenMH}</h5>
                <p className="card-text">Mã MH: {data.MaMH}</p>
                <p className="card-text">Số tín chỉ: {data.SoTC}</p>
                <div className="d-flex">
                    <p className="card-text">Kì học: {data.HocKy}</p>
                    <p className="card-text">Năm học: {data.NamHoc}</p>
                </div>

                <p className="card-text">Giáo viên phụ trách: {data.GvName}</p>
                <p className="card-text">Thòi gian học: {data.Time}</p>
                <p className="card-text">Tổng số: {data.Limit}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
        // </Link>
    );
}

export default HocPhan;
