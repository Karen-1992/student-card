import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

export default function InfoModal({ status, onToggle, onRedirect }) {
    const handleShow = () => onToggle();
    const handleClose = () => {
        onToggle();
        onRedirect();
    };
    return (
        <>
            <Modal show={status} onHide={handleShow}>
                <Modal.Body>Обновлено!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

InfoModal.propTypes = {
    status: PropTypes.bool,
    onToggle: PropTypes.func,
    onRedirect: PropTypes.func
};
