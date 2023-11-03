import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function AddCourseModal({ show, handleClose, data }) {
    const onSubmit = async () => {
        if (!TenMH || !gv || !SoTC || !from || !to || !date || !NamHoc || !HocKy || !desc) {
            alert(' Vui long nhap du thong tin');
            return;
        }

        const { id, diemGK, diemCK, sv_id, course_id } = data;
        // await gvUpdateDiem({});

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cap nhat diem mon Hoc </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <>Sinh Viên: Ngọc</>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Diem GK</Form.Label>
                        <Form.Control
                            value={diemGK}
                            onChange={(e) => setDiemGK(e.target.value)}
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Diem CK</Form.Label>
                        <Form.Control value={diemCK} onChange={(e) => setDesc(e.target.value)} as="textarea" rows={3} />
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
