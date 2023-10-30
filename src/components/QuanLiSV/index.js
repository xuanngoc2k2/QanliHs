import styles from './QuanLiSV.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteStudent, getStudent } from '~/apis';
import AddStudentModal from '../modals/AddStudent';

const cx = classNames.bind(styles);

function QuanLiSV() {
    const [selectedClass, setSelectedClass] = useState('');
    const [refetch, setRefetch] = useState(true);
    const [show, setShow] = useState(false);

    const [students, setStudents] = useState([]);

    const handleDelete = async (id) => {
        setRefetch(!refetch);
        await deleteStudent(id);
    };

    useEffect(() => {
        getStudent(selectedClass).then((data) => {
            setStudents(data);
        });
    }, [selectedClass, refetch]);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Quản lí sinh viên</h1>
            <div className={cx('info-lop')}>
                <select
                    className={cx('btn-chon')}
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                >
                    <option value="">Chọn lớp</option>
                    <option value="CNTT1">CNTT1</option>
                    <option value="CNTT2">CNTT2</option>
                </select>
                <button onClick={() => setShow(true)} className={cx('btn-them')}>
                    Thêm sinh viên
                </button>
            </div>

            <div className={cx('ds-sinhvien')}>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>GPA</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>SV0{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.dob}</td>
                                <td>{(student.sex = 1 ? 'Nam' : 'Nữ')}</td>
                                <td>{student.GPA}</td>
                                <td>
                                    <button>Chi tiết</button>
                                    <button onClick={() => handleDelete(student.id)} className={cx('delete')}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {show && <AddStudentModal />}
        </div>
    );
}

export default QuanLiSV;
