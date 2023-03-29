import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Overlay, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, largeImageURL}) {
    
    useEffect(() => {
        const handleEscape = evt => {
            if(evt.code === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleBackdropClick = evt => {
        if(evt.currentTarget === evt.target){
            onClose();
        }
    }

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalContent>
                <img src={largeImageURL} alt="" />
            </ModalContent>
        </Overlay>, modalRoot);
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
