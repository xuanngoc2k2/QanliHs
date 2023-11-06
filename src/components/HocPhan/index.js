import { gvDeleteCourse } from '~/apis';
import UpdateCourseModal from '../modals/UpdateCourse';
import { useState } from 'react';

function HocPhan({ data, reload }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="card col col-xl-3 col-6 mx-4 my-4">
            <img src="https://img.lovepik.com/photo/40015/9423.jpg_wh860.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.TenMH}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Mã MH: {data.MaMH}</p>
                    <p className="card-text ">Số tín chỉ: {data.SoTC}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="card-text">Kì học: {data.HocKy}</p>
                    <p className="card-text">Năm học: {data.NamHoc}</p>
                </div>

                <p className="card-text">Giáo viên phụ trách: {data.GvName}</p>
                <p className="card-text">Thòi gian học: {data.Time}</p>
                <p className="card-text">Tổng số: {data.Limit} sinh viên</p>
                <div className="d-flex justify-content-between">
                    <button onClick={() => {}} className="btn btn-primary">
                        Xem
                    </button>
                    <button onClick={() => setShowModal(true)} className="btn btn-warning">
                        Sửa
                    </button>

                    <button
                        onClick={() => {
                            try {
                                gvDeleteCourse(data.id);
                                reload();
                            } catch {
                                alert('Lỗi xóa');
                            }
                        }}
                        className="btn btn-danger"
                    >
                        Xóa
                    </button>
                </div>
            </div>

            {showModal && (
                <UpdateCourseModal
                    show={showModal}
                    handleClose={() => {
                        setShowModal(false);
                        reload();
                    }}
                    data={data}
                />
            )}
        </div>
    );
}

export default HocPhan;
