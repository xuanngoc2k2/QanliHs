import { gvDeleteCourse, gvGetCourse, gvThongKe, updateSv } from '~/apis';
import UpdateCourseModal from '../modals/UpdateCourse';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThongKe from '../modals/ThongKe';

function HocPhan({ data, reload }) {
    const [showModal, setShowModal] = useState(false);
    const [courseData, setCourseData] = useState(null);
    const [showbd, setShowbd] = useState(false);
    const [databd, setDatabd] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await gvThongKe(data.id);
                setDatabd(response);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu biểu đồ', error);
            }
        };
        fetchData();
    }, [data.id])
    useEffect(() => {
        // Truy cập API và lấy dữ liệu khi component được render
        const fetchData = async () => {
            try {
                const response = await gvGetCourse(data.id);
                setCourseData(response);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu', error);
            }
        };
        fetchData();
    }, [data.id]);

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/admin/score/' + id);
    }
    return (
        <div className="card col col-xl-3 col-6 mx-4 my-4" style={{ minWidth: 420 }}>
            <img src="https://img.lovepik.com/photo/40015/9423.jpg_wh860.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{ textTransform: 'uppercase' }}>{data.tenmonhoc}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Tên học phần: {data.tenhp}</p>
                    <p className="card-text">Thứ tự: {data.thutu}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text ">Số tín chỉ: {data.sotc}</p>
                    <p className="card-text">Kì học: {data.hocki}</p>
                    <p className="card-text">Năm học: {data.nam}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Phòng học: {data.diadiemhoc}</p>
                    <p className="card-text">Từ tiết: {data.tutiet}</p>
                    <p className="card-text">Đến tiết: {data.dentiet}</p>
                </div>
                <p className="card-text">Giáo viên phụ trách: {data.gvphutrach}</p>
                {/* <p className="card-text">Thời gian học: {data.date} tiết {data.from} - {data.to}</p> */}
                <p className="card-text">Tổng số: {data.soluong} sinh viên</p>
                <div className="d-flex justify-content-between">
                    <button onClick={() => { handleClick(data.id) }} className="btn btn-primary">
                        Xem
                    </button>
                    <button onClick={() => setShowModal(true)} className="btn btn-warning">
                        Sửa
                    </button>
                    <button onClick={() => {
                        if (databd !== null) {
                            setShowbd(true)
                        }
                        else {
                            alert('Chưa đủ dữ liệu điểm');
                        }
                    }
                    } className="btn btn-info">
                        Biểu đồ
                    </button>

                    <button
                        onClick={async () => {
                            const shouldDelete = window.confirm('Bạn có chắc chắn muốn xóa môn học này?');
                            if (shouldDelete) {
                                try {
                                    await gvDeleteCourse(data.mahocphan, data.thutu);
                                    console.log(data.mahocphan, data.thutu);
                                    reload();
                                } catch {
                                    alert('Lỗi xóa');
                                }
                            }
                        }}
                        className="btn btn-danger"
                    >
                        Xóa
                    </button>

                </div>
            </div>
            {
                showModal && (
                    < UpdateCourseModal
                        show={showModal}
                        handleClose={() => {
                            setShowModal(false);
                            reload();
                        }}
                        data={courseData}
                    />
                )
            }
            {
                showbd && (
                    <ThongKe show={showbd}
                        handleClose={() => {
                            setShowbd(false);
                            reload();
                        }} data={databd} />
                )
            }
        </div >
    );
}

export default HocPhan;
