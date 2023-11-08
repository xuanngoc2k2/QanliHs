import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gvGetDiem } from "~/apis";
import styles from './bangdiem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function BangDiemHp() {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    useEffect(() => {
        // Truy cập API và lấy dữ liệu khi component được render
        const fetchData = async () => {
            try {
                const response = await gvGetDiem(id);
                setdata(response);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu', error);
            }
        };
        fetchData();
    }, [id]);
    const handleShow = () => {
        setShow(true);
    };

    console.log(data)
    return (
        <div>
            <div className="col col-5">
                <h1>Danh sách Sinh Viên</h1>
            </div>
            <div classNames="d-flex align-item-center">
                <div className="ms-4 col col-6 d-flex">
                    <Form.Control style={{ width: 400 }}
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Tìm kiếm"
                    />
                    {/* <Button variant="primary" className="ms-5" onClick={handleShow}>
                        Thêm khóa học
                    </Button> */}
                </div>
                <div className="row d-flex align-items-center">
                    <table className={cx('table-score')} style={{ margin: 30, }}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ đêm</th>
                                <th>Tên</th>
                                <th>Lớp</th>
                                <th>MSV</th>
                                <th>Điểm QT</th>
                                <th>Điểm Thi</th>
                                <th>Điểm KT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{row.user.firstName}</td>
                                    <td>{row.user.lastName}</td>
                                    <td>{row.user.class}</td>
                                    <td>{row.user.email}</td>
                                    <td>{row.middle}</td>
                                    <td>{row.final}</td>
                                    <td>{row.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
}

export default BangDiemHp;