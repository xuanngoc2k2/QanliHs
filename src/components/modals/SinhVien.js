import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { createSv, getAllKhoa, getAllLopbyKhoa, getInfo, getSvbyMsv, gvCreateCourse, gvUpdateCourse, gvUpdateDiemSv, updateSv } from '~/apis';

export default function SinhVienModal({ data, show, handleClose }) {
    const [tensv, setTensv] = useState('');
    const [lop, setLop] = useState(-1);
    const [ngaysinh, setNgaysinh] = useState(null); // Use null to represent an unset date
    const [masv, setMasv] = useState('');
    const [khoa, setKhoa] = useState(-1);
    const [gpa, setGpa] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('');
    const [gioitinh, setGioitinh] = useState(-1);
    const [khoadata, setDtakhoa] = useState([{}]);
    const [lopdata, setDtaLop] = useState([{}]);
    // const [diemqt, setDiemqt] = useState('');
    // const [diemthi, setDiemthi] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await getAllKhoa();
                setDtakhoa(response);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu', error);
            }
        };
        fetchData();
        // if (data) {
        //     setHodem(data.firstName);
        //     setName(data.lastName);
        //     setLop(data.class);
        //     setMsv(data.email);
        // }
    }, [data])

    const onSubmit = async () => {
        const gpaWithoutCommas = gpa.replace(/,/g, '.');
        if (!tensv ||
            !lop ||
            !ngaysinh ||
            !masv ||
            !khoa ||
            !gioitinh) {
            alert('Vui lòng nhập đủ thông tin');
            return;
        } else if (isNaN(parseFloat(gpaWithoutCommas))) {
            alert('GPA phải là kiểu số thực');
            return;
        }
        try {
            let sv = {
                tensv,
                lop,
                ngaysinh: format(ngaysinh, 'yyyy/MM/dd'),
                masv,
                khoa,
                gpa: gpaWithoutCommas,
                sdt,
                email,
                gioitinh
            };
            console.log(sv);
            await createSv(sv);
            alert("Thêm thành công")
        } catch (error) {
            alert('Đã tồn tại sinh viên này');
        }
        handleClose();
    };
    const handleChangeKhoa = (e) => {
        setKhoa(e.target.value)
        if (e.target.value != -1) {
            const fetchData = async () => {
                try {
                    let response = await getAllLopbyKhoa(e.target.value);
                    setDtaLop(response);
                } catch (error) {
                    console.error('Lỗi lấy dữ liệu', error);
                }
            };
            fetchData();
        }
    }
    // const onSubmit = () => {
    //     console.log({
    //         hoten,
    //         lop,
    //         ngaysinh: format(ngaysinh, 'yyyy/MM/dd'),
    //         masv,
    //         khoa,
    //         gpa,
    //         sdt,
    //         email,
    //         gioitinh
    //     });
    //     handleClose();
    // };

    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm sinh viên</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form>
                            <div className='row'>
                                <Form.Group className="mb-3 col-7">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control disabled={Object.keys(data).length === 0 ? false : true}
                                        value={tensv} onChange={(e) => setTensv(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="email">
                                    <Form.Label>Mã sinh viên</Form.Label>
                                    <Form.Control disabled={Object.keys(data).length === 0 ? false : true}
                                        value={masv} onChange={(e) => setMasv(e.target.value)} type="text" />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <Form.Group className="mb-3 col-7" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Ngày sinh</Form.Label>
                                    <DatePicker
                                        selected={ngaysinh}
                                        onChange={(date) => setNgaysinh(date)}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="Chọn ngày"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={20} // Adjust the number of years shown in the dropdown
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form.Control as="select" value={gioitinh} onChange={(e) => setGioitinh(e.target.value)}>
                                        <option value="-1">Chọn giới tính</option>
                                        <option value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="row">
                                <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Khoa</Form.Label>
                                    <Form.Control as="select" value={khoa} onChange={handleChangeKhoa}>
                                        <option value="-1">Chọn khoa</option>
                                        {khoadata.map((v => {
                                            return <option value={v.makhoa}>{v.tenkhoa}</option>
                                        }))}
                                    </Form.Control>
                                    {/* <Form.Control disabled={Object.keys(data).length === 0 ? false : true} value={msv} onChange={(e) => setMsv(e.target.value)} type="text" /> */}
                                </Form.Group>
                                <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lớp</Form.Label>
                                    <Form.Control as="select" value={lop} onChange={(e) => setLop(e.target.value)}>
                                        <option value="-1">Chọn lớp</option>
                                        {lopdata.map((v => {
                                            return <option value={v.malop}>{v.tenlop}</option>
                                        }))}
                                    </Form.Control>
                                    {/* <Form.Control value={lop} onChange={(e) => setLop(e.target.value)} type="text" /> */}
                                </Form.Group>
                                <Form.Group className="mb-3 col-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>GPA</Form.Label>
                                    <Form.Control value={gpa} onChange={(e) => setGpa(e.target.value)} type="text" />
                                </Form.Group>
                            </div>
                            <div className="row">
                                <Form.Group className="mb-3 col-7" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control disabled={Object.keys(data).length === 0 ? false : true} value={sdt} onChange={(e) => setSdt(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                                </Form.Group>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}
