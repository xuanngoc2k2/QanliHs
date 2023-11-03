import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { gvGetListCourse } from '~/apis';
import HocPhan from '../HocPhan';
import AddCourseModal from '../modals/AddCoure';
import styles from './QuanliHP.module.scss';

const cx = classNames.bind(styles);

function QuanLiHP() {
    const [show, setShow] = useState(false);
    const [refetch, setRefetch] = useState(false);

    const [courses, setCourses] = useState([]);
    const handleClose = () => {
        setShow(false);
        setRefetch(!refetch);
    };

    const handleShow = () => {
        setShow(true);
    };

    useEffect(() => {
        gvGetListCourse().then((data) => {
            console.log();
            setCourses(data);
        });
    }, [refetch]);

    return (
        <div>
            <div className="d-flex align-item-center">
                <div>
                    <h1 className={cx('title')}>Danh sách Học Phần</h1>
                </div>
                <div className="d-flex align-item-center">
                    <Button variant="primary" className="ms-5" onClick={handleShow}>
                        Thêm khóa học
                    </Button>
                </div>
            </div>
            <Row className="">
                {courses.map((course) => (
                    <HocPhan key={course.id} data={course} />
                ))}
            </Row>

            {show && <AddCourseModal show={show} handleClose={handleClose}></AddCourseModal>}
        </div>
    );
}

export default QuanLiHP;
