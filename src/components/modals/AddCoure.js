import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { gvCreateCourse } from '~/apis';
import { v4 as uuidv4 } from 'uuid';

export default function AddCourseModal({ show, handleClose }) {
    const [TenMH, setName] = useState('');
    const [gv, setGV] = useState('');
    const [SoTC, setSoTc] = useState(3);
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(2);
    const [date, setDate] = useState('T2');
    const [NamHoc, setNameHoc] = useState(new Date().getFullYear());
    const [HocKy, setKiHoc] = useState('1');
    const [desc, setDesc] = useState('');
    const [Limit, setLimit] = useState(40);
    const [DiaChi, setDiaChi] = useState('');

    const onSubmit = async () => {
        if (!TenMH || !gv || !SoTC || !from || !to || !date || !NamHoc || !HocKy || !desc) {
            alert(' Vui long nhap du thong tin');
            return;
        }

        await gvCreateCourse({
            id: uuidv4(),
            MaMH: 1,
            TenMH,
            gv,
            SoTC,
            from,
            to,
            date,
            NamHoc,
            HocKy,
            desc,
            Limit,
            DiaChi,
        });

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm khóa hoc</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Tên môn học</Form.Label>
                        <Form.Control value={TenMH} onChange={(e) => setName(e.target.value)} type="text" />
                    </Form.Group>

                    <div className="row">
                        <Form.Group className="mb-3 col-9" controlId="exampleForm.ControlInput1">
                            <Form.Label>Giao Vien</Form.Label>
                            <Form.Control value={gv} onChange={(e) => setGV(e.target.value)} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3" controlId="email">
                            <Form.Label>So Tc</Form.Label>
                            <Form.Control value={SoTC} onChange={(e) => setSoTc(e.target.value)} type="number" />
                        </Form.Group>
                    </div>

                    <div className="row">
                        <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Kì học</Form.Label>
                            <Form.Select
                                value={HocKy}
                                onChange={(e) => setKiHoc(e.target.value)}
                                aria-label="Default select example"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="He">He</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-3" controlId="email">
                            <Form.Label>Năm Hoc</Form.Label>
                            <Form.Select value={NamHoc} onChange={(e) => setNameHoc(e.target.value)}>
                                <option value="2023">2023-2024</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 col-3" controlId="email">
                            <Form.Label>Phòng học</Form.Label>
                            <Form.Control value={DiaChi} onChange={(e) => setDiaChi(e.target.value)} type="text" />
                        </Form.Group>
                    </div>

                    <div className="row">
                        <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Thoi gian hang tuan</Form.Label>
                            <Form.Select value={date} onChange={(e) => setDate(e.target.value)}>
                                <option value="T2">T2</option>
                                <option value="T3">T3</option>
                                <option value="T4">T4</option>
                                <option value="T5">T5</option>
                                <option value="T6">T6</option>
                                <option value="T7">T7</option>
                                <option value="CN">CN</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-3" controlId="email">
                            <Form.Label>Từ tiết</Form.Label>
                            <Form.Control value={from} onChange={(e) => setFrom(e.target.value)} type="number" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3" controlId="email">
                            <Form.Label>Đến tiết</Form.Label>
                            <Form.Control value={to} onChange={(e) => setTo(e.target.value)} type="number" />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control value={desc} onChange={(e) => setDesc(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>
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
    );
}
