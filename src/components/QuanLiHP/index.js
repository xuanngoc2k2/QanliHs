import { Link } from 'react-router-dom';
import HocPhan from '../HocPhan';
import styles from './QuanliHP.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const courses = [
    {
        id: 1,
        courseName: 'Course 1',
        semester: 'Fall 2023',
        teacher: 'Teacher A',
        totalStudents: 30,
    },
    {
        id: 2,
        courseName: 'Course 2',
        semester: 'Spring 2024',
        teacher: 'Teacher B',
        totalStudents: 25,
    },
    {
        id: 1,
        courseName: 'Course 1',
        semester: 'Fall 2023',
        teacher: 'Teacher A',
        totalStudents: 30,
    },
    {
        id: 2,
        courseName: 'Course 2',
        semester: 'Spring 2024',
        teacher: 'Teacher B',
        totalStudents: 25,
    },
    {
        id: 1,
        courseName: 'Course 1',
        semester: 'Fall 2023',
        teacher: 'Teacher A',
        totalStudents: 30,
    },
    {
        id: 2,
        courseName: 'Course 2',
        semester: 'Spring 2024',
        teacher: 'Teacher B',
        totalStudents: 25,
    },

];

function QuanLiHP() {
    return (
        <div className={cx('container')}>
            <h1 className={cx('title')}>Danh sách Học Phần</h1>
            <Link className={cx('btn-them')} to="/add-hp">Thêm học phần</Link>
            <div className={cx('list-hp')}>
                {courses.map((course) => (
                    <HocPhan key={course.id} data={course} />
                ))}
            </div>
        </div>
    );
}

export default QuanLiHP;