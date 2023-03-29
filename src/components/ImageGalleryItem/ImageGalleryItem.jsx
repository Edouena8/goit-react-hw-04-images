import { useState } from "react";
import PropTypes from "prop-types";
import { ImgGalleryItem, Image } from "./ImageGalleryItem.styled";
import Modal from "components/Modal";

export default function ImageGalleryItem({image}) {
    const [showModal, setShowModal] = useState(false);
    const {id, webformatURL, largeImageURL} = image;

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    return (
        <>                     
            <ImgGalleryItem key={id} >
                <Image src={webformatURL} alt="" onClick={toggleModal}/>
            </ImgGalleryItem>  
            {showModal && (
                <Modal 
                    largeImageURL={largeImageURL} 
                    onClose={toggleModal}
                />
            )}    
        </>
    );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }).isRequired,
};