import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { gvGetListCourse } from '~/apis';
import HocPhan from '../HocPhan';
import AddCourseModal from '../modals/AddCoure';
import styles from './QuanliHP.module.scss';

const cx = classNames.bind(styles);

function QuanLiHP() {
    const [show, setShow] = useState(false);

    const [courses, setCourses] = useState([]);
    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    useEffect(() => {
        gvGetListCourse().then((data) => {
            console.log();
            setCourses(data);
        });
    }, []);

    return (
        <div className={cx('container')}>
            <div className="d-flex ">
                <h1 className={cx('title')}>Danh sách Học Phần</h1>
                <Button variant="primary" className="ms-5" onClick={handleShow}>
                    Thêm khóa học
                </Button>
            </div>
            <div className="row">
                {courses.map((course) => (
                    <HocPhan key={course.id} data={course} />
                ))}
            </div>

            {show && <AddCourseModal show={show} handleClose={handleClose}></AddCourseModal>}
        </div>
    );
}

export default QuanLiHP;
