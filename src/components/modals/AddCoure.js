import React from 'react';
import { button, Modal } from 'react-bootstrap';

export default function AddCourseModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button variant="primary" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    );
}
