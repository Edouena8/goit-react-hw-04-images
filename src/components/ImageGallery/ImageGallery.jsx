import ImageGalleryItem from "components/ImageGalleryItem";
// import Loader from "components/Loader";
import { ImgGallery } from "./ImageGallery.styled";

const ImageGallery = ({images}) => { 
    console.log(images)
        return (      
            <ImgGallery>
                {images.map(image => (
                    <ImageGalleryItem image={image} key={image.id}/>
                ))}                  
            </ImgGallery>           
        );
};


export default ImageGallery;