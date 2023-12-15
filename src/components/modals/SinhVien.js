import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createSv, getSvbyMsv, gvCreateCourse, gvUpdateCourse, gvUpdateDiemSv, updateSv } from '~/apis';

export default function SinhVienModal({ data, show, handleClose }) {
    const [hodem, setHodem] = useState('');
    const [name, setName] = useState('');
    const [lop, setLop] = useState('');
    const [msv, setMsv] = useState('');
    console.log(data);
    // const [diemqt, setDiemqt] = useState('');
    // const [diemthi, setDiemthi] = useState('');
    useEffect(() => {
        if (data) {
            setHodem(data.firstName);
            setName(data.lastName);
            setLop(data.class);
            setMsv(data.email);
        }
    }, [data])

    const onSubmit = async () => {
        if (!hodem ||
            !name ||
            !lop ||
            !msv) {
            alert(' Vui long nhap du thong tin');
            return;
        }

        try {
            let sv = {
                "firstName": hodem,
                "lastName": name,
                "class": lop,
                "email": msv,
            }
            if (Object.keys(data).length !== 0) {
                await updateSv(data.id, sv);
                alert("Update thành công")
            }
            else {
                if (Object.keys(getSvbyMsv(msv)).length !== 0) {
                    alert("Mã sinh viên đã tồn tại");
                }
                else {
                    console.log(sv);
                    await createSv(sv);
                }
            }
        } catch (error) {
            alert(error);
        }
        handleClose();
    };

    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm sinh viên</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className='row'>
                                <Form.Group className="mb-3 col-7">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control disabled={Object.keys(data).length === 0 ? false : true} value={hodem} onChange={(e) => setHodem(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="email">
                                    <Form.Label>Tên</Form.Label>
                                    <Form.Control disabled={Object.keys(data).length === 0 ? false : true} value={name} onChange={(e) => setName(e.target.value)} type="text" />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <Form.Group className="mb-3 col-7" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Mã sinh viên</Form.Label>
                                    <Form.Control disabled={Object.keys(data).length === 0 ? false : true} value={msv} onChange={(e) => setMsv(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lớp</Form.Label>
                                    <Form.Control value={lop} onChange={(e) => setLop(e.target.value)} type="text" />
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
