import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal"

function Popup({handlePopup, message}) {
    const [show, setShow] = useState(true)

    const handleCloseToParent = () => {
        handleClose();
        handlePopup(false)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleCloseToParent}>
            <Modal.Header closeButton>
                <Modal.Title>Try again</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleCloseToParent}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Popup;